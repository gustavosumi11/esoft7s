import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const EditoraList = () => {
    const [editora, setEditora] = useState([]);

    const doGetEditora = async () => {
        const response = await axios.get("/api/editora");
        setEditora(response.data);
    }

    useEffect(() => {
        doGetEditora();
    }, [])

    const doExcluirEditora = async (id) => {
        const response = await axios.delete(`/api/editora/${id}`);
        doGetEditora();
    }


    const handleExcluir = (id) => {
        if (window.confirm("Deseja excluir?")) {
            doExcluirEditora(id);
        }
    }

    const tableData = editora.map(row => {
        return <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.nome}</td>
            <td>{row.fundadaEm}</td>
            <td>{row.faturamentoMedio}</td>
            <td>
                <button onClick={() => handleExcluir(row.id)}>Excluir</button>
                <Link to={`/editora/editar/${row.id}`}>
                    <button>Editar</button>
                    
                </Link>
            </td>
        </tr>;
    })


    return (
        <div>
             <CssBaseline />
            <menu></menu>
            <h2>Listagem de Editora</h2>
            <hr></hr>

            <Link to="/editora/novo">
                <button>Nova Editora</button>
            </Link>

            <table border="2">
                <thead>
                    <tr>
                        <td>id</td>
                        <td>Nome</td>
                        <td>Fundado Em</td>
                        <td>faturamento Médio</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </table>
        </div> 
        
    );
}

export default EditoraList;

/*
<Grid container spacing={3}>
            <h2>Editora</h2>
            <Grid item sm={12}>
                <Paper>
                <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Primeiro Nome"
            name="Alguma coisa"
            label="First name"
            fullWidth="20%"
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Primeiro nome"
            name="Alguma coisa"
            label="Last name"
            fullWidth="30%"
            autoComplete="family-name"
          />
        </Grid>
        </Grid>
                </Paper>
            </Grid>
       
        </Grid>
*/