import React from "react";

const OrderSummary = ({ cartItems, onRemove, onQuantityChange }) => {
    const getTotal = () => {
        return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    };

    return (
        <div style={styles.card}>
            <h3>🧾 Order Summary</h3>
            {cartItems.length === 0 ? (
                <p>No items in cart.</p>
            ) : (
                cartItems.map((item) => (
                    <div key={item.id} style={styles.item}>
                        <div style={styles.itemHeader}>
                            <strong>{item.name}</strong> - ${item.price}
                        </div>
                        <div>
                            Qty:
                            <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) =>
                                    onQuantityChange(item.id, parseInt(e.target.value) || 0)
                                }
                                min="1"
                                style={styles.input}
                            />
                            <button onClick={() => onRemove(item.id)} style={styles.removeBtn}>
                                Remove
                            </button>
                        </div>
                    </div>
                ))
            )}
            <h4>Total: ${getTotal().toFixed(2)}</h4>
        </div>
    );
};

const styles = {
    card: {
        flex: 1,
        padding: "20px",
        background: "#fefefe",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        minWidth: "300px",
        maxHeight: "80vh",
        overflowY: "auto",
    },
    item: {
        padding: "10px",
        borderBottom: "1px solid #ddd",
        marginBottom: "8px",
    },
    itemHeader: {
        marginBottom: "6px",
    },
    input: {
        marginLeft: "10px",
        width: "50px",
    },
    removeBtn: {
        marginLeft: "10px",
        backgroundColor: "#e74c3c",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        padding: "5px 10px",
        cursor: "pointer",
    },
};

export default OrderSummary;
