import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, useHistory, useParams } from 'react-router-dom';



const MeuLivroEdit = () => {
    const history = useHistory();
    const { idParaEditar } = useParams();
    const emModoDeEdição = idParaEditar !== undefined;
    const [livros, setMeusLivros] = useState({titulo:"", autor:"" });

    console.log(idParaEditar);

    const doGetById = async () => {
        const response = await axios.get(`/api/meuslivros/${idParaEditar}`, livros);
        setMeusLivros(response.data);
        console.log(response.data);
    }

    useEffect(() => {        
        if (emModoDeEdição) {            
            doGetById();
        }
    }, []);

    const doPut = async () => {
        const response = await axios.put(`/api/meuslivros/${idParaEditar}`, livros);
        history.push("/meuslivros");
    }

    const doPost = async () => {
        const response = await axios.post("/api/meuslivros", livros);
        alert("Novo livro criado! Id=" + response.data);
        history.push("/meuslivros");
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
        const novoLivro = { ...livros, [event.target.name]: event.target.value };
        //console.log(novoLivro);
        setMeusLivros(novoLivro);
    }

    return (
        <div>
            <h2>Edição de Livro {emModoDeEdição ? "(editando)" : "(incluindo)"}</h2>
            <hr></hr>
            <form onSubmit={handleSubmit}>
                <div>Título:
                    <input type="text" name="titulo" onChange={handleChange} value={livros.titulo}></input>
                </div>
                <div>Autor:
                    <input type="text" name="autor" onChange={handleChange} value={livros.autor}></input>
                </div>
                <button>Enviar</button>
                <Link to ="/meuslivros">
                    <button>Voltar</button>
                </Link>
            </form>
        </div>
    )
}

export default MeuLivroEdit;