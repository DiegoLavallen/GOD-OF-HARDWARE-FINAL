import './ItemList.css';
import Item from './Item';

export default function ItemList({ products }){
    return(

        <div>
            {
                products.map(function(producto){
                    return (
                        <Item key={producto.id} item={producto} />
                    );
                })
            }
        </div>
    );
};