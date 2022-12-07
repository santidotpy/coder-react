import { useState } from "react"

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const handleSubstract = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <button onClick={handleSubstract}>-</button>
            <span>{count}</span>
            <button onClick={handleAdd}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )

}

export default ItemCount