import FoodCard from "../../components/FoodCard/FoodCard";

const OrderTab = ({ item }) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {item.map((x) => (
                <FoodCard key={x._id} item={x}></FoodCard>
            ))}
        </div>
    );
};

export default OrderTab;
