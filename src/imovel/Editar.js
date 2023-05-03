import { Form, useLoaderData } from "react-router-dom";

import {app} from '../firebase';
import { getFirestore } from "firebase/firestore";
import { getDoc, doc, setDoc } from "firebase/firestore";

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Chip from '@mui/material/Chip'

// conexão com o banco de dados
const db = getFirestore(app);


export async function carregaDados(req)
{
    const id = req.params.id;

    const ref = doc(db, "imoveis", id);
    const registro = await getDoc(ref);

    if(registro.exists())
    {
        let dados = registro.data();
        dados.id = registro.id;
        return dados;
    } 
    else {
        return { erro: "Registro não encontrado" }
    }

    return id;
}

export default function Editar()
{
    const valor = useLoaderData();

    const [carregando, setCarregando] = useState(false);
    const [novoImovel, setNovoImovel] = useState(valor);

    function alteraImovel(evento)
    {
        let campo = evento.target.name;
        let valor = evento.target.value;

        novoImovel[campo] = valor;
        setNovoImovel(novoImovel);
    }

    async function salvar()
    {
        setCarregando(true)
        const novo = doc(db, "imoveis", novoImovel.id);
        await setDoc(novo, novoImovel);
        setCarregando(false);
        window.location.pathname = "/imoveis";
    }

    const geoLoc = (valor.geolocalizacao) ? valor.geolocalizacao.latitude + "," + valor.geolocalizacao.longitude : "";

    let extras = "";
    if(valor.extras)
    {
        extras = valor.extras.map((item) => {
            return (
                <Chip label={item} key={item} />

            )
        })
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
                        '& > :not(style)': { m: 2, width: '55ch' },
                      }}
                    >
                    <TextField defaultValue={valor.codigo} onChange={alteraImovel} label="Código" margin="normal" name="codigo" />
                    <TextField defaultValue={valor.descricao} onChange={alteraImovel} label="Descrição" multiline rows={4} margin="normal" name="descricao" />
                    <TextField defaultValue={valor.endereco} onChange={alteraImovel} label="Endereço" margin="normal" name="endereco" />
                    <TextField defaultValue={valor.quartos} onChange={alteraImovel} label="Quartos" margin="normal" name="quartos" />
                    <TextField defaultValue={valor.tipo} onChange={alteraImovel} label="Tipo" margin="normal" name="tipo" select >
                    <MenuItem value="AP">Apartamento</MenuItem>
                    <MenuItem value="SB">Sobrado</MenuItem>
                    <MenuItem value="LJ">Loja</MenuItem>
                    <MenuItem value="CS">Casa</MenuItem>
                    </TextField>
                    <TextField defaultValue={valor.valor_imovel} onChange={alteraImovel} label="Valor do imóvel" margin="normal" name="valor_imovel" />
                    <TextField defaultValue={geoLoc} onChange={alteraImovel} label="Geolocalização" margin="normal" name="geolocalizacao" />

                    <TextField defaultValue={valor.extras} onChange={alteraImovel} label="Extras" margin="normal" name="extras" />

                    {
                        extras
                    }

                    {(carregando === true) ? <Button disabled variant="contained">Enviando</Button> : 
                        <Button onClick={salvar} variant="contained">Confirmar</Button>
                    }
                </Box>
                </Paper>
            </Grid>
            
        </Grid>
    )
}