import { useState ,useEffect } from 'react';
import { getProductById } from '../MockProducts/MockProducts';
import { useParams } from 'react-router-dom';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const { itemId } = useParams();

    useEffect(() => {
        getProductById(itemId)
        .then(response => {
            setItem(response);
        })
        .catch(error => {
            console.log(error);
        });
    }, [itemId]);

    


    return (
        



        <div>
          <h2>Item Detail</h2>
          <ItemDetail {...item}/>
            {/* <h2>Item Detail</h2>
            <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <img src={item
                    .pictureUrl} className='imageSize' alt={item.title} />
            </div>     */}
        </div>    
        // <div>
        //     <h2>Item Detail</h2>
        //     { items.map(item => (
        //         <div key={item.id}>
        //         <h2>{item.title}</h2>
        //         <p>{item.description}</p>
        //         <p>{item.price}</p>
        //         </div>
        //     )) }
        // </div>
    )
}


export default ItemDetailContainer;