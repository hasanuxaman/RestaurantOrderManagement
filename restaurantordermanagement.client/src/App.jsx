import React from "react";
import OrderPage from "./pages/OrderPage";

function App() {
    return (
        <div>
            {/* Navbar */}
            <nav style={styles.navbar}>
                <div style={styles.navBrand}>🍽️ My Restaurant</div>
            </nav>

            {/* Page Heading */}
            <h1 style={styles.heading}>🍔 Restaurant Order App</h1>

            {/* Main Order Page */}
            <OrderPage />
        </div>
    );
}

const styles = {
    navbar: {
        backgroundColor: "skyblue",
        padding: "15px 20px", // Increased padding
        display: "flex",
        alignItems: "center",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    navBrand: {
        fontSize: "20px", // Increased font size
        fontWeight: "bold",
        color: "#fff",
    },
    heading: {
        textAlign: "center",
        margin: "20px 0",
        fontSize: "30px", // Increased title size
        color: "#333",
    },
};

export default App;
