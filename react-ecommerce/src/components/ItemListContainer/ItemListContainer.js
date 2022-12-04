import Meli from '../MockApi/Meli';
import './itemlistcontainer.css';

const ItemListContainer = ({ greeting }) => {
    return (
        <div>
        <h2 className="greetingFont">{greeting}</h2>
        <Meli />
        </div>
    );
    }

export default ItemListContainer;