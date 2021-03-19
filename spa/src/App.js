import logo from './logo.svg';
import './App.css';
// import SomarComponent from './components/somar-component';
// import HelloComponent from './components/hello-component';
// import ContadorComponent from './components/contador-component';
// import ContadorBásico from './components/contador-básico';
// import ArCondicionado from './components/ar-condicionado';

// template de  modelo.
//https://material-ui.com/pt/getting-started/templates/
//
import CorEdit from './components/cor/cor-edit';
import CorList from './components/cor/cor-list';
import MeusLivrosList from './components/gustavo/meulivro/meulivro-list';
import LandingPage from './components/landing/landing-page';
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import MeuLivroEdit from './components/gustavo/meulivro/meulivro-edit';
import ProdutoList from './components/produto/produto-list';
import ProdutoEdit from './components/produto/produto-edit';
import EditoraList from './components/editora/editora-list';
import EditoraEdit from './components/editora/editora-edit';
import Menu from './components/menu/menu';


function App() {
  return (
    <div>
    <Router>
      
    <Switch>
    <Route exact path="/">
      <Menu />
        <LandingPage></LandingPage>
      </Route>
      <Route exact path="/produtos">
     
        <ProdutoList></ProdutoList>
      </Route>
      <Route path="/produtos/editar/:idParaEditar">
      <Menu />
        <ProdutoEdit></ProdutoEdit>
      </Route>
      <Route path="/produtos/novo">
      <Menu />
        <ProdutoEdit></ProdutoEdit>
      </Route>

      <Route exact path="/editora">
      <Menu />
        <EditoraList></EditoraList>
      </Route>
      <Route path="/editora/editar/:idParaEditar">
      <Menu />
        <EditoraEdit></EditoraEdit>
      </Route>
      <Route path="/editora/novo">
      <Menu />
        <EditoraEdit></EditoraEdit>
      </Route>
      
        <Route exact path="/meuslivros">
        <Menu />
        <MeusLivrosList></MeusLivrosList>
      </Route>

      <Route path="/meuslivros/editar/:idParaEditar">
      <Menu />
        <MeuLivroEdit></MeuLivroEdit>
      </Route>
      <Route path="/meuslivros/nova">
      <Menu />
        <MeuLivroEdit></MeuLivroEdit>
      </Route>
      <Route exact path="/cores">
      <Menu />
        <CorList></CorList>
      </Route>
      <Route path="/cores/editar/:idParaEditar">
      <Menu />
        <CorEdit></CorEdit>
      </Route>
      <Route path="/cores/nova">
      <Menu />
        <CorEdit></CorEdit>
      </Route>
    </Switch>
  </Router>
  </div>
  );
}

   
export default App;
