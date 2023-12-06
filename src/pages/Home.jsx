import { Link } from "react-router-dom";

function Home() {
    return (
        <>
        <h1> PICTURE TO LINK TO ANIMALS AND BIRDS</h1>
        <Link to="/animals">Animals</Link>
        <Link to="/birds">Birds</Link>
        </>
    );
}

export default Home;