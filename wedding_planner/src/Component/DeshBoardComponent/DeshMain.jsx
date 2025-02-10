// import React, { useState } from "react";
// import "../../css/Desk/deskmain.css";
// import Profile from "./Profile";
// import axios from "axios";
// function DeshMain() {
//     const [activePage, setActivePage] = useState("profile");
//     const [services, setServices] = useState([]);

//     const [showModal, setShowModal] = useState(false);
//     const [editingIndex, setEditingIndex] = useState(null);

//     const [newService, setNewService] = useState({
//         Name: "",
//         category: "",
//         description: "", // New field added
//         details: {}
//     });

//     const serviceFields = {
//         Venue: ["Location","Type", "Capacity","Room","Address", "Price"],
//         Food: ["Cuisine Type", "City", "Price per Plate"],
//         Decoration: ["Location", "Price"],
//         Sound: ["Type", "Duration", "City","Price"],
//         Makeup: ["Type", "City", "Price"],
//         Mehndi: ["Type", "City", "Price"],
//         Photography: ["Type", "Duration","City", "Price"]
//     };

//     // Handle input change
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setNewService((prevService) => ({
//             ...prevService,
//             details: { ...prevService.details, [name]: value }
//         }));
//     };

//     // Handle description change
//     const handleDescriptionChange = (e) => {
//         setNewService({ ...newService, description: e.target.value });
//     };

//     const vendorId = localStorage.getItem("id");
//     const token = localStorage.getItem("token");

//     // Handle service category change
//     const handleCategoryChange = (e) => {
//         setNewService({ Name: "", category: e.target.value, description: "", details: {} });
//     };

//     // Handle Save Service
//     // const handleSaveService = () => {
//     //     if (!newService.Name || !newService.category || !newService.description) {
//     //         alert("Please fill in all fields.");
//     //         return;
//     //     }

//     //     if (editingIndex !== null) {
//     //         const updatedServices = [...services];
//     //         updatedServices[editingIndex] = newService;
//     //         setServices(updatedServices);
//     //     } else {
//     //         setServices([...services, newService]);
//     //     }

//     //     setShowModal(false);
//     //     setNewService({ Name: "", category: "", description: "", details: {} });
//     //     setEditingIndex(null);
//     // };

//     const handleSaveService = async () => {
//         if (!newService.Name || !newService.category || !newService.description) {
//             alert("Please fill in all fields.");
//             return;
//         }
    
//         // Get the vendor ID (assuming it's stored somewhere or passed as a prop)
//         const vendorId = localStorage.getItem('id'); // Change this as needed
    
        
//         // Prepare the API endpoint based on category
//         // Correct API endpoints with backticks (`) for template literals
// const apiEndpoints = {
//     Venue: `http://localhost:7070/vendor_services/Venueadd/${vendorId}`,
//     Sound: `/vendor_services/soundServiceadd/${vendorId}`,
//     Food: `/vendor_services/FoodServiceadd/${vendorId}`,
//     Decoration: `/vendor_services/DecorationServiceadd/${vendorId}`,
//     Makeup: `/vendor_services/MakeUpDtoServiceadd/${vendorId}`,
//     Photography: `/vendor_services/PhotoServiceadd/${vendorId}`,
// };

// // Ensure vendorId exists
// if (!vendorId) {
//     alert("Vendor ID is missing. Please log in again.");
//     return;
// }

// // Make a request with the correct API URL
// const apiUrl = apiEndpoints[newService.category];
// console.log("apiurl is :"+ apiUrl);
//         console.log(vendorId,token);
    
//         // Format request payload
//         const requestBody = {
//             name: newService.Name,
//             description: newService.description,
//             ...newService.details, // Spread details dynamically
//         };
    
//         try {
//             const response = await axios.post(apiUrl, requestBody, {
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: `Bearer ${token}`, // Ensure proper authorization
//                 },
//             });
        
//             console.log("Service added successfully:", response.data);
            
//             // Add new service to the list after successful API response
//             setServices([...services, newService]);
            
//             setShowModal(false);
//             setNewService({ Name: "", category: "", description: "", details: {} });
//             setEditingIndex(null);
//         } catch (error) {
//             console.error("Error adding service:", error);
//             alert("Failed to add service. Please try again.");
//         }
        
//     };

//     return (
        
//         <div className="container-fluid">
//             <div className="row">
//                 <nav className="col-md-3 col-lg-2 sidebar bg-dark text-white py-4">
//                     <h3 className="text-center mb-4 text-warning">Dashboard</h3>
//                     <ul className="nav flex-column">
//                         <li className="nav-item">
//                             <button className={`nav-link btn btn-link text-white ${activePage === "profile" ? "active-link" : ""}`} onClick={() => setActivePage("profile")}>
//                                 <i className="bi bi-person-fill me-2"></i> Profile
//                             </button>
//                         </li>
//                         <li className="nav-item">
//                             <button className={`nav-link btn btn-link text-white ${activePage === "services" ? "active-link" : ""}`} onClick={() => setActivePage("services")}>
//                                 <i className="bi bi-briefcase-fill me-2"></i> Services
//                             </button>
//                         </li>
//                     </ul>
//                 </nav>

//                 <main className="col-md-9 col-lg-10 content">
//                     {activePage === "profile" && <Profile />}

//                     {activePage === "services" && (
//                         <div className="container mt-4">
//                             <h1 className="text-primary mb-4">Services</h1>
//                             <button className="btn btn-success mb-3" onClick={() => setShowModal(true)}>Add Service</button>
//                             <table className="table table-striped">
//                                 <thead>
//                                     <tr>
//                                         <th>S.No</th>
//                                         <th>Name</th>
//                                         <th>Category</th>
//                                         <th>Description</th>
//                                         <th>Details</th>
//                                         {/* <th>Actions</th> */}
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {services.map((service, index) => (
//                                         <tr key={index}>
//                                             <td>{index + 1}</td>
//                                             <td>{service.Name}</td>
//                                             <td>{service.category}</td>
//                                             <td>{service.description}</td>
//                                             <td>{Object.entries(service.details).map(([key, value]) => `${key}: ${value}`).join(", ")}</td>
//                                             {/* <td>
//                                                 <button className="btn btn-warning btn-sm me-2" onClick={() => setEditingIndex(index)}>Edit</button>
//                                                 <button className="btn btn-danger btn-sm" onClick={() => setServices(services.filter((_, i) => i !== index))}>Delete</button>
//                                             </td> */}
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     )}
//                 </main>
//             </div>

//             {/* Modal for Adding/Editing Service */}
//             {showModal && (
//                 <div className="modal show" style={{ display: "block", background: "rgba(0, 0, 0, 0.5)" }}>
//                     <div className="modal-dialog">
//                         <div className="modal-content">
//                             <div className="modal-header">
//                                 <h5 className="modal-title">{editingIndex !== null ? "Edit Service" : "Add Service"}</h5>
//                                 <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
//                             </div>
//                             <div className="modal-body">
//                                 <div className="mb-3">
//                                     <label className="form-label"> Name</label>
//                                     <input type="text" className="form-control" name="Name" value={newService.Name} onChange={(e) => setNewService({ ...newService, Name: e.target.value })} />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label className="form-label">Category</label>
//                                     <select className="form-control" value={newService.category} onChange={handleCategoryChange}>
//                                         <option value="">Select Category</option>
//                                         {Object.keys(serviceFields).map((category) => (
//                                             <option key={category} value={category}>{category}</option>
//                                         ))}
//                                     </select>
//                                 </div>
//                                 <div className="mb-3">
//                                     <label className="form-label">Description</label>
//                                     <textarea className="form-control" rows="3" value={newService.description} onChange={handleDescriptionChange} />
//                                 </div>
//                                 {newService.category && serviceFields[newService.category].map((field) => (
//                                     <div className="mb-3" key={field}>
//                                         <label className="form-label">{field}</label>
//                                         <input type="text" className="form-control" name={field} value={newService.details[field] || ""} onChange={handleChange} />
//                                     </div>
//                                 ))}
//                             </div>
//                             <div className="modal-footer">
//                                 <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
//                                 <button type="button" className="btn btn-primary" onClick={handleSaveService}>{editingIndex !== null ? "Update Service" : "Add Service"}</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default DeshMain;



// import React, { useState } from "react";
// import "../../css/Desk/deskmain.css";
// import Profile from "./Profile";
// import axios from "axios";

// function DeshMain() {
//     const [activePage, setActivePage] = useState("profile");
//     const [services, setServices] = useState([]);

//     const [showModal, setShowModal] = useState(false);
//     const [editingIndex, setEditingIndex] = useState(null);

//     const [newService, setNewService] = useState({
//         Name: "",
//         category: "",
//         discription: "",Location:"", Type:"", Capacity:"", Room:"", Address:"", Price:"",city:"",City:"",
//         details: {} // Ensure details is always an object
//     });

//     const serviceFields = {
//         Venue: ["Location", "Type", "Capacity", "Room", "Address", "Price"],
//         Food: ["Cuisine Type", "City", "Price"],
//         Decoration: ["Location", "Price"],
//         Sound: ["Type", "Duration", "City", "Price"],
//         Makeup: ["Type", "City", "Price"],
//         Mehndi: ["Type", "City", "Price"],
//         Photography: ["Type", "Duration", "City", "Price"]
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setNewService((prevService) => ({
//             ...prevService,
//             details: { ...prevService.details, [name]: value }
//         }));
//     };

//     const handleDescriptionChange = (e) => {
//         setNewService({ ...newService, discription: e.target.value });
//     };

//     const vendorId = localStorage.getItem("id");
//     const token = localStorage.getItem("token");

//     const handleCategoryChange = (e) => {
//         setNewService({ Name: "", category: e.target.value, discription: "", details: {} });
//     };

//     const handleSaveService = async () => {
//         if (!newService.Name || !newService.category || !newService.discription) {
//             alert("Please fill in all fields.");
//             return;
//         }

//         const apiEndpoints = {
//             Venue: `http://localhost:7070/vendor_services/Venueadd/${vendorId}`,
//             Sound: `http://localhost:7070/vendor_services/soundServiceadd/${vendorId}`,
//             Food: `http://localhost:7070/vendor_services/FoodServiceadd/${vendorId}`,
//             Decoration: `http://localhost:7070/vendor_services/DecorationServiceadd/${vendorId}`,
//             Makeup: `http://localhost:7070/vendor_services/MakeUpDtoServiceadd/${vendorId}`,
//             Photography: `http://localhost:7070/vendor_services/PhotoServiceadd/${vendorId}`,
//         };

//         if (!vendorId) {
//             alert("Vendor ID is missing. Please log in again.");
//             return;
//         }

//         const apiUrl = apiEndpoints[newService.category];
//         console.log("apiUrl is: ", apiUrl);

//         const requestBody = {
//             name: newService.Name,
//         discription: newService.discription,
//         category: newService.category,
//         location: newService.details.Location || "",  // Ensuring values are mapped correctly
//         type: newService.details.Type || "",
//         capacity: newService.details.Capacity || "",
//         room: newService.details.Room || "",
//         address: newService.details.Address || "",
//         price: newService.details.Price || "",
//          city: newService.details.city || "",
//         status: newService.details.status || 1,
//         Duration:newService.details.Duration || "",
//         City: newService.details.City || "",
        
//             // name: newService.Name,
//             // discription: newService.discription,
//             // ...newService.details,
//             userEntity: {
//                 id: vendorId,
//                 firstName: "Vendor First Name", // Customize as needed
//                 lastName: "Vendor Last Name", // Customize as needed
//                 email: "vendor@example.com", // Customize as needed
//                 password: "password123", // Customize as needed
//                 role: "ROLE_VENDAR", // Customize as needed
//             }
//         };

//         try {
//             const response = await axios.post(apiUrl, requestBody, {
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: `Bearer ${token}`,
//                 },
//             });

//             console.log("Service added successfully:", response.data);
            
//             // Add new service to the list after successful API response
//             setServices([...services, newService]);

//             setShowModal(false);
//             // setNewService({ Name: "", category: "", discription: "", details: {} });
//             setNewService({ Name: "",City:"",city:"", category: "", discription: "",Location:"", Type:"", Capacity:"", Room:"", Address:"", Price:"",details: {} });

//             setEditingIndex(null);
//         } catch (error) {
//             console.error("Error adding service:", error);
//             alert("Failed to add service. Please try again.");
//         }
//     };







import React, { useState } from "react";
import "../../css/Desk/deskmain.css";
import Profile from "./Profile";
import axios from "axios";

function DeshMain() {
    const [activePage, setActivePage] = useState("profile");
    const [services, setServices] = useState([]);

    const [showModal, setShowModal] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    const [newService, setNewService] = useState({
        Name: "",
        category: "",
        discription: "",Location:"", Type:"", Capacity:"", Room:"", Address:"", Price:"",city:"",City:"",
        details: {} // Ensure details is always an object
    });

    const serviceFields = {
        Venue: ["Location", "Type", "Capacity", "Room", "Address", "Price"],
        Food: ["Cuisine Type", "City", "Price"],
        Decoration: [ "City","Price"],
        Sound: ["Type", "Duration", "City", "Price"],
        Makeup: ["Type", "City", "Price"],
        Mehndi: ["Type", "City", "Price"],
        Photography: ["Type", "Duration", "City", "Price"]
    };
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewService((prevService) => ({
            ...prevService,
            details: { ...prevService.details, [name]: value }
        }));
    };

    const handleDescriptionChange = (e) => {
        setNewService({ ...newService, discription: e.target.value });
    };

    const vendorId = localStorage.getItem("id");
    const token = localStorage.getItem("token");

    const handleCategoryChange = (e) => {
        setNewService({ Name: "", category: e.target.value, discription: "", details: {} });
    };

    
const handleSaveService = async () => {
    if (!newService.Name || !newService.category || !newService.discription) {
        alert("Please fill in all fields.");
        return;
    }

    const apiEndpoints = {
        Venue: `http://localhost:7070/vendor_services/Venueadd/${vendorId}`,
        Sound: `http://localhost:7070/vendor_services/soundServiceadd/${vendorId}`,
        Food: `http://localhost:7070/vendor_services/FoodServiceadd/${vendorId}`,
        Decoration: `http://localhost:7070/vendor_services/DecorationServiceadd/${vendorId}`,
        Makeup: `http://localhost:7070/vendor_services/MakeUpDtoServiceadd/${vendorId}`,
        Photography: `http://localhost:7070/vendor_services/PhotoServiceadd/${vendorId}`,
    };

    if (!vendorId) {
        alert("Vendor ID is missing. Please log in again.");
        return;
    }

    const apiUrl = apiEndpoints[newService.category];
    console.log("API URL:", apiUrl);

    // Define request body dynamically based on category
    let requestBody = {
        name: newService.Name,
        discription: newService.discription,
        category: newService.category,
        userEntity: {
            id: vendorId,
            firstName: "Vendor First Name", // Customize as needed
            lastName: "Vendor Last Name", // Customize as needed
            email: "vendor@example.com", // Customize as needed
            password: "password123", // Customize as needed
            role: "ROLE_VENDAR", // Customize as needed
        }
    };

    // Add category-specific fields
    switch (newService.category) {
        case "Venue":
            requestBody.location = newService.details.Location || "";
            requestBody.type = newService.details.Type || "";
            requestBody.capacity = newService.details.Capacity || "";
            requestBody.room = newService.details.Room || "";
            requestBody.address = newService.details.Address || "";
            requestBody.price = newService.details.Price || "";
            requestBody.status= newService.details.status || 1;
            break;

        case "Food":
            requestBody.cuisineType = newService.details["Cuisine Type"] || "";
            requestBody.city = newService.details.City || "";
            requestBody.price = newService.details || "";
            requestBody.status= newService.details.status || 1;
            break;

        case "Decoration":
            requestBody.location = newService.details.Location || "";
            requestBody.price = newService.details.Price || "";
            requestBody.city = newService.details.City || "";
            requestBody.status= newService.details.status || 1;
            break;

        case "Sound":
            requestBody.type = newService.details.Type || "";
            requestBody.duration = newService.details.Duration || "";
            requestBody.city = newService.details.City || "";
            requestBody.price = newService.details.Price || "";
            requestBody.status= newService.details.status || 1;
            break;

        case "Makeup":
            requestBody.type = newService.details.Type || "";
            requestBody.city = newService.details.City || "";
            requestBody.price = newService.details.Price || "";
            requestBody.status= newService.details.status || 1;
            break;

        case "Mehndi":
            requestBody.type = newService.details.Type || "";
            requestBody.city = newService.details.City || "";
            requestBody.price = newService.details.Price || "";
            requestBody.status= newService.details.status || 1;
            break;

        case "Photography":
            requestBody.type = newService.details.Type || "";
            requestBody.duration = newService.details.Duration || "";
            requestBody.city = newService.details.City || "";
            requestBody.price = newService.details.Price || "";
            requestBody.status= newService.details.status || 1;
            break;

        default:
            alert("Invalid category selected.");
            return;
    }

    try {
        const response = await axios.post(apiUrl, requestBody, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        console.log("Service added successfully:", response.data);

        // Add new service to the list after successful API response
        setServices([...services, newService]);

        setShowModal(false);
        setNewService({ 
            Name: "", 
            category: "", 
            discription: "", 
            Location: "", 
            Type: "", 
            Capacity: "", 
            Room: "", 
            Address: "", 
            Price: "", 
            City: "", 
            details: {} 
        });

        setEditingIndex(null);
    } catch (error) {
        console.error("Error adding service:", error);
        alert("Failed to add service. Please try again.");
    }
};
// Remove service from API and UI
// const handleRemoveService = async (vanueId) => {
//     // const apiUrl = `http://localhost:7070/vendor_services/DeleteVenue/${vanueId}/${vendorId}`;
//     const apiEndpoints = {
//         Venue: `http://localhost:7070/vendor_services/Venueadd/${vanueId}/${vendorId}`,
//         Sound: `http://localhost:7070/vendor_services/soundServicedelete/${soundId}/${vendorId}`,
//         Food: `http://localhost:7070/vendor_services/FoodServicedelete/${foodId}/${vendorId}`,
//         Decoration: `http://localhost:7070/vendor_services/DecorationServicedelete/${decorationId}/${vendorId}`,
//         Makeup: `http://localhost:7070/vendor_services/MakeUpDtoServicedelete/${makeUpId}/${vendorId}`,
//         Photography: `http://localhost:7070/vendor_services/PhotoServicedelete/${photoId}/${vendorId}`,
//     };
//     try {
//         const response = await axios.delete(apiUrl, {
//             headers: { Authorization: `Bearer ${token}` }
//         });

//         if (response.status === 200) {
//             alert("Service removed successfully!");
//             setServices(services.filter(service => service.id !== vanueId));
//         } else {
//             alert("Failed to remove service.");
//         }
//     } catch (error) {
//         console.error("Error removing service:", error);
//         alert("An error occurred while removing the service.");
//     }
// };

const handleRemoveService = async (service) => {
    const { id, category } = service;

    // Define API endpoints dynamically
    const apiEndpoints = {
        Venue: `http://localhost:7070/vendor_services/DeleteVenue/${id}/${vendorId}`,
        Sound: `http://localhost:7070/vendor_services/soundServicedelete/${id}/${vendorId}`,
        Food: `http://localhost:7070/vendor_services/FoodServicedelete/${id}/${vendorId}`,
        Decoration: `http://localhost:7070/vendor_services/DecorationServicedelete/${id}/${vendorId}`,
        Makeup: `http://localhost:7070/vendor_services/MakeUpDtoServicedelete/${id}/${vendorId}`,
        Photography: `http://localhost:7070/vendor_services/PhotoServicedelete/${id}/${vendorId}`,
    };

    const apiUrl = apiEndpoints[category]; // Select API based on category

    if (!apiUrl) {
        alert("Invalid service category.");
        return;
    }

    try {
        const response = await axios.delete(apiUrl, {
            headers: { Authorization: `Bearer ${token}` }
        });

        if (response.status === 200) {
            alert("Service removed successfully!");
            setServices(services.filter(s => s.id !== id));
        } else {
            alert("Failed to remove service.");
        }
    } catch (error) {
        console.error("Error removing service:", error);
        alert("An error occurred while removing the service.");
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
                                        <th>remove</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {services.map((service, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{service.Name}</td>
                                            <td>{service.category}</td>
                                            <td>{service.discription}</td>
                                            
                                            <td>{Object.entries(service.details).map(([key, value]) => `${key}: ${value}`).join(", ")}</td>
                                            <td>
                                                <button className="btn btn-danger" onClick={() => handleRemoveService(service.id)}>Remove</button>
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
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
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
                                    <textarea className="form-control" rows="3" value={newService.discription} onChange={handleDescriptionChange} />
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
