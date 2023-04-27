import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

export default function Confirmar(props)
{
    return (
        <Dialog open={props.abrir}>
            <DialogTitle>Confirmar ação</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {props.texto}
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button>Cancelar</Button>
                <Button>Confirmar</Button>
            </DialogActions>
        </Dialog>
    );
}