import { Button, Card, CardContent, IconButton, List, ListItem, ListItemText, Stack, TextField } from "@mui/material";
import { Container } from "@mui/system";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function ListName() {
    const ListName = [
        { name: 'Reza' },
        { name: 'Pahlevi' },
        { name: 'Syah' }
    ]

    return (
        <Container>
            <Card>
                <CardContent>
                    <Stack direction='row' spacing={3}>
                        <TextField variant="outlined" size="small" placeholder="Nama baru" />
                        <Button variant="contained">Create</Button>
                    </Stack>
                    <List>
                        {
                            ListName.map((item) => (
                                <ListItem
                                    secondaryAction={
                                        <Stack direction="row">
                                            <IconButton edge="end" aria-label="delete">
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton edge="end" aria-label="edit">
                                                <DeleteIcon />
                                            </IconButton>
                                        </Stack>
                                    }>
                                    <ListItemText primary={item.name} />
                                </ListItem>
                            ))
                        }
                    </List>
                </CardContent>
            </Card>
        </Container>
    )
}