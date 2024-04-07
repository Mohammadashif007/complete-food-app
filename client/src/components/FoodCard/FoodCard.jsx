const FoodCard = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img src={image} alt="food" />
                </figure>
                <p className="absolute bg-gray-700 text-white px-2 rounded-md right-2 top-2">
                    ${price}
                </p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
