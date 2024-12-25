import "../css/about.css"

function AboutUs() {
    return ( 
      <div className="container-fluid">
      <div className="card mb-3 rounded-lg border-0">
    <h2 className="text-center mb-4" style={{ color: 'black', fontFamily: 'Arial, sans-serif', fontSize: '2rem' }}>About Us</h2>
                <h5 className="card-title text-center" style={{ color: 'black', fontSize: '1.5rem', fontWeight: '600' }}>Wedding Planning Experts</h5>
    <div className="row g-0">
        <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="Wedding Planning" />
        </div>
        <div className="col-md-8">
            <div className="card-body">
                <p className="card-text" style={{ color: 'black', fontSize: '1.1rem', lineHeight: '1.6' }}>
                    Our team of professionals offers personalized wedding planning services, ensuring your big day is flawless. We take care of every detail from start to finish, including venue selection, decor, catering, and more. Let us make your dream wedding come true.
                </p>
            </div>
        </div>
    </div>
</div>
</div>
    );
}

export default AboutUs;