import './Item.css'

export default function Item({ item }){
    return (
        <div className="itemContainer">
            <img className="itemImg" src={item.pictureUrl} alt='imagen del produto'/>
            <p className="itemPrice">{item.price}</p>
            <p className="itemTittle">{item.Title}</p>
            <p className="itemDescription">{item.description}</p>
        </div>
    );
};