import {createGlobalStyle} from 'styled-components';

export const GlobalStyle=createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap');

    :root{
        --green:#27ae60;
        --black:#192a56;
        --light-color:#666;
        --box-shadow:0 0.5rem 1.5rem rgba(0,0,0,0.1);
    }
    *{
        font-family:'nunito',sans-serif ;
        padding: 0;margin: 0;
        box-sizing: border-box;
        transition: all .5s linear;
        outline: none;border:none;
        text-decoration: none;
    }
    html{
        font-size: 62.5%;
        overflow-x: hidden;
        scroll-padding-top: 5.5rem;
        scroll-behavior: smooth;
    }
    section{
    padding:2rem 9%;
}

section:nth-child(even){
   background:#eee;
}

.sub-heading{
     text-align: center;
     color:var(--green);
     font-size: 2rem;
     padding-top: 1rem;
}

.heading{
    text-align: center;
    color:var(--black);
    font-size: 3rem;
    padding-bottom: 2rem;
    text-transform: uppercase;
}

.btn{
    margin-top: 1rem;
    display:inline-block;
    font-size:1.7rem;
    color:#fff;
    background-color: var(--black);
    border-radius: .5rem;
    cursor:pointer;
    padding:.8rem 3rem;
}
.btn:hover{
    background-color: var(--green);
    letter-spacing: .1rem;
}
`;