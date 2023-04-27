import { Grid, Paper, TextField, MenuItem, Button, Box } from '@mui/material';
import { useState } from 'react';

import {app} from '../firebase';
import { getFirestore, doc, setDoc, collection } from 'firebase/firestore';

import {redirect} from "react-router-dom";

// conexão com o banco de dados
const db = getFirestore(app);

export default function Cadastro()
{
    const [carregando, setCarregando] = useState(false);
    const [novoImovel, setNovoImovel] = useState({});

    async function cadastrar(evento)
    {
        evento.preventDefault();
        setCarregando(true);

        const novo = doc(collection(db, "imoveis"));
        novoImovel.data_cadastro = new Date();
        novoImovel.valor_imovel = parseFloat(novoImovel.valor_imovel);
        const resultado = await setDoc(novo, novoImovel);
        setCarregando(false);

        window.location.pathname = "/imoveis";
    }

    function alteraImovel(evento)
    {
        let campo = evento.target.name;
        let valor = evento.target.value;

        novoImovel[campo] = valor;
        setNovoImovel(novoImovel);
    }


    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
                <Paper sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                <Box 
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 2, width: '55ch' },
                      }}
                      onSubmit={cadastrar}
                    >
                    <TextField onChance={alteraImovel} label="Código" margin="normal" name="codigo" />
                    <TextField onChance={alteraImovel} label="Descrição" multiline rows={4} margin="normal" name="descricao" />
                    <TextField onChance={alteraImovel} label="Endereço" margin="normal" name="endereco" />
                    <TextField onChance={alteraImovel} label="Quartos" margin="normal" name="quartos" />
                    <TextField onChance={alteraImovel} label="Tipo" margin="normal" name="tipo" select >
                    <MenuItem value="Ap">Apartamento</MenuItem>
                    <MenuItem value="Sb">Sobrado</MenuItem>
                    <MenuItem value="Lj">Loja</MenuItem>
                    <MenuItem value="Cs">Casa</MenuItem>
                    </TextField>
                    <TextField onChance={alteraImovel} label="Valor do imóvel" margin="normal" name="valor_imovel" />
                    <TextField onChance={alteraImovel} label="Geolocalização" margin="normal" name="geolozalizacao" />
                    <TextField onChance={alteraImovel} label="Extras" margin="normal" name="extras" />
                    {(carregando == true) ? <Button disabled variant="contained">Enviando</Button> : 
                        <Button type="submit" variant="contained">Cadastrar</Button>
                    }
                </Box>
                </Paper>
            </Grid>
            
        </Grid>
    )
}