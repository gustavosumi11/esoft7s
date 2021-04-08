import React from "react";
import MeusLivrosList from "../gustavo/meulivro/meulivro-list";
import {Nav, navLink, Bars, NavMenu, NavLink, NavBtn, NavBtnLink} from './navbarElements';
// npm add styled-components
// npm add react-router-dom react-icons
const Menu = () => {
    return(
        <>
        <Nav>
            <NavLink to="/" activeStyle>
                <h1>Implementações J/R</h1>
            </NavLink>
            <Bars />
            <NavMenu>
            <NavLink to="/" activeStyle>
                    Página Principal
                </NavLink>
                <NavLink to="/produtos" activeStyle>
                    Produtos
                </NavLink>
                <NavLink to ="/produtos2" activeStyle>
                    Produtos 2
                    </NavLink>
                <NavLink to="/cores" activeStyle>
                    Cores
                </NavLink>
                <NavLink to="/editora" activeStyle>
                    Editora
                </NavLink>
                <NavLink to ="/meuslivros">
                    Meus Livros
                </NavLink>
            </NavMenu>
            
        </Nav>
        </>
    );
} 

export default Menu;