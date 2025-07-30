import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderForm = () => {
    const [customers, setCustomers] = useState([]);
    const [tables, setTables] = useState([]);
    const [menus, setMenus] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState('');
    const [selectedTable, setSelectedTable] = useState('');
    const [orderItems, setOrderItems] = useState([]);

    useEffect(() => {
        // Load data
        axios.get('/api/customers').then(res => setCustomers(res.data));
        axios.get('/api/tables').then(res => setTables(res.data));
        axios.get('/api/menus').then(res => setMenus(res.data));
    }, []);

    const handleAddItem = (menuItem) => {
        const existing = orderItems.find(i => i.menuId === menuItem.id);
        if (existing) {
            setOrderItems(orderItems.map(i =>
                i.menuId === menuItem.id ? { ...i, quantity: i.quantity + 1 } : i
            ));
        } else {
            setOrderItems([...orderItems, {
                menuId: menuItem.id,
                name: menuItem.name,
                price: menuItem.price,
                quantity: 1
            }]);
        }
    };

    const handleSubmit = async () => {
        const payload = {
            customerId: selectedCustomer,
            tableId: selectedTable,
            orderItems: orderItems.map(i => ({
                menuId: i.menuId,
                quantity: i.quantity
            }))
        };
        try {
            await axios.post('/api/orders', payload);
            alert('Order submitted successfully!');
            setOrderItems([]);
        } catch (err) {
            alert('Error submitting order');
        }
    };

    return (
        <div>
            <div>
                <label>Customer: </label>
                <select onChange={(e) => setSelectedCustomer(e.target.value)} value={selectedCustomer}>
                    <option value="">Select</option>
                    {customers.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
            </div>
            <div>
                <label>Table: </label>
                <select onChange={(e) => setSelectedTable(e.target.value)} value={selectedTable}>
                    <option value="">Select</option>
                    {tables.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
                </select>
            </div>
            <h4>Menu Items</h4>
            <ul>
                {menus.map(menu => (
                    <li key={menu.id}>
                        {menu.name} - {menu.price} Tk
                        <button onClick={() => handleAddItem(menu)}>Add</button>
                    </li>
                ))}
            </ul>

            <h4>Selected Items</h4>
            <ul>
                {orderItems.map(item => (
                    <li key={item.menuId}>
                        {item.name} x {item.quantity} = {item.price * item.quantity} Tk
                    </li>
                ))}
            </ul>

            <button onClick={handleSubmit}>Submit Order</button>
        </div>
    );
};

export default OrderForm;