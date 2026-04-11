import { useEffect, useState } from "react";
import api from "./api";

function Frutas() {
    const [frutas, setFrutas] = useState([]);

    const loadFrutas = () => {
        api.get("/frutas")
            .then((response) => {
                setFrutas(response.data);
            });
    };

    useEffect(() => {
        loadFrutas();
    }, []);

    const removeFromFrutas = (id) => {
        api.delete(`/frutas/${id}`)
            .then(() => {
                loadFrutas();
            });
    };

    return (
        <div>
            <h1>Frutas</h1>
            <table Border="1">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                        <th>Remover</th>
                    </tr>
                </thead>

                <tbody>
                    {frutas.map((fruta) => (
                        <tr key={fruta.id}>
                            <td>{fruta.nome}</td>
                            <td>{fruta.desc}</td>
                            <td>R$ {fruta.preco.toFixed(2)}</td>
                            <td><button onClick={() => removeFromFrutas(fruta.id)}>X</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Frutas;