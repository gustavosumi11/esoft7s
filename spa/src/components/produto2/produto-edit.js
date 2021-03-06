import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';


const ProdutoEdit = () => {
    const history = useHistory();
    const { idParaEditar } = useParams();
    const emModoDeEdição = idParaEditar !== undefined;
    const [produto, setProduto] = useState({ descricao: "", lancadoEm: new Date(), precoUnitario: 0.00, corPadraVO: {id: "", nome: ""} } );
    const [searchedProdutos, setSearchedProdutos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const[ searchedCores, setSearchedCores] = useState([]);

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
        history.push("/produtos2");
    }

    const doPost = async () => {
        console.log("Posting");
        console.log(produto);
        console.log("Posted");
        const response = await axios.post("/api/produtos", produto);
        alert("Novo produto criado! Id=" + response.data);
        history.push("/produtos2");
    }

    const handleSubmit = (event) => {
        console.log("handleSubmit");
        event.preventDefault();
        if (emModoDeEdição) {
            console.log("Put...");
            doPut();
        } else {
            console.log("Post...");
            doPost();
        }
    }
    const doSearchCores = async(termoDePesquisa) => {
        setIsLoading(true);
        const response = await axios.get(`/api/cores?termo=${termoDePesquisa}`);
        setSearchedCores(response.data.content);
        setIsLoading(false);

        const setSelectedCor = (cor) => {
            console.log("setSelectedCor");
            const novoProduto = { ...produto, corPadrao: cor[0] };
            console.log(novoProduto);        
            setProduto(novoProduto);
        }
    }
    const doSearchProdutos = async (termoDePesquisa) => {
        setIsLoading(true);
        const response = await axios.get(`/api/produtos?termo=${termoDePesquisa}`);
        setSearchedProdutos(response.data.content);
        setIsLoading(false);
    }
    const setSelectedCor = (cor) => {
        console.log("setSelectedCor");
        const novoProduto = { ...produto, corPadrao: cor[0] };
        console.log(novoProduto);        
        setProduto(novoProduto);
    }

    const setSelectedProduto = (produto) => {
        console.log(produto);
    }

    const handleChange = (event) => {
        //console.log(event.target.name + "=" + event.target.value);
        const novoProduto = { ...produto, [event.target.name]: event.target.value };
        //console.log(novaCor);
        setProduto(novoProduto);
    }

    return (
        <div>
            <h2>Edição de Produto {emModoDeEdição ? "(editando)" : "(incluindo)"}</h2>
            <hr></hr>
            <form onSubmit={handleSubmit}>
                <div>Descrição:
                    <input type="text" name="descricao" onChange={handleChange} value={produto.descricao}></input>
                </div>
                <div>Lançado em:
                    <input type="date" name="lancadoEm" onChange={handleChange} value={produto.lancadoEm}></input>
                </div>
                <div>Preço unitário:
                    <input type="text" name="precoUnitario" onChange={handleChange} value={produto.precoUnitario}></input>
                </div>
                <div>
                    <AsyncTypeahead
                        id="id"
                        filterBy={() => true}   
                        isLoading={isLoading}
                        labelKey={(cor) => `${cor.descricao} (${cor.id})`}
                        onChange={doSearchCores}
                        options={searchedCores}
                        onChange={setSelectedCor}
                        selected={[produto.corPadraVO]}                    
                    />
                </div>
                {produto.corPadraVO}

                <Button type="submit">Enviar</Button>
                <Link to="/produtos2">
                    Voltar                   
                </Link>
            </form>
        </div>
    )
}

export default ProdutoEdit;