import { useState, useEffect } from "react";
import "../css/millstone.css"

function Millstone() {    const milestones = [
    { id: 1, label: "Happy Customers", value: 50, image: "https://via.placeholder.com/80" },
    { id: 2, label: "Years of Experience", value: 2, image: "https://via.placeholder.com/80" },
    { id: 3, label: "Destinations Covered", value: 10, image: "https://via.placeholder.com/80" },
    { id: 4, label: "Weddings Planned", value: 30, image: "https://via.placeholder.com/80" }
];

const [counts, setCounts] = useState(milestones.map(() => 0));

useEffect(() => {
    milestones.forEach((milestone, index) => {
        const interval = setInterval(() => {
            setCounts(prevCounts => {
                const newCounts = [...prevCounts];
                if (newCounts[index] < milestone.value) {
                    newCounts[index] += 1;
                } else {
                    clearInterval(interval);
                }
                return newCounts;
            });
        }, 50); // Adjust the speed of increment here
    });
}, []);

return (
    <div className="container my-5">
        <h2 className="text-center mb-4">Our Milestones</h2>
        <div className="row text-center">
            {milestones.map((milestone, index) => (
                <div className="col-md-3 col-12" key={milestone.id}>
                    <div className="milestone-item">
                        <img
                            src={milestone.image}
                            alt={milestone.label}
                            className="milestone-image mb-3"
                        />
                        <h3 className="milestone-number">{counts[index]}+</h3>
                        <p className="milestone-text">{milestone.label}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
}

export default Millstone;