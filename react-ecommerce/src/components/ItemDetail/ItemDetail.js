import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ title, pictureUrl, description, price, stock }) => {
    const handleOnAdd = (quantity) => {
        console.log(quantity);
    }

    return (
        <div> 
            <Card sx={{ maxWidth: 345, background: 'black', color:'white'}} >
            <CardActionArea>
                <CardMedia
                component="img"
                height="auto"
                image={pictureUrl}
                alt={title}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2">
                    {description}
                </Typography>
                    <Typography variant="body2">
                    $ {price}
                    </Typography>

                    <Typography variant="body2">
                    {stock > 0 ? <ItemCount stock={stock} initial={1} onAdd={handleOnAdd}/> : 'OUT OF STOCK!'}
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        </div>
    )
   
}


export default ItemDetail;