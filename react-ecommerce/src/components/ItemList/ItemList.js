import Item from "../Item/Item"
import './itemlist.css';

const ItemList = ({ items }) => {
    return (
        <div className="listar">
            {
                items.map(item => <Item key={item.id} item={item} />)
            }
        </div>
    )
}

export default ItemList