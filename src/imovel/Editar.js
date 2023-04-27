import { Form, useLoaderData, userLoaderData } from "react-router-dom";

export function carregaDados(req)
{
    const id = req.params.id;
    return id;
}

export default function Editar()
{
    const valor = useLoaderData();
    return (
        <div>
            editar
        </div>
    )
}