import motor.motor_asyncio
import fastapi, typing, bson, pydantic, os
from fastapi.middleware.cors import CORSMiddleware
from bson import ObjectId

api = fastapi.FastAPI()

# Configuração do CORS
origins = [
    "http://localhost:5173",  # Adicione aqui as origens permitidas
]

api.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MONGO_DETAILS = "mongodb://localhost:27017"
client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_DETAILS)
database = client.my_database
collection = database.my_collection

async def response(data: typing.Union[typing.Dict, typing.List[typing.Dict]],
                   success: bool = True,
                   message: str = "Request successful",
                   status_code: int = 200):
    return fastapi.responses.JSONResponse(content={
        "success": success,
        "message": message,
        "data": data
    },
    status_code=status_code)

@api.get("/health")
async def read():
    data = {"message": "Hello World!"}
    return await response(data)

@api.get("/healths")
async def read_multiple():
    data = [
        {"message": "Hello World!"},
        {"message": "Hello Again!"}
    ]
    return await response(data)

class Item(pydantic.BaseModel):
    name: str
    description: str
    filename: str
    args: list
    kwargs: dict

@api.post("/items")
async def create(item: Item):
    if f"{item.filename}.py" in os.listdir("tasks"):
        item_dict = item.model_dump()
        result = await collection.insert_one(item_dict)
        return await response(data={"id": str(result.inserted_id)}, message="Item created successfully")

@api.get("/items")
async def read():
    items = []
    async for item in collection.find():
        item["_id"] = str(item["_id"])
        items.append(item)
    return await response(data=items, message="Items retrieved successfully")

@api.get("/items/{item_id}")
async def read(item_id: str):
    item = await collection.find_one({"_id": ObjectId(item_id)})
    if item:
        item["_id"] = str(item["_id"])
        return await response(data=item, message="Item retrieved successfully")
    else:
        return await response(data={}, success=False, message="Item not found", status_code=404)

@api.put("/items/{item_id}")
async def update(item_id: str, item: Item):
    item_dict = item.model_dump()
    result = await collection.update_one({"_id": ObjectId(item_id)}, {"$set": item_dict})
    if result.modified_count:
        return await response(data={"id": item_id}, message="Item updated successfully")
    else:
        return await response(data={}, success=False, message="Item not found or not modified", status_code=404)

@api.delete("/items/{item_id}")
async def delete(item_id: str):
    result = await collection.delete_one({"_id": ObjectId(item_id)})
    if result.deleted_count:
        return await response(data={"id": item_id}, message="Item deleted successfully")
    else:
        return await response(data={}, success=False, message="Item not found", status_code=404)
    
@api.post("/help")
async def create(email, message):
    print()