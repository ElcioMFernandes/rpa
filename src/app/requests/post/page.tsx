"use client";

import { useState } from "react";

function Post() {
  const [responseData, setResponseData] = useState("");
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.email || !formData.mensagem) {
      return;
    }

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setResponseData(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="border flex flex-col gap-4 p-8 m-4 rounded-xl shadow h-5/6 w-2/4" onSubmit={handleSubmit} autoComplete="off">
        <input className="border p-2" autoComplete="off" type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome" />
        <input className="border p-2"  autoComplete="off" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <textarea className="border p-2 resize-none" name="mensagem" value={formData.mensagem} onChange={handleChange} placeholder="Mensagem" />
        <button className="border p-2 bg-blue-500 text-white" type="submit">Enviar</button>
        <div className="border h-full p-2 resize-none select-none focus:outline-none cursor-default overflow-auto whitespace-pre-wrap break-words">
          <pre className="whitespace-pre-wrap break-words">{responseData || "Retorno da api"}</pre>
        </div>
      </form>
    </div>
  );
}

export default Post;