export default function Newsletter() {
    return (
        <section className="py-5 bg-success text-white text-center">
            <div className="container">
                <h2 className="fw-bold">Join Our Newsletter</h2>
                <p className="mb-4">Get weekly updates on recipes and cooking tips</p>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="input-group">
                            <input type="email" className="form-control" placeholder="Enter your email" />
                            <button className="btn btn-dark">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
