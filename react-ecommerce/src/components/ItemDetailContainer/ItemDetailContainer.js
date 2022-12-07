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
        </div>
    )
}


export default ItemDetailContainer;