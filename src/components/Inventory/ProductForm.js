import React, {useState} from 'react';
import { TextField, Button, Container, Stack } from '@mui/material';
import { Link } from "react-router-dom"


const ProductForm = () => {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [brand, setBrand] = useState('')
    const [price, setPrice] = useState('')
    const [qty, setQty] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <React.Fragment>
            <Container>
                <form onSubmit={handleSubmit} action={<Link to="/add-product" />}>
                    <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Name"
                            onChange={e => setName(e.target.value)}
                            value={name}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Category"
                            onChange={e => setCategory(e.target.value)}
                            value={category}
                            fullWidth
                            required
                        />
                    </Stack>
                    <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Brand"
                        onChange={e => setBrand(e.target.value)}
                        value={brand}
                        fullWidth
                        required
                        sx={{mb: 4}}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Price"
                        onChange={e => setPrice(e.target.value)}
                        value={price}
                        required
                        fullWidth
                        sx={{mb: 4}}
                    />
                    </Stack>
                    <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Quantity"
                        onChange={e => setQty(e.target.value)}
                        value={qty}
                        required
                        fullWidth
                        sx={{mb: 4}}
                    />
                    <TextField
                        type="file"
                        variant='outlined'
                        color='secondary'
                        required
                        fullWidth
                        sx={{mb: 4}}
                    />
                    </Stack>
                    <Button variant="outlined" color="secondary" type="submit">Save</Button>
                </form>
                {/*<small>Already have an account? <Link to="/login">Login Here</Link></small>*/}
            </Container>

        </React.Fragment>
    )
}

export default ProductForm;
