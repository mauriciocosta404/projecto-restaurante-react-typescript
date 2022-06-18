import styled from "styled-components";

export const Box=styled.div`
    padding:2.5rem;
    background: #fff;
    border-radius: .1rem solid rgba(0,0,0,0.2);
    box-shadow: var(--box-shadow);
    position: relative;
    text-align: center;
    overflow: hidden;

    .fa-heart,.fa-eye{
        position: absolute;
        top:1.5rem;
        background-color:#eee;
        border-radius:50%;
        padding: 1.5rem;
        line-height: 5rem;
        font-size: 1.7rem;
        color: var(--black);
        cursor: pointer;
    }
    .fa-heart:hover,.fa-eye:hover{
        background-color:var(--green);
        color:#fff;
    }
    .fa-heart{
        left: 2.5rem;
    }
    .fa-eye{
        right: 2.5rem;
    }
    img{
        width: 17rem;
        margin:1.5rem 0;
    }
    h3{
        color:var(--black);
        font-size: 2rem;
    }
    span{
        color:var(--green);
        font-size:2rem;
        margin-right: 1rem;
        font-weight: bolder;
    }
`;
export const Stars=styled.div`
    padding: 1rem 0;
`;