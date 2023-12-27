import jt from '../assets/forest_path.jpg'
import '../styles/about.css'

function About () {
    return (
        <>

        <div className='aboutMain'>

        <h1>Info about this project</h1>

        <div className='JT_Info'>


        <img className='aboutImg' src={jt} alt="A picture of me on a forest bridge" />
        <p className='info_text'>This is a project for the React Course at Business College Helsinki.  Please find me at
        
        <a href="https://github.com/johntrehearn"> https://github.com/johntrehearn</a>

        <br/> 
        <br/> This React Project has search features for either animals and birds, routing for the SPA. Maping to display the API data.
        <br/> 
        <br/> 

        I have learned a great deal about useState, rooting, app deployment and maping on this project.
        </p>

        </div>
        </div>
     
        </>
    )
}

export default About;