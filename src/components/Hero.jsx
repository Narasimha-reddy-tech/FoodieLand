export default function Hero() {
    return (
        <section className="py-5" style={{ minHeight: "100vh" }}>
            <div className="container h-100">
                <div className="row align-items-center g-5 h-100">

                    <div className="col-lg-6">
                        <span className="badge bg-success mb-3 fs-6 px-3 py-2">Hot Recipes</span>
                        <h1 className="fw-bold display-3">Spicy Delicious Chicken Wings</h1>
                        <p className="text-muted mt-3 fs-5">
                            These chicken wings are super crispy, coated in a spicy sauce and
                            perfect for dinner or snacks.
                        </p>
                        <button className="btn btn-dark btn-lg mt-4 px-5 py-3">
                            View Recipes
                        </button>
                    </div>

                    <div className="col-lg-6 text-center">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk_D2gc9rhGQkuyTNTnt1R3J7IfjhkP6WNaQ&s"
                            alt="Chicken Wings" className="rounded shadow-lg"
                            style={{ width: "100%", height: "600px", objectFit: "cover", borderRadius: "15px" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
