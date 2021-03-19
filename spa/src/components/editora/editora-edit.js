import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, useHistory, useParams } from 'react-router-dom';



const EditoraEdit = () => {
    const history = useHistory();
    const { idParaEditar } = useParams();
    const emModoDeEdição = idParaEditar !== undefined;
    const [editora, setEditora] = useState({descricao: "", fundadoEm: new Date(), faturamentoMedio : 0.00  });

    console.log(idParaEditar);

    const doGetById = async () => {
        const response = await axios.get(`/api/editora/${idParaEditar}`, editora);
        setEditora(response.data);
        console.log(response.data);
    }

    useEffect(() => {        
        if (emModoDeEdição) {            
            doGetById();
        }
    }, []);

    const doPut = async () => {
        const response = await axios.put(`/api/editora/${idParaEditar}`, editora);
        history.push("/editora");
    }

    const doPost = async () => {
        const response = await axios.post("/api/editora", editora);
        alert("Novo produto criado! Id=" + response.data);
        history.push("/editora");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (emModoDeEdição) {
            console.log("Put...");
            doPut();
        } else {
            console.log("Post...");
            doPost();
        }
    }

    const handleChange = (event) => {
        //console.log(event.target.name + "=" + event.target.value);
        const novoEditora = { ...editora, [event.target.name]: event.target.value };
        //console.log(novaCor);
        setEditora(novoEditora);
    }

    return (
        <div>
            <h2>Edição de Editora {emModoDeEdição ? "(editando)" : "(incluindo)"}</h2>
            <hr></hr>
            <form onSubmit={handleSubmit}>
                <div>Nome:
                    <input type="text" name="nome" onChange={handleChange} value={editora.nome}></input>
                </div>
                <div>Fundado em:
                    <input type="date" name="fundadaEm" onChange={handleChange} value={editora.fundadaEm}></input>
                </div>
                <div>Faturamento Médio:
                    <input type="text" name="faturamentoMedio" onChange={handleChange} value={editora.faturamentoMedio}></input>
                </div>
                <button>Enviar</button>
                <Link to ="/editora">
                    <button>Voltar</button>
                </Link>
            </form>
        </div>
    )
}

export default EditoraEdit;