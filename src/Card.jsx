const Card = (props) => {
    return (
        <div className='card'>
           {/* THIS IS THE ONCLICK EVENT TO BRING IN THE BUTTON */}
            <button onClick = {props.click}className="material-symbols-outlined">close</button>
            <p id='cardName'>Name: {props.name}</p>
            <p id='cardType'>Type: {props.type}</p>
            <img src={`https://source.unsplash.com/400x400/?${props.name}`} alt="picture"  />
            <p id='cardLikes'><span className="material-symbols-outlined">thumb_up</span>
            Placeholder for likes
            <span className="material-symbols-outlined">thumb_down</span></p>

        </div>
    )
}

export default Card;

