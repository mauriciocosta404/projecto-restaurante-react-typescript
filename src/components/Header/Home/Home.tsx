import * as C from './style';
import HomeImage from '../../../images/home-img-1.png';
const Home=()=>{
    return(
        <C.SectionContainer>
            <C.HomeSlider>
                <C.Slide>
                    <C.Content>
                        <span>Our special dishes</span>
                        <h3>spicy noodles</h3>
                        <p>Lorem ipsum dolor sit. Officia a nostrum aut excepturi quae dignissimos voluptas, quidem distinctio, magni veritatis voluptatem quos 
                            recusandae aperiam iure explicabo tempora ipsam eos temporibus.</p>
                            <a href="#" className="btn">order now</a>
                    </C.Content>
                    <C.ImageContainer>
                        <img src={HomeImage} alt=""/>
                    </C.ImageContainer>
                </C.Slide>
            </C.HomeSlider>
        </C.SectionContainer>
    )
}
export default Home;