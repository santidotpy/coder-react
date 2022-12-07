import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Item = ({ item }) => {
    return (
        <div>

            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    className='imageSize'
                    component="img"
                    image={item.pictureUrl}
                    alt={item.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {item.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    $ {item.price}
                    </Typography>

                </CardContent>
                <CardActions>
                <Link to={`/item/${item.id}`}><Button type='submit' variant="contained">Details</Button></Link> 
                </CardActions>
                </Card>

        </div>
    )
}



export default Item;