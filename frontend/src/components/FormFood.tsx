import { useState } from "react";
import { createFood } from "../service/api";


export function FormFood(){

    const [title, setTitle] = useState("");
    const [image, setImageUrl] = useState("");
    const [price, setPrice] = useState(0);


    async function handleSubmit(event: React.FormEvent){

        event.preventDefault();

        await createFood({
            title,
            image,
            price
        });

        alert("Produto cadastrado!");
    }


    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />


            <input
                type="text"
                placeholder="URL da imagem"
                value={image}
                onChange={(e)=>setImageUrl(e.target.value)}
            />


            <input
                type="number"
                placeholder="Preço"
                value={price}
                onChange={(e)=>setPrice(Number(e.target.value))}
            />


            <button type="submit">
                Cadastrar
            </button>

        </form>
    );
}