import InventoryItem from "./InventoryItem";
import {Button, Card, Container} from "@mui/material";
import { Link } from 'react-router-dom';

const InventoryList = () => {

    return (
        <Container>
            <h1>Products</h1>
            <Link to="/add-product" style={{ textDecoration: 'none' }}>
                <Button variant="contained">
                    Add Product
                </Button>
            </Link>
            {/*<Button variant="contained">Add Product</Button>*/}
            <div className="card">
                <Card>
                    <InventoryItem/>
                </Card>
            </div>
        </Container>
    );
};

export default InventoryList;
