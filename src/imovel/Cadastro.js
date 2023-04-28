import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import { Button } from '@mui/material';
import Box from '@mui/material/Box'
import { useState } from 'react';

import {app} from '../firebase';
import { getFirestore } from "firebase/firestore";
import { doc, setDoc, collection } from "firebase/firestore";


// conexão com o banco de dados
const db = getFirestore(app);

export default function Cadastro()
{
    const [carregando, setCarregando] = useState(false);
    const [novoImovel, setNovoImovel] = useState({});

    async function cadastrar(evento)
    {
        evento.preventDefault();
        setCarregando(true)

        const novo = doc(collection(db, "imoveis"))
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
                        '& > :not(style)': { m: 2, width: '55ch' },
                      }}
                      onSubmit={cadastrar}
                    >
                    <TextField onChange={alteraImovel} label="Código" margin="normal" name="codigo" />
                    <TextField onChange={alteraImovel} label="Descrição" multiline rows={4} margin="normal" name="descricao" />
                    <TextField onChange={alteraImovel} label="Endereço" margin="normal" name="endereco" />
                    <TextField onChange={alteraImovel} label="Quartos" margin="normal" name="quartos" />
                    <TextField onChange={alteraImovel} label="Tipo" margin="normal" name="tipo" select >
                    <MenuItem value="AP">Apartamento</MenuItem>
                    <MenuItem value="SB">Sobrado</MenuItem>
                    <MenuItem value="LJ">Loja</MenuItem>
                    <MenuItem value="CS">Casa</MenuItem>
                    </TextField>
                    <TextField onChange={alteraImovel} label="Valor do imóvel" margin="normal" name="valor_imovel" />
                    <TextField onChange={alteraImovel} label="Geolocalização" margin="normal" name="geolozalizacao" />
                    <TextField onChange={alteraImovel} label="Extras" margin="normal" name="extras" />
                    {(carregando == true) ? <Button disabled variant="contained">Enviando</Button> : 
                        <Button type="submit" variant="contained">Cadastrar</Button>
                    }
                </Box>
                </Paper>
            </Grid>
            
        </Grid>
    )
}