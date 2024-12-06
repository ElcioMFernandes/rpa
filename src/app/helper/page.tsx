import Navbar from "@/components/Navbar";
import Input from "@/components/Input";
import Label from "@/components/Label";

function Helper() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen pt-16">
        <form
          action=""
          className="flex flex-col justify-center items-center border gap-4 p-4 shadow w-4/6 h-5/6"
        >
          <div className="flex flex-col w-full">
            <Label htmlFor="input-email">E-mail</Label>
            <Input
              inputClassName="border p-4 focus:outline-none w-full"
              id="input-email"
              type="email"
              placeholder="Entre com seu e-mail"
            />
          </div>
          <div className="flex flex-col w-full">
            <Label htmlFor="input-titulo">Título</Label>
            <Input
              inputClassName="border p-4 focus:outline-none w-full"
              id="input-titulo"
              type="text"
              placeholder="Defina um título para sua solicitação"
            />
          </div>
          <div className="flex flex-col w-full flex-grow">
            <Label htmlFor="input-text">Descrição</Label>
            <textarea
              className="border p-4 focus:outline-none w-full h-full text-start resize-none"
              id="input-text"
              placeholder="Descreva sua sugestão, melhoria ou problema."
            ></textarea>
          </div>
          <button className="bg-indigo-900 text-white text-sm py-2 w-24 rounded">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}

export default Helper;
