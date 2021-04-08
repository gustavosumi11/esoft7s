import React, {useEffect, useState} from 'react';
import {Route, Switch, useLocation} from 'react-router';
import Menu from '../menu/menu';
import ProdutoList from './produto-list';
import ProdutoEdit from './produto-edit';

const ManterProduto = () => {
    //const location = useLocation();
    const [statusPesquisa, setStatusPesquisa] = useState({páginaAtual: 0, termoDePesquisa: "teste"});


    useEffect(()=>
    {
        console.log("<<Manter Produto>> Página atual alterada!!!!! " + statusPesquisa.páginaAtual);
    },[statusPesquisa]);




return(
    <div>
<Switch>
    <Route>
        <Route exact path="/produtos">
            <ProdutoList statusPesquisa={statusPesquisa} setStatusPesquisa={setStatusPesquisa}></ProdutoList>
        </Route>
        <Route path="/produtos/novo" component={ProdutoEdit}></Route>
        <Route path="/produtos/editar/:idParaEditar" component={ProdutoEdit}></Route>
    </Route>
</Switch>

    </div>
)

}
export default ManterProduto;