const categories = [
    { name: "Breakfast", icon: "🥯" },
    { name: "Vegan", icon: "🫑" },
    { name: "Meat", icon: "🥩" },
    { name: "Dessert", icon: "🍰" },
    { name: "Lunch", icon: "🍜" },
    { name: "Chocolate", icon: "🍫" },
]

export default function Categories() {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="fw-bold">Categories</h2>
                    <a href="#" className="btn btn-outline-success">View All Categories</a>
                </div>
                <div className="row g-4 text-center">
                    {categories.map((cat, index) => (
                        <div key={index} className="col-6 col-md-2">
                            <div className="border rounded p-3 bg-white shadow-sm">
                                <div className="fs-1">{cat.icon}</div>
                                <p className="mt-2 mb-0 fw-medium">{cat.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
