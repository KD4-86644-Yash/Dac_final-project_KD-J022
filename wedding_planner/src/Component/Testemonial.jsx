import "D:/Dac/Dac_final-project_KD-J022/wedding_planner/src/css/testamonial.css"

function Testamonial() {
        const testimonials = [
            {
                name: "Anmol & Gurkirat",
                text: "DWP was the best investment I did during the whole process of the wedding ceremonies. They kept us on track with our budget, reminding us that there may be other options where we could achieve the same great outcome and impact but at a lower cost. Our friends & family had a wonderful time largely due to your management. You guys did a truly fantastic job.",
                image: "https://via.placeholder.com/400x300"
            },
            {
                name: "Rhea & Kunal",
                text: "The team made our dream wedding come true! Everything was so seamless, and the attention to detail was impeccable. We can't thank DWP enough for making our special day truly magical.",
                image: "https://via.placeholder.com/400x300"
            },
            {
                name: "Aarav & Meera",
                text: "Highly professional team that takes care of every little thing. We were stress-free during the entire event, and our guests were awestruck. Thank you for an unforgettable experience!",
                image: "https://via.placeholder.com/400x300"
            }
        ];
    
        return (
            <div className="container my-5">
            <h2 className="text-center mb-4">Testimonials</h2>
            <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === 0 ? "active" : ""}`}
                        >
                            <div className="row align-items-center">
                                {/* Text Section */}
                                <div className="col-md-6 order-md-1 text-md-start">
                                    <blockquote className="blockquote">
                                        <p className="fs-5 fst-italic mb-4">{testimonial.text}</p>
                                        <footer className="blockquote-footer">{testimonial.name}</footer>
                                    </blockquote>
                                </div>
                                {/* Image Section */}
                                <div className="col-md-6 order-md-2 text-center">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="img-fluid rounded shadow-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Carousel Controls */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#testimonialCarousel"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#testimonialCarousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
     );
}

export default Testamonial;