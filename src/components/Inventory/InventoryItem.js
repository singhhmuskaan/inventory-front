import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'image', headerName: 'Image', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'category', headerName: 'Category', width: 130 },
    { field: 'brand', headerName: 'Brand', width: 130 },
    { field: 'price', headerName: 'Price', width: 130 },
    { field: 'quantity', headerName: 'Quantity', width: 130 },
    {
        field: 'action',
        headerName: 'Action',
        sortable: false,
        width: 120,
        renderCell: (params) => (
            <>
            <RemoveRedEyeIcon></RemoveRedEyeIcon>
            <EditIcon></EditIcon>
            <DeleteIcon></DeleteIcon>
            </>
        ),
    }

];

const rows = [
    { id: 1, image: 1, name: 'Earphones', category: 'Electronics', brand: 'JCL', price: 200, quantity: 100 },
    { id: 2, image: 1, name: 'Joy Stick', category: 'Electronics', brand: 'JBL', price: 200, quantity: 100 },
    { id: 3, image: 1, name: 'Smart Watch', category: 'Electronics', brand: 'Boat', price: 1000, quantity: 100 },
    { id: 4, image: 1, name: 'Mobile', category: 'Electronics', brand: 'Samsung', price: 8000, quantity: 100 },
];

export default function InventoryItem() {
    return (
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
    );
}
