const Card = (props) => {
  return (
    <div className="card">
      <button onClick={props.click} className="material-symbols-outlined closeBut">
        close
      </button>
      <p id="cardName">{props.name.toUpperCase()}</p>
      <img
        src={`https://source.unsplash.com/400x400/?${props.name}`}
        alt="picture"
      />
      <div>

      <div id="cardLikes">
          <button onClick={props.addLikes}>
              <span className="material-symbols-outlined">sentiment_satisfied</span>
          </button>
          <div className='likes_box'>
              <p className="material-symbols-outlined">{props.likes >= 0 ? 'favorite' : 'heart_broken'}</p>
              <p className="likes">{props.likes}</p>
          </div>


          <button onClick={props.clearLikes}>
            <span className="material-symbols-outlined">sentiment_dissatisfied</span>
          </button>
      </div>
      </div>
    </div>
  );
};

export default Card;