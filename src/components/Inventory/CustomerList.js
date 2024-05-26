import InventoryItem from "./InventoryItem";
import {Card, Container} from "@mui/material";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'phone', headerName: 'Phone', width: 150 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'address', headerName: 'Address', width: 150 },
    {
        field: 'action',
        headerName: 'Action',
        sortable: false,
        width: 120,
        renderCell: (params) => (
            <>
                <EditIcon></EditIcon>
                <DeleteIcon></DeleteIcon>
            </>
        ),
    }

];

const rows = [
    { id: 1, name: 'John', phone: 9898988987, email: 'john@gmail.com', address: "Lucknow" },
    { id: 2, name: 'Alexis', phone: 7777454523, email: 'alexis@gmail.com', address: "Delhi" },
    { id: 3, name: 'Axnol', phone: 9834567890, email: 'axnol@gmail.com', address: "Kanpur" },
    { id: 4, name: 'Rasin', phone: 9834678987, email: 'rasin@gmail.com', address: "Lucknow" },
    { id: 5, name: 'Jenny', phone: 9867567898, email: 'jenny@gmail.com', address: "Delhi" },
];
const CustomerList = () => {

    return (
        <Container>
            <h1>Customers</h1>
            <Card>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                    />
                </div>
            </Card>

        </Container>
    );
};

export default CustomerList;
