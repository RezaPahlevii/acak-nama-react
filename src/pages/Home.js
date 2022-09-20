import { Button } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from 'react';

export default function AcakNama(props) {
    const { listItems } = props
    const [selectedItem, setSelectedItem] = useState()
    const [isLoading, setIsLoading] = useState(false)

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function randomItem() {
        setIsLoading(true)
        setTimeout(() => {
            const total = listItems.length
            const randomId = getRndInteger(0, total)
            setSelectedItem(listItems[randomId].name)
            setIsLoading(false)
        }, 1000)
    }

    return (
        <Container>
            <div>ini halaman home</div>
            <Button
                variant='outlined'
                size='small'
                onClick={() => randomItem()}
                disabled={isLoading}
            >
                {isLoading ? 'Loading..' : 'Acak'}
            </Button>
            <div>
                {selectedItem || 'Tidak ada nama'}
            </div>
        </Container>
    )
}