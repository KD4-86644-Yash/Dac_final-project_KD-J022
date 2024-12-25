import React, { useState } from "react";
// import "E:/CDAC/Project/git_pull_data/Dac_final-project_KD-J022/wedding_planner/src/css/Desk/deskmain.css"
import "../../../src/css/Desk/deskmain.css"

function DeshMain() {
    const [activePage, setActivePage] = useState("profile");
    const [services, setServices] = useState([
        { vendorName: "Dream Events", service: "Catering", location: "New York", price: "$3000" },
        { vendorName: "Elite Weddings", service: "Venue Selection", location: "Los Angeles", price: "$5000" },
        { vendorName: "Perfect Moments", service: "Photography", location: "Chicago", price: "$2000" },
    ]);

    const addService = () => {
        const vendorName = prompt("Enter Vendor Name:");
        const service = prompt("Enter Service Name:");
        const location = prompt("Enter Location:");
        const price = prompt("Enter Price:");
        if (vendorName && service && location && price) {
            setServices([
                ...services,
                { vendorName, service, location, price },
            ]);
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
    {activePage === "services" && (
        <div id="services">
            <h1 className="text-primary mb-4">Services</h1>
            <button className="btn btn-success mb-3" onClick={addService}>Add Service</button>
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
        </div>
     );
}

export default DeshMain;