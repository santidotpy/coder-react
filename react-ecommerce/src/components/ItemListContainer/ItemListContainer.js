// import Meli from '../MockApi/Meli';
import { useState ,useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../MockProducts/MockProducts';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import './itemlistcontainer.css';

const ItemListContainer = ({ greeting }) => {

    const [items, setItems] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        if (categoryId) {
            getProductsByCategory(categoryId)
            .then(response => {
                setItems(response);
            })
            .catch(error => {
                console.log(error);
            });
        }else {
        getProducts()
        .then(response => {
            setItems(response);
        })
        .catch(error => {
            console.log(error);
        });}
    }, []);

    return (
        <div>
            <h2 className="greetingFont">{greeting}</h2>
            <ItemList items={items} />
        
        {/* <Meli /> */}
        </div>
    );
    }

export default ItemListContainer;