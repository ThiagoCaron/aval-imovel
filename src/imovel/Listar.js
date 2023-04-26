import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function Listar()
{

    const imoveis = [
        {
            codigo: "AP2022",
            valor: 200450.00,
            data_cadastro: new Date(),
            endereco: "Rua das Camelias, 123"
        },
        {
            codigo: "LJ123",
            valor: 120000.00,
            data_cadastro: new Date(),
            endereco: "Av dos peixes, 1022"
        }
    ];

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
            <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >

                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Código</TableCell>
                                <TableCell>Endereço</TableCell>
                                <TableCell>Valor</TableCell>
                                <TableCell>Data de Cadastro</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {imoveis.map(function(item){
                                return (
                                <TableRow>
                                <TableCell>{item.codigo}</TableCell>
                                <TableCell>{item.endereco}</TableCell>
                                <TableCell>{item.valor.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</TableCell>
                                <TableCell>{item.data_cadastro.toLocaleString()}</TableCell>
                            </TableRow>
                                )
                            })
                            }
                            
                        </TableBody>
                    </Table>
            </Paper>
            </Grid>
        </Grid>
    )
}