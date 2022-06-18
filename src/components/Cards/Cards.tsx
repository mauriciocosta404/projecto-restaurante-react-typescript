import * as C from './style';
import Card from './Card/Card'; 
import{Data} from './mock';
import {useEffect, useState} from 'react';

interface Invoicedata{
        image:string,
        name:string,
        price:number
}

const Cards=()=>{

    const [datas,setDatas]=useState<Invoicedata[]>([]);

    useEffect(()=>{
        setDatas(Data);
    },[]);
    return(
    <C.Dishes>
         <h3 className="sub-heading">our dishes</h3>
        <h1 className="heading">popular dishes</h1>

        <C.CardsContainer>
            {datas.map((item,id)=>(<Card key={id} datas={item}/>))}
        </C.CardsContainer>
    </C.Dishes>)
}
export default Cards;