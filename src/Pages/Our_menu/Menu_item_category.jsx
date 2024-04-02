import MenuItem from "../Shared/MenuItem/MenuItem";


const Menu_item_category = ({menu}) => {
    return (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5 my-10">
            {
                menu.map(x => <MenuItem key={x._id} item={x}></MenuItem>)
            }
        </div>
    );
};

export default Menu_item_category;