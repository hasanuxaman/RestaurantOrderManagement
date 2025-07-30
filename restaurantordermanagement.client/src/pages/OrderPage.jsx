import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "../components/ProductItem";
import OrderSummary from "../components/OrderSummary";


const OrderPage = () => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5134/api/Menu")
            .then((res) => {
                console.log("API Response:", res.data);
                setProducts(res.data);
            })
            .catch((err) => console.error("Error fetching products:", err));
    }, []);

    const handleAddToOrder = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...x, quantity: x.quantity + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const handleQuantityChange = (id, qty) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: qty } : item
        ));
    };

    const handleRemoveItem = (id) => {
        setCartItems(cartItems.filter((x) => x.id !== id));
    };

    return (
        <div style={styles.page}>
            <div style={styles.container}>
                <div style={styles.menu}>
                    <h2 style={styles.heading}>🍽️ Menu</h2>
                    <div style={styles.grid}>
                        {products.map((item) => (
                            <ProductItem
                                key={item.id}
                                product={item}
                                onAddToCart={handleAddToOrder}
                            />
                        ))}
                    </div>
                </div>
                <OrderSummary
                    cartItems={cartItems}
                    onRemove={handleRemoveItem}
                    onQuantityChange={handleQuantityChange}
                />
            </div>
        </div>
    );
};

const styles = {
    page: {
        display: "flex",
        justifyContent: "center",
        padding: "40px",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
    },
    container: {
        display: "flex",
        gap: "40px",
        width: "100%",
        maxWidth: "1200px",
    },
    menu: {
        flex: 2,
    },
    heading: {
        marginBottom: "20px",
        fontSize: "24px",
        fontWeight: "bold",
        textAlign: "center",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
    },
};

export default OrderPage;
