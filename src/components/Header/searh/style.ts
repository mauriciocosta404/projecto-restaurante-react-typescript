import styled from "styled-components";

interface ModalProps{
    showModal:boolean;
}

export const FormContainer=styled.div`
    position: fixed;
    top:${({showModal}:ModalProps)=>showModal?'0':'-110%'};left:0;
    height: 100%;width:100%;
    z-index: 1004;
    background-color: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    color: #fff;
    input{
        width: 50rem;
        border-bottom:.1rem solid #fff;
        padding: 1rem 0;
        color: #fff;
        background: none;
        font-size: 3rem;
        text-transform: none;
    }
    input::placeholder{
        color:#eee;
    }
    input::-webkit-search-cancel-button{
        -webkit-appearance: none;
    }
   #search-icon{
    cursor: pointer;
    font-size: 2.5rem;
   }
   #search-icon:hover{
        color:var(--green);
   }
   #close{
    position: absolute;
    cursor: pointer;
    top: 2rem;
    right: 3rem;
    font-size:2.5rem;
   }

`;