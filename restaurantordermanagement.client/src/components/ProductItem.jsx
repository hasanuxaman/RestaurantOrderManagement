import React from "react";

const ProductItem = ({ product, onAddToCart }) => {
    return (
        <div style={styles.card}>
            <h3 style={styles.title}>{product.name}</h3>
            <p style={styles.price}>Price: ${product.price}</p>
            <button style={styles.button} onClick={() => onAddToCart(product)}>
                Add to Order
            </button>
        </div>
    );
};

const styles = {
    card: {
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s ease-in-out",
        textAlign: "center",
    },
    title: {
        fontSize: "18px",
        fontWeight: "600",
        marginBottom: "10px",
    },
    price: {
        color: "#555",
        marginBottom: "15px",
    },
    button: {
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        padding: "10px 16px",
        borderRadius: "5px",
        cursor: "pointer",
    },
};

export default ProductItem;
