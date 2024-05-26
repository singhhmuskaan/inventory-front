import './App.css';
import InventoryList from "./components/Inventory/InventoryList";
import SideBar from "./components/common/SideBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerList from "./components/Inventory/CustomerList";
import ProductForm from "./components/Inventory/ProductForm";

function App() {
    return (
        <div className="App">
            <Router>
                <SideBar />
                <Routes>
                    <Route path="/products" element={<InventoryList />} />
                    <Route path="/customers" element={<CustomerList />} />
                    <Route path="/add-product" element={<ProductForm />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
