import Card from '../components/Card.jsx';

function Animals({
  animalsList,
  searchHandler,
  removeHandler,
  likesHandler,
  search,
}) {
  return (
    <>
      <h1 className='zooTitle'>John's Animals Zoo</h1>
      <div className='animalSearchContainer'>

      <input className='animalSearch'type="text" onChange={searchHandler} placeholder='Search our animal zoo' />
      </div>
      
      
      <div className="cards">
        {animalsList
          .filter((animal) =>
            animal.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((animal) => (
            <Card
              addLikes={() => likesHandler(animal.name, 'add')}
              clearLikes={() => likesHandler(animal.name, 'remove')}
              key={animal.name}
              {...animal}
              click={() => removeHandler(animal.name)}
            />
          ))}
      </div>
    </>
  );
}

export default Animals;
