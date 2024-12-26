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


  //     <div class="card mb-3 shadow-lg rounded-lg">
  //     <h2 class="text-center mb-4 text-primary font-weight-bold">About Us</h2>
  //     <div class="row g-0">
  //         <div class="col-md-4">
  //             {/* <img src="data:image/jpeg;base64,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" alt="Description of Image" class="img-fluid rounded-start"/> */}
  //         </div>
  //         <div class="col-md-8">
  //             <div class="card-body">
  //                 <h5 class="card-title text-center text-secondary">Wedding Planning Experts</h5>
  //                 <p class="card-text text-muted" style="font-size: 1.1rem;">
  //                     Our team of professionals offers personalized wedding planning services, ensuring your big day is flawless. We take care of every detail from start to finish, including venue selection, decor, catering, and more. Let us make your dream wedding come true.
  //                 </p>
  //             </div>
  //         </div>
  //     </div>
  // </div>
     );
}

export default AboutUs;