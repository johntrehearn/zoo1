import { NavLink } from "react-router-dom";
import kelpie from '../assets/kelpie.jpg'
import bird from '../assets/bird.jpg'
import '../styles/home.css'


function Home() {
    return (
        <>
        <div className='homeBody'>

            <h1> Welcome to the JT Zoo</h1>
            <h2>Do you want to visit our animal or birds section?</h2>

            <div className='jtZoos'>


            <NavLink to="/animals"> 
                <img className='entryPic animalsPic' src={kelpie} alt="A picture of a dog linking to animal zoo" />
            <div className='title_text'>

                <h2>Aminals</h2>
            </div>
                </NavLink>
            <NavLink to="/birds">
            <img className='entryPic birdPic'src={bird} alt="A picture of a bird linking to bird zoo" />
            <div className='title_text'>

            <h2>Birds</h2>
            </div>
            </NavLink>
            </div>
        </div>
        </>
    );
}

export default Home;