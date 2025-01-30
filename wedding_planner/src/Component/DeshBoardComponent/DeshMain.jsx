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
        description: "", // New field added
        details: {}
    });

    const serviceFields = {
        Venue: ["Location","Type", "Capacity","Room","Address", "Price"],
        Food: ["Cuisine Type", "City", "Price per Plate"],
        Decoration: ["Location", "Price"],
        Sound: ["Type", "Duration", "City","Price"],
        Makeup: ["Type", "City", "Price"],
        Mehndi: ["Type", "City", "Price"],
        Photography: ["Type", "Duration","City", "Price"]
    };

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewService((prevService) => ({
            ...prevService,
            details: { ...prevService.details, [name]: value }
        }));
    };

    // Handle description change
    const handleDescriptionChange = (e) => {
        setNewService({ ...newService, description: e.target.value });
    };

    // Handle service category change
    const handleCategoryChange = (e) => {
        setNewService({ Name: "", category: e.target.value, description: "", details: {} });
    };

    // Handle Save Service
    const handleSaveService = () => {
        if (!newService.Name || !newService.category || !newService.description) {
            alert("Please fill in all fields.");
            return;
        }

        if (editingIndex !== null) {
            const updatedServices = [...services];
            updatedServices[editingIndex] = newService;
            setServices(updatedServices);
        } else {
            setServices([...services, newService]);
        }

        setShowModal(false);
        setNewService({ Name: "", category: "", description: "", details: {} });
        setEditingIndex(null);
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
                                        {/* <th>Actions</th> */}
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
                                            {/* <td>
                                                <button className="btn btn-warning btn-sm me-2" onClick={() => setEditingIndex(index)}>Edit</button>
                                                <button className="btn btn-danger btn-sm" onClick={() => setServices(services.filter((_, i) => i !== index))}>Delete</button>
                                            </td> */}
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
                                <div className="mb-3">
                                    <label className="form-label"> Name</label>
                                    <input type="text" className="form-control" name="Name" value={newService.Name} onChange={(e) => setNewService({ ...newService, Name: e.target.value })} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Category</label>
                                    <select className="form-control" value={newService.category} onChange={handleCategoryChange}>
                                        <option value="">Select Category</option>
                                        {Object.keys(serviceFields).map((category) => (
                                            <option key={category} value={category}>{category}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <textarea className="form-control" rows="3" value={newService.description} onChange={handleDescriptionChange} />
                                </div>
                                {newService.category && serviceFields[newService.category].map((field) => (
                                    <div className="mb-3" key={field}>
                                        <label className="form-label">{field}</label>
                                        <input type="text" className="form-control" name={field} value={newService.details[field] || ""} onChange={handleChange} />
                                    </div>
                                ))}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                                <button type="button" className="btn btn-primary" onClick={handleSaveService}>{editingIndex !== null ? "Update Service" : "Add Service"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DeshMain;
