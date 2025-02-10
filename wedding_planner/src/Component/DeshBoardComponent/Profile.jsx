import React, { useState, useEffect } from "react";
import axios from "axios";

function Profile() {
    const userId = localStorage.getItem("id"); // Retrieve user ID
    const token = localStorage.getItem("token"); // Retrieve authentication token

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get(`http://localhost:7070/api/profile/${userId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUser(response.data);
            } catch (err) {
                setError("Failed to load profile data.");
            } finally {
                setLoading(false);
            }
        };

        if (userId && token) {
            fetchProfile();
        } else {
            setError("User not authenticated.");
            setLoading(false);
        }
    }, [userId, token]);

    if (loading) return <p>Loading profile...</p>;
    if (error) return <p className="error">{error}</p>;
    if (!user) return <p>No user data available.</p>;

    return (
        <div className="container mt-5">
            <center><h2 style={{ fontSize: 50 }}>Profile</h2></center>
            <br />
            <br />
            <div className="row">
                <div className="col-md-4 text-center">
                    <img
                        src={user.image} // Ensure this is a valid URL
                        alt="User"
                        className="img-fluid rounded-circle mb-3"
                        style={{ width: "150px", height: "150px" }}
                    />
                    <button className="btn btn-primary">Change Image</button>
                </div>
                <div className="col-md-8">
                    <div className="card p-4 shadow">
                        <h5 className="mb-3">General Information</h5>
                        <div className="mb-3"><strong>First Name:</strong> {user.firstName}</div>
                        <div className="mb-3"><strong>Last Name:</strong> {user.lastName}</div>
                        <div className="mb-3"><strong>Last Logged In:</strong> {user.lastLoggedIn}</div>
                        <div className="mb-3"><strong>Role:</strong> <span className="badge bg-primary text-white">{user.role}</span></div>
                    </div>

                    <div className="card p-4 shadow mt-4">
                        <h5 className="mb-3">Contact Information</h5>
                        <div className="mb-3"><strong>Email:</strong> {user.email}</div>
                        <div className="mb-3"><strong>Phone:</strong> {user.phone}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;


// import React, { useState } from "react";

// function Profile() {
//     const [user, setUser] = useState({
//         image: "D:/Dac/Dac_final-project_KD-J022/wedding_planner/src/images/user_image.jpg", // Replace with your dynamic image path
//         firstName: "John",
//         lastName: "Doe",
//         lastLoggedIn: "7 May 2021 11:16:05 am",
//         role: "Admin",
//         email: "john.doe@example.com",
//         phone: "+91-76-1234-5678",
//     });

//     const [isEditing, setIsEditing] = useState(false); // Toggle for edit mode
//     const [updatedUser, setUpdatedUser] = useState({ ...user }); // State to hold updated data

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setUpdatedUser((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleEditSave = () => {
//         setUser(updatedUser); // Save changes
//         setIsEditing(false); // Exit edit mode
//     };

//     return (
//         <div className="container mt-5">
//             <center><h2 style={{fontSize : 50}}>Profile</h2></center> 
//             <br />
//             <br />
//             <div className="row">
//                 {/* User Image and Change Button */}
//                 <div className="col-md-4 text-center">
//                     <img
//                         src={user.image} // Use the dynamic image path
//                         alt="User"
//                         className="img-fluid rounded-circle mb-3"
//                         style={{ width: "150px", height: "150px" }}
//                     />
//                     <button className="btn btn-primary">Change Image</button>
                    
//                 </div>

//                 {/* General Information */}
//                 <div className="col-md-8">
//                     {!isEditing ? (
//                         <>
//                             <div className="card p-4 shadow">
//                                 <h5 className="mb-3">General Information</h5>
//                                 <div className="mb-3">
//                                     <strong>First Name:</strong> {user.firstName}
//                                 </div>
//                                 <div className="mb-3">
//                                     <strong>Last Name:</strong> {user.lastName}
//                                 </div>
//                                 <div className="mb-3">
//                                     <strong>Last Logged In:</strong> {user.lastLoggedIn}
//                                 </div>
//                                 <div className="mb-3">
//                                     <strong>Role:</strong>{" "}
//                                     <span className="badge bg-primary text-white">{user.role}</span>
//                                 </div>
//                             </div>

//                             {/* Contact Information */}
//                             <div className="card p-4 shadow mt-4">
//                                 <h5 className="mb-3">Contact Information</h5>
//                                 <div className="mb-3">
//                                     <strong>Email:</strong> {user.email}
//                                 </div>
//                                 <div className="mb-3">
//                                     <strong>Phone:</strong> {user.phone}
//                                 </div>
//                             </div>

//                             {/* Edit Button */}
//                             <button
//                                 className="btn btn-warning mt-4"
//                                 onClick={() => setIsEditing(true)}
//                             >
//                                 Edit Profile
//                             </button>
//                         </>
//                     ) : (
//                         <>
//                             {/* Editable Form */}
//                             <div className="card p-4 shadow">
//                                 <h5 className="mb-3">Edit Profile</h5>
//                                 <div className="mb-3">
//                                     <label>First Name:</label>
//                                     <input
//                                         type="text"
//                                         name="firstName"
//                                         value={updatedUser.firstName}
//                                         onChange={handleInputChange}
//                                         className="form-control"
//                                     />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label>Last Name:</label>
//                                     <input
//                                         type="text"
//                                         name="lastName"
//                                         value={updatedUser.lastName}
//                                         onChange={handleInputChange}
//                                         className="form-control"
//                                     />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label>Email:</label>
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         value={updatedUser.email}
//                                         onChange={handleInputChange}
//                                         className="form-control"
//                                     />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label>Phone:</label>
//                                     <input
//                                         type="tel"
//                                         name="phone"
//                                         value={updatedUser.phone}
//                                         onChange={handleInputChange}
//                                         className="form-control"
//                                     />
//                                 </div>
//                                 {/* Save and Cancel Buttons */}
//                                 <div className="mt-3">
//                                     <button
//                                         className="btn btn-success me-3"
//                                         onClick={handleEditSave}
//                                     >
//                                         Save Changes
//                                     </button>
//                                     <button
//                                         className="btn btn-secondary"
//                                         onClick={() => setIsEditing(false)}
//                                     >
//                                         Cancel
//                                     </button>
//                                 </div>
//                             </div>
//                         </>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Profile;
