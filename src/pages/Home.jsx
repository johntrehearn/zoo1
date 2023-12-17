import { NavLink } from "react-router-dom";
import kelpie from '../assets/kelpie.jpg'
import bird from '../assets/bird.jpg'

function Home() {
    return (
        <>
        <h1> PICTURE TO LINK TO ANIMALS AND BIRDS</h1>

        <NavLink to="/animals">
            <img className='entryPic animalsPic' src={kelpie} alt="A picture of a dog linking to animal zoo" />
            </NavLink>
        <NavLink to="/birds">Birds</NavLink>
        <img className='entryPic birdPic'src={bird} alt="A picture of a bird linking to bird zoo" />
        </>
    );
}

export default Home;