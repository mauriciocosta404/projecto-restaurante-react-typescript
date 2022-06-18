import styled from "styled-components";

export const Container=styled.header`
    position: fixed;
    top:0;left:0;right:0;
    background-color: #fff;
    padding: 1rem 7%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
    box-shadow: var(--box-shadow);
`;

export const Logo=styled.a`
  color:var(--black);
  font-size:2.5rem ;
  font-weight: bolder;

  .fa-utensils{
    color: var(--green);
  }
  
`;

export const Navbar=styled.nav`
    a{
        font-size: 1.7rem;
        border-radius: .5rem;
        padding: .5rem 1.5rem;
        color: var(--light-color);
        margin:.2rem;
    }
    a.active,a:hover{
        color:#fff;
        background-color: var(--green);
    }
`;


export const IconsContainer=styled.div`
    display: flex;
    align-items: center;
    .fa-bars{
        display: none;
    }
    
`;
export const Icon=styled.i`
    cursor: pointer;
    margin-left: .5rem;
    padding: 1.3rem;
    background-color:#eee;
    border-radius: 50%;
    font-size: 1.2rem;
    :hover{
        color:#fff;
        background-color:var(--green);
        transform: rotate(360deg);
    }
`;
export const LinkIcon=styled.a`
    cursor: pointer;
    margin-left: .5rem;
    padding: 1.3rem;
    background-color:#eee;
    border-radius: 50%;
    font-size: 1.2rem;
    :hover{
        color:#fff;
        background-color:var(--green);
        transform: rotate(360deg);
    }
   
`;