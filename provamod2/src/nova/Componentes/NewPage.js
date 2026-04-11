import { useState } from "react";
import api from "../../api";
import Input from "./Input";
import Buton from "./Buton";

function NewPage() {
    const [form, setForm] = useState({
        nome: "",
        desc: "",
        preco: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
         api.post("/frutas",form)
            .then(() => {
                setForm({ nome: "", desc: "", preco: "" });
            });
    };

    return (
        <div>
            <h1>Nova Fruta</h1>
            <form onSubmit={handleSubmit}>
                <Input id="nome" label="Nome" name="nome" value={form.nome} onChange={handleChange} />
                <Input id="desc" label="Descrição" name="desc" value={form.desc} onChange={handleChange} />
                <Input id="preco" label="Preço" name="preco" value={form.preco} onChange={handleChange} />
                <Buton onClick={handleSubmit}>Salvar</Buton>
            </form>
        </div>
    );
}

export default NewPage;
