import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Usuario = () => {
    const [usuario, setUsuario] = useState([]);
    const { id } = useParams();
    const obtenerUsuario = async (id) => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const user = await res.data;
        setUsuario(user)
    }
    useEffect(() => {
        obtenerUsuario(id);
    }, [id])
    return (
        <div>
            <h4>Usuario</h4>
            <p>Nombre: {usuario.name}</p>
            <p>Email: {usuario.email}</p>
            <small>Telefono: {usuario.phone}</small>

        </div>
    )
}

export default Usuario
