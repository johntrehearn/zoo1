import {useState} from 'react';
import Card from './Card';
/* import Header from './Header';
import Footer from './Footer'; */
import {animals} from './animalsList';

function App() {
  /* const [animals, setAnimals] = useState([
    { id: 1, name: 'Cat', type : 'Furry', img: 'https://s3.amazonaws.com/freecodecamp/running-cats.jpg' },
    { id: 2, name: 'Lion', type : 'Angry' },
    { id: 3, name: 'Dog', type : 'Hungry' },
  ]);
 */


  // This is the animal list (first item is where the the animals are from then it sets animals and uses the animals in usestate) This uses the import above import {animals} from './animalsList';
  const [animalList, setAnimals] = useState(animals);



  const removeHandler = (id) => {

    // id in this can be called anything it is not relevent to anthing else
    // need to bring in the onclick event from the card.jsx so the button works
    const updatedAnimalArray = animalList.filter((animal) => animal.name !== id);
    setAnimals(updatedAnimalArray);
  };

  return (
    <>
      <main>
        <h1>John's Zoo</h1>
        <div className="cards">
          {animalList.map((animal) => (
// look at the data in animalsList.js you need to use a datapoint from there
            <Card
              key={animal.name}
              {...animal}
// this shows what to run when the button is clicked
              click={() => removeHandler(animal.name)}
            />
          ))}

          <Card
            name={animals[0].name}
            type={animals[0].type}
            img={animals[0].img}
          />
        </div>
      </main>
      {/* <Footer copyright="Copyright Info"/> */}
    </>
  );
}

export default App;
