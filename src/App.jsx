import { useState } from 'react';
import Card from './Card';
/* import Header from './Header';
import Footer from './Footer'; */
import {animals} from './animalsList';

function App() {
  const [animalList, setAnimals] = useState(animals);
  const [search, setSearch] = useState('');

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  

  const removeHandler = (id) => {
    const updatedAnimalArray = animalList.filter(
      (animal) => animal.name !== id
    );
    setAnimals(updatedAnimalArray);
  };

  const likesHandler = (name, action) => {
    const updatedArray = animalList.map((animal) => {
      if (animal.name === name) {
        if (action === 'add') {
          return {...animal, likes: animal.likes + 1};
        } else {
          return {...animal, likes: animal.likes - 1};
        }
      } else {
        return animal;
      }
    });
    setAnimals(updatedArray);
  };

  return (
    <>
      <main>
        <h1>John Zoo</h1>

        <input type="text" onChange={searchHandler} />
        <div className="cards">
          {animalList
            .filter((fox) =>
              fox.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((animal) => (
              // look at the data in animalsList.js you need to use a datapoint from there
              <Card
               addLikes={() => likesHandler(animal.name, 'add')}
              clearLikes={() => likesHandler(animal.name, 'clear')}
         /*        fox='Margit' */
                key={animal.name}
                {...animal}
                click={() => removeHandler(animal.name)}
              />
            ))}
        </div>
      </main>
      {/* <Footer copyright="Copyright Info"/> */}
    </>
  );
}

export default App;
