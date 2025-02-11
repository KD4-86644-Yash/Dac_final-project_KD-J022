import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import jsPDF from "jspdf"; 
import "jspdf-autotable"; 
import "../../css/Cart/cart.css"; 
import NavBar from "../NavBar";

function Cart() {
    const userId  = localStorage.getItem("id");
    const token = localStorage.getItem("token");

    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [selectedDate, setSelectedDate] = useState("");

    useEffect(() => {
        const fetchCartData = async () => {
            if (!userId || !token) {
                setError("User not authenticated.");
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(`http://localhost:7070/cart/${userId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setCartItems(response.data);
            } catch (err) {
                setError("Failed to load cart items.");
            } finally {
                setLoading(false);
            }
        };

        fetchCartData();
    }, [userId, token]);

    const removeItem = async (name) => {
        try {
            await axios.delete(`http://localhost:7070/cart/${userId}/${name}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setCartItems(cartItems.filter(item => item.name !== name));
        } catch (err) {
            setError("Failed to remove item.");
        }
    };

    const handleQuantityChange = (id, quantity) => {
        setCartItems(cartItems.map(item => 
            item.id === id ? { ...item, quantity } : item
        ));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const generatePDF = () => {
        const doc = new jsPDF();
        doc.text("Dream Weddings Invoice - Your Cart Items", 14, 20);

        // Selected Date in Invoice
        doc.text(`Wedding Date: ${selectedDate || "Not Selected"}`, 14, 30);

        // Table Headers
        const headers = [["Item", "Price", "Quantity", "Total"]];

        // Table Rows
        const data = cartItems.map(item => [
            item.name,
            `$${item.price.toFixed(2)}`,
            item.quantity,
            `$${(item.price * item.quantity).toFixed(2)}`
        ]);

        // Auto-table plugin
        doc.autoTable({
            startY: 40,
            head: headers,
            body: data
        });

        // Total Amount
        doc.text(`Total: $${calculateTotal().toFixed(2)}`, 14, doc.lastAutoTable.finalY + 10);

        // Save the PDF
        doc.save("invoice.pdf");
    };

    if (loading) return <p>Loading cart...</p>;
    if (error) return <p className="error">{error}</p>;

    return (
        <div>
            <div>
                <NavBar />
            </div>
        <div className="cart-container">
            
            <h2>Your Cart</h2>

            {/* Date Picker */}
            <div className="date-picker-container">
                <label>Select Wedding Date:</label>
                <input
                    type="date"
                    className="date-picker"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                />
            </div>

            <div className="cart-items">
                {cartItems.length === 0 ? (
                    <p>Your cart is empty!</p>
                ) : (
                    cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <div className="item-details">
                                <p className="item-name">{item.name}</p>
                                <p className="item-price">${item.price}</p>
                            </div>
                            <div className="item-actions">
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                    min="1"
                                />
                            </div>
                            <div className="item-actions">
                                <button onClick={() => removeItem(item.name)} className="remove-btn">Remove</button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="cart-total">
                <p>Total: ${calculateTotal()}</p>
            </div>

            <button className="checkout-btn" onClick={generatePDF}>Generate Bill</button>
        </div>
        </div>
    );
}

export default Cart;


/*import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";  // Import useParams
import "../../css/Cart/cart.css"; 

function Cart() {
    const { userId } = useParams();  //  Get userId from URL
    const token = localStorage.getItem("token");

    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchCartData = async () => {
            if (!userId || !token) {
                setError("User not authenticated.");
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(`http://localhost:7070/cart/${userId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setCartItems(response.data);
            } catch (err) {
                setError("Failed to load cart items.");
            } finally {
                setLoading(false);
            }
        };

        fetchCartData();
    }, [userId, token]);  //  Dependency updated

    const removeItem = async (name) => {
        try {
            await axios.delete(`http://localhost:7070/cart/${userId}/${name}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setCartItems(cartItems.filter(item => item.name !== name));
        } catch (err) {
            setError("Failed to remove item.");
        }
    };

    const handleQuantityChange = (id, quantity) => {
        setCartItems(cartItems.map(item => 
            item.id === id ? { ...item, quantity } : item
        ));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    if (loading) return <p>Loading cart...</p>;
    if (error) return <p className="error">{error}</p>;

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            <div className="cart-items">
                {cartItems.length === 0 ? (
                    <p>Your cart is empty!</p>
                ) : (
                    cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <div className="item-details">
                                <p className="item-name">{item.name}</p>
                                <p className="item-price">${item.price}</p>
                            </div>
                            <div className="item-actions">
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                    min="1"
                                />
                                </div>
                            <div className="item-actions">
                                <button onClick={() => removeItem(item.name)} className="remove-btn">Remove</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className="cart-total">
                <p>Total: ${calculateTotal()}</p>
            </div>
            <button className="checkout-btn">Generate Bill</button>
        </div>
    );
}

export default Cart;
*/
















/*import React, { useState } from "react";
import "../../css/Cart/cart.css";  // Assuming you will style the cart in this CSS file

function Cart() {
    // Sample data for items in the cart
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Wedding Dress", price: 1200, quantity: 1 },
        { id: 2, name: "Wedding Cake", price: 350, quantity: 1 },
        { id: 3, name: "Photography Package", price: 2000, quantity: 1 },
    ]);

    // Function to handle quantity change
    const handleQuantityChange = (id, quantity) => {
        setCartItems(cartItems.map(item => 
            item.id === id ? { ...item, quantity } : item
        ));
    };

    // Function to remove item from the cart
    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    // Calculate total price
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            <div className="cart-items">
                {cartItems.length === 0 ? (
                    <p>Your cart is empty!</p>
                ) : (
                    cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <div className="item-details">
                                <p className="item-name">{item.name}</p>
                                <p className="item-price">${item.price}</p>
                            </div>
                            <div className="item-actions">
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                    min="1"
                                />
                                <button onClick={() => removeItem(item.id)} className="remove-btn">Remove</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className="cart-total">
                <p>Total: ${calculateTotal()}</p>
            </div>
            <button className="checkout-btn">Generate Bill</button>
        </div>
    );
}

export default Cart;
*/