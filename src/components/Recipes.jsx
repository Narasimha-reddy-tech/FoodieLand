const recipes = [
    {
        title: "Burger",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/972a37599772cdc7df93a0855ad87591",
        time: "30 min",
    }, {
        title: "Pizza",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/26/d112a6d7-d173-4ca7-a5ee-40f845719d18_710674.JPG",
        time: "15 min",
    }, {
        title: "Pasta",
        img: "https://www.pepperbowl.com/wp-content/uploads/2025/02/instant-pot-penne-pasta-recipe.jpg",
        time: "45 min",
    }, {
        title: "Momos",
        img: "https://www.pillsbury.in/wp-content/uploads/2023/11/Recipe.jpg",
        time: "25 min",
    },
];

export default function Recipes() {
    return (
        <section className="py-5">
            <div className="container">
                <h2 className="fw-bold mb-4 text-center">Simple and Tasty Recipes</h2>
                <div className="row g-4">
                    {recipes.map((r, index) => (
                        <div key={index} className="col-md-3">
                            <div className="card h-100 rounded-lg shadow-sm border-0">
                                <img src={r.img} alt={r.title} className="card-img-top"
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{r.title}</h5>
                                    <p className="text-muted">{r.time} • Easy</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
