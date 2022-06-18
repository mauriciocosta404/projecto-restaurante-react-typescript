import styled from "styled-components";

export const SectionContainer=styled.section`

`;
export const HomeSlider=styled.section`

`;
export const Slide=styled.section`
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:2rem;
    padding-top:9rem;
    flex-wrap:wrap;
`;
export const Content=styled.section`
    flex:1 1 45rem;
    span{
        color:var(--green);
        font-size:3rem;
    }
    h3{
        color:var(--black);
        font-size:7rem;
    }
    p{
        color:var(--light-color);
        padding:2rem 0;
        font-size:1.7rem;
        line-height:1.5;
    }
`;
export const ImageContainer=styled.div`
    flex:1 1 45rem;
    img{
        width:100%;
    }
`;