import jt from '../assets/forest_path.jpg'
import '../styles/about.css'

function About () {
    return (
        <>

        <div className='aboutMain'>

        <h1>Info about this project</h1>

        <div className='JT_Info'>


        <img src={jt} alt="" />
        <p className='info_text'>This is a project for the React Course at Business College Helsinki.  Please find me at
        
        <a href="https://github.com/johntrehearn"> https://github.com/johntrehearn</a>
        </p>

        </div>
        </div>
     
        </>
    )
}

export default About;