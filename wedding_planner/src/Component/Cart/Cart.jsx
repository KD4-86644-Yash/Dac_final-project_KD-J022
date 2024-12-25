import React, { useState } from "react";
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
