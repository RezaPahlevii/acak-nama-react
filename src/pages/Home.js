import { Button, Card, List, ListItem, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from 'react';
import ListName from "./List";

export default function AcakNama(props) {
    const { listItems } = props
    const [selectedItem, setSelectedItem] = useState([
        // 'Levi',
        // 'Reza',
        // 'Pahlevi'
    ])
    const [isLoading, setIsLoading] = useState(false)

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomName() {
        const total = listItems.length - 1
        const randomId = getRndInteger(0, total)
        return listItems[randomId].name
    }

    function randomItem() {
        setIsLoading(true)
        setTimeout(() => {
            setSelectedItem = [
                getRandomName(),
                getRandomName(),
                getRandomName()
            ]

            //    { setSelectedItem(listItems[randomId].name)}
            setIsLoading(false)
        }, 1000)
    }

    return (
        <Container sx={{ my: 7 }} align="center">
            <Card sx={{ maxWidth: 500 }}>
                <div><h3>Acak Nama</h3></div>
                <Stack>
                    <List>
                        <ListItem>
                            Presenter 1 : {selectedItem[0]}
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                            Presenter 2 : {selectedItem[1]}
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                            Moderator : {selectedItem[2]}
                        </ListItem>
                    </List>
                </Stack>
                <Button

                    margin="2"
                    variant='outlined'
                    size='small'
                    onClick={() => randomItem()}
                    disabled={isLoading}
                >
                    {isLoading ? 'Loading..' : 'Acak'}
                </Button>
                <div>
                    {/* {selectedItem || 'Tidak ada nama'} */}
                </div><br />

            </Card>
        </Container>
    )
}