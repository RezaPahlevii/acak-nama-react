import { Button, Card, CardContent, IconButton, List, ListItem, ListItemText, Stack, TextField } from "@mui/material";
import { Container } from "@mui/system";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
// import { Link } from "react-router-dom";
import React from 'react';
import AcakNama from "./Home";
// import AcakNama from "./Home";
// import ReactDOM from 'react-dom'



export default function ListName() {
    const [ListName, setListname] = useState([
        { name: 'Reza' },
        { name: 'Pahlevi' },
        { name: 'Syah' }
    ])

    const [inputName, setInputName] = useState('')
    const [isModeEdit, setIsModeEdit] = useState(false)
    const [editIndex, setEditIndex] = useState()
    // const [confirm] = useState(true)

    function addListName() {
        const prev = [...ListName]
        if (!inputName) {
            return;
        }
        prev.unshift({
            name: inputName
        })
        setListname(prev)
        setInputName('')
    }

    function editListname() {
        const prev = [...ListName]
        prev[editIndex].name = inputName
        setListname(prev)
        setInputName('')
        setIsModeEdit(false)
    }
    function setModeEditFor(index) {
        setEditIndex(index)
        setIsModeEdit(true)
        setInputName(ListName[index].name)
    }
    function deleteListname(index) {
        console.log(index)
        if (window.confirm("Yakin hapus data?") === true) {
            const prev = [...ListName]
            // console.log()
            prev.splice(index, 1)
            // console.log()
            setListname(prev)
        }
    }

    return (
        <div >
            <Container sx={{ my: 7 }} align="center" >
                <Card sx={{ maxWidth: 500 }}>
                    <CardContent >
                        <div><h3>List Nama</h3></div> <br />
                        {/* <Link to="/home">
                            <Button>
                                Home
                            </Button>
                        </Link> */}

                        <Stack direction='row' spacing={3}>
                            <TextField
                                variant="outlined"
                                size="small"
                                placeholder="Nama baru"
                                value={inputName}
                                onChange={(e) => setInputName(e.target.value)}
                            />
                            <Button
                                variant="contained"
                                onClick={() => isModeEdit ? editListname() : addListName()}
                            >
                                {isModeEdit ? 'Edit' : 'Tambah'}
                            </Button>
                        </Stack>
                        <List>
                            {
                                ListName.map((item, index) => (
                                    <ListItem
                                        key={index}
                                        secondaryAction={
                                            <Stack direction="row">
                                                <IconButton edge="end" aria-label="edit" onClick={() => setModeEditFor(index)}>
                                                    <EditIcon />
                                                </IconButton>
                                                <IconButton edge="end" aria-label="delete" onClick={() => deleteListname(index)}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Stack>
                                        }>
                                        <ListItemText primary={item.name} />

                                        {/* jika ingin nomor di belakang nama index mulai dari 1 */}
                                        {/* <ListItemText primary={`${index + 1}. ${item.name}`} /> */}
                                    </ListItem>
                                ))
                            }
                        </List>
                        Total Nama : {ListName.length}

                    </CardContent>
                </Card>

            </Container>
            {/* <AcakNama listItems={ListName} /> */}
        </div>
    )
}
