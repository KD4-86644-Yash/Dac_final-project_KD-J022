import React, { useState } from "react";
import "D:/Dac/Dac_final-project_KD-J022/wedding_planner/src/css/Desk/deskmain.css";
import Profile from "./Profile";

function DeshMain() {
    const [activePage, setActivePage] = useState("profile");
    const [services, setServices] = useState([
        { vendorName: "Dream Events", service: "Catering", location: "New York", price: "$3000" },
        { vendorName: "Elite Weddings", service: "Venue Selection", location: "Los Angeles", price: "$5000" },
        { vendorName: "Perfect Moments", service: "Photography", location: "Chicago", price: "$2000" },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [newService, setNewService] = useState({
        vendorName: "",
        service: "",
        location: "",
        price: "",
    });

    // User profile data
    const user = {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "123-456-7890",
        address: "123 Wedding St, Bridal City",
        password: "********",
        photo: "https://via.placeholder.com/150", // Replace with an actual image URL or file path
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewService((prevService) => ({
            ...prevService,
            [name]: value,
        }));
    };

    const handleAddService = () => {
        if (newService.vendorName && newService.service && newService.location && newService.price) {
            setServices([...services, newService]);
            setShowModal(false);  // Close modal after adding service
            setNewService({
                vendorName: "",
                service: "",
                location: "",
                price: "",
            });  // Reset form fields
        } else {
            alert("Please fill in all the fields.");
        }
    };

    return (
        <div className="container-fluid">
            <div className="row">
                {/* Sidebar */}
                <nav className="col-md-3 col-lg-2 d-md-block sidebar bg-dark text-white py-4">
                    <h3 className="text-center mb-4 text-warning">Dashboard</h3>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <button
                                className={`nav-link btn btn-link text-white ${activePage === "profile" ? "active-link" : ""}`}
                                onClick={() => setActivePage("profile")}
                            >
                                <i className="bi bi-person-fill me-2"></i> Profile
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link btn btn-link text-white ${activePage === "services" ? "active-link" : ""}`}
                                onClick={() => setActivePage("services")}
                            >
                                <i className="bi bi-briefcase-fill me-2"></i> Services
                            </button>
                        </li>
                    </ul>
                </nav>

                {/* Main Content */}
                <main className="col-md-9 col-lg-10 content">
                    {/* Profile Section */}
                    {activePage === "profile" && (
                        <div id="profile" className="container mt-4">
                            <Profile user={user} /> {/* Pass user data to Profile component */}
                        </div>
                    )}

                    {/* Services Section */}
                    {activePage === "services" && (
                        <div id="services" className="container mt-4">
                            <h1 className="text-primary mb-4">Services</h1>
                            <button className="btn btn-success mb-3" onClick={() => setShowModal(true)}>
                                Add Service
                            </button>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Vendor Name</th>
                                        <th>Service</th>
                                        <th>Location</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {services.map((service, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{service.vendorName}</td>
                                            <td>{service.service}</td>
                                            <td>{service.location}</td>
                                            <td>{service.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </main>
            </div>

            {/* Modal for Adding Service */}
            <div className={`modal ${showModal ? "show" : ""}`} tabIndex="-1" style={{ display: showModal ? "block" : "none" }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Service</h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={() => setShowModal(false)}
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="vendorName" className="form-label">Vendor Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="vendorName"
                                    name="vendorName"
                                    value={newService.vendorName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="service" className="form-label">Service</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="service"
                                    name="service"
                                    value={newService.service}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="location" className="form-label">Location</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="location"
                                    name="location"
                                    value={newService.location}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Price</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="price"
                                    name="price"
                                    value={newService.price}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => setShowModal(false)}
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleAddService}
                            >
                                Add Services
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeshMain;
