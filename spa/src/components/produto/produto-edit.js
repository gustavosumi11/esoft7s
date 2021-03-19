import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory, useParams } from 'react-router-dom';



const ProdutoEdit = () => {
    const history = useHistory();
    const { idParaEditar } = useParams();
    const emModoDeEdição = idParaEditar !== undefined;
    const [produto, setProduto] = useState({descricao: "", lancadoEm: new Date(), precoUnitario : 0.00  });

    console.log(idParaEditar);

    const doGetById = async () => {
        const response = await axios.get(`/api/produtos/${idParaEditar}`, produto);
        setProduto(response.data);
        console.log(response.data);
    }

    useEffect(() => {        
        if (emModoDeEdição) {            
            doGetById();
        }
    }, []);

    const doPut = async () => {
        const response = await axios.put(`/api/produtos/${idParaEditar}`, produto);
        history.push("/produtos");
    }

    const doPost = async () => {
        const response = await axios.post("/api/produtos", produto);
        alert("Novo produto criado! Id=" + response.data);
        history.push("/produtos");
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
        const novoProduto = { ...produto, [event.target.name]: event.target.value };
        //console.log(novaCor);
        setProduto(novoProduto);
    }

    return (
        <div>
            <h2>Edição de Produto {emModoDeEdição ? "(Editando)" : "(Incluindo)"}</h2>
            <hr></hr>
            <form onSubmit={handleSubmit}>
                <div>Descrição:
                    <input type="text" name="descricao" onChange={handleChange} value={produto.descricao}required></input>
                </div>
                <div>Lançado em:
                    <input type="date" name="lancadoEm" onChange={handleChange} value={produto.lancadoEm}required></input>
                </div>
                <div>Preço unitário:
                    <input type="text" name="precoUnitario" onChange={handleChange} value={produto.precoUnitario}required></input>
                </div>
                <button>Enviar</button>
                <Link to ="/produtos">
                    <button>Voltar</button>
                </Link>
            </form>
        </div>
    )
}

export default ProdutoEdit;