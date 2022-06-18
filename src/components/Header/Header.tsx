import { useEffect, useState } from 'react';
import Search from './searh/Searsh';
import * as C from './style';
import { IconsContainer } from './style';

interface showModalProps{
    showModalSearch:boolean;
    setShowModalSearch(modal:boolean):void
}

const Header=({showModalSearch,setShowModalSearch}:showModalProps)=>{

    const showModal=():void=>{
        setShowModalSearch(showModalSearch?false:true);
    }

    return(
    <C.Container>
       <C.Logo href=""><i className="logo-icon fas fa-utensils"></i>Mauriciadas</C.Logo> 

       <C.Navbar>
            <a href="#home" className="active">home</a>
            <a href="#dishes">dishes</a>
            <a href="#about">about</a>
            <a href="#menu">menu</a>
            <a href="#review">review</a>
            <a href="#order">order</a>
        </C.Navbar> 

        <C.IconsContainer>
            <C.Icon className="fas fa-bars" id="menu-bars"></C.Icon>
            <div onClick={showModal}><C.Icon  className="fas fa-search" id="search"></C.Icon></div>
            <C.LinkIcon href="#" className="fas fa-heart"></C.LinkIcon>
            <C.LinkIcon href="#" className="fas fa-shopping-cart"></C.LinkIcon>
        </C.IconsContainer>
    </C.Container>
    );
}
export default Header;