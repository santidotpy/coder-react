import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
    const cart_items = 1;
    return (
        <MenuItem>
        <IconButton size="large" aria-label="items added to shopping cart" color="inherit">
          <Badge badgeContent={cart_items} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </MenuItem>
    );
};

export default CartWidget;