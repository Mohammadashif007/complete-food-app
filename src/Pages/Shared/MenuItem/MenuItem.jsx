const MenuItem = ({ item }) => {
    const { name, recipe, image, price } = item;

    return (
        <div className="flex justify-between ">
            <img
                className="w-[70px] h-[60px] rounded-tr-full rounded-b-full mr-5"
                src={image}
                alt=""
            />
            <div>
                <p className="text-[20px]">{name}-------</p>
                <p>{recipe}</p>
            </div>
            <p className="text-orange-300 font-semibold text-[22px]">
                ${price}
            </p>
        </div>
    );
};

export default MenuItem;
