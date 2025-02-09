import React, { useState } from "react";
import "../../css/Desk/deskmain.css";
import Profile from "./Profile";

function DeshMain() {
    const [activePage, setActivePage] = useState("profile");
    const [services, setServices] = useState([]);

    const [showModal, setShowModal] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    const [newService, setNewService] = useState({
        Name: "",
        category: "",
        description: "",
        details: {}
    });

    const serviceFields = {
        Venue: ["Location", "Type", "Capacity", "Room", "Address", "Price"],
        Food: ["Cuisine Type", "City", "Price per Plate"],
        Decoration: ["Location", "Price"],
        Sound: ["Type", "Duration", "City", "Price"],
        Makeup: ["Type", "City", "Price"],
        Mehndi: ["Type", "City", "Price"],
        Photography: ["Type", "Duration", "City", "Price"]
    };
    

    const serviceApiUrls = {
        Venue: "http://localhost:5000/api/services/venue",
        Food: "http://localhost:5000/api/services/food",
        Decoration: "http://localhost:5000/api/services/decoration",
        Sound: "http://localhost:5000/api/services/sound",
        Makeup: "http://localhost:5000/api/services/makeup",
        Mehndi: "http://localhost:5000/api/services/mehndi",
        Photography: "http://localhost:5000/api/services/photography"
    };

    // Handle input change for category dropdown
    const handleCategoryChange = (e) => {
        setNewService({
            ...newService,
            category: e.target.value,
            details: {} // Reset details when category changes
        });
    };

    // Handle input change for description
    const handleDescriptionChange = (e) => {
        setNewService({
            ...newService,
            description: e.target.value
        });
    };

    // Handle input change for details fields
    const handleChange = (e) => {
        setNewService({
            ...newService,
            details: {
                ...newService.details,
                [e.target.name]: e.target.value
            }
        });
    };

    const handleSaveService = async () => {
        if (!newService.Name || !newService.category || !newService.description) {
            alert("Please fill in all fields.");
            return;
        }

        const apiUrl = serviceApiUrls[newService.category];

        if (!apiUrl) {
            alert("Invalid service category.");
            return;
        }

        try {
            const response = await fetch(apiUrl, {
                method: editingIndex !== null ? "PUT" : "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newService),
            });

            if (!response.ok) {
                throw new Error("Failed to save service");
            }

            const savedService = await response.json();

            if (editingIndex !== null) {
                const updatedServices = [...services];
                updatedServices[editingIndex] = savedService;
                setServices(updatedServices);
            } else {
                setServices([...services, savedService]);
            }

            setShowModal(false);
            setNewService({ Name: "", category: "", description: "", details: {} });
            setEditingIndex(null);
        } catch (error) {
            console.error("Error saving service:", error);
            alert("Error saving service. Please try again.");
        }
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <nav className="col-md-3 col-lg-2 sidebar bg-dark text-white py-4">
                    <h3 className="text-center mb-4 text-warning">Dashboard</h3>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <button className={`nav-link btn btn-link text-white ${activePage === "profile" ? "active-link" : ""}`} onClick={() => setActivePage("profile")}>
                                <i className="bi bi-person-fill me-2"></i> Profile
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link btn btn-link text-white ${activePage === "services" ? "active-link" : ""}`} onClick={() => setActivePage("services")}>
                                <i className="bi bi-briefcase-fill me-2"></i> Services
                            </button>
                        </li>
                    </ul>
                </nav>

                <main className="col-md-9 col-lg-10 content">
                    {activePage === "profile" && <Profile />}

                    {activePage === "services" && (
                        <div className="container mt-4">
                            <h1 className="text-primary mb-4">Services</h1>
                            <button className="btn btn-success mb-3" onClick={() => setShowModal(true)}>Add Service</button>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Name</th>
                                        <th>Category</th>
                                        <th>Description</th>
                                        <th>Details</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {services.map((service, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{service.Name}</td>
                                            <td>{service.category}</td>
                                            <td>{service.description}</td>
                                            <td>{Object.entries(service.details).map(([key, value]) => `${key}: ${value}`).join(", ")}</td>
                                            <td>
                                                <button className="btn btn-warning btn-sm me-2" onClick={() => setEditingIndex(index)}>Edit</button>
                                                <button className="btn btn-danger btn-sm" onClick={() => setServices(services.filter((_, i) => i !== index))}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </main>
            </div>

            {/* Modal for Adding/Editing Service */}
            {showModal && (
                <div className="modal show" style={{ display: "block", background: "rgba(0, 0, 0, 0.5)" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{editingIndex !== null ? "Edit Service" : "Add Service"}</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <input type="text" className="form-control" name="Name" value={newService.Name} onChange={(e) => setNewService({ ...newService, Name: e.target.value })} />
                                <select className="form-control" value={newService.category} onChange={handleCategoryChange}>
                                    <option value="">Select Category</option>
                                    {Object.keys(serviceFields).map((category) => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-primary" onClick={handleSaveService}>{editingIndex !== null ? "Update Service" : "Add Service"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DeshMain;
