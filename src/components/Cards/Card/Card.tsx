import * as C from './style';
import People from '../../../images/dish-1.png';

interface Invoicedata{
   datas:{
    image:string,
    name:string,
    price:number
   }
}

const Card=({datas}:Invoicedata)=>{
    return(
    <C.Box>
        <a href="" id="#" className="fas fa-heart"></a>
        <a href="" id="#" className="fas fa-eye"></a>
        <img src={datas.image} alt=""/>
        <h3>{datas.name}</h3>
        <C.Stars>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
        </C.Stars>
        <span>{datas.price}Kz</span>
        <a href="" className="btn" id="">add to cart</a>
    </C.Box>)
}
export default Card;