from pydantic import BaseModel, EmailStr

class EmailData(BaseModel):
    email: EmailStr  # Valida se o e-mail é válido
    title: str       # Título do e-mail
    content: str     # Conteúdo do e-mail