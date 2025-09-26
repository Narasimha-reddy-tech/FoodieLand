const images = [
    "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/972a37599772cdc7df93a0855ad87591",
    "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/26/d112a6d7-d173-4ca7-a5ee-40f845719d18_710674.JPG",
    "https://www.pepperbowl.com/wp-content/uploads/2025/02/instant-pot-penne-pasta-recipe.jpg",
    "https://www.pillsbury.in/wp-content/uploads/2023/11/Recipe.jpg",
];

export default function InstagramFeed() {
    return (
        <section className="py-5">
            <div className="container text-center">
                <h2 className="fw-bold mb-4">Check Out Our Instagram</h2>
                <div className="row g-3">
                    {images.map((img, idx) => (
                        <div key={idx} className="col-6 col-md-3">
                            <div
                                style={{
                                    width: "100%", height: "250px", overflow: "hidden", borderRadius: "10px",
                                }}
                                className="shadow-sm"
                            >
                                <img
                                    src={img}
                                    alt="Insta post"
                                    style={{
                                        width: "100%", height: "100%", objectFit: "cover",
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
