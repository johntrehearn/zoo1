import { useState } from 'react';
/* import Card from './components/Card.jsx'; */
/* import Header from './components/header';
import Footer from './components/footer'; */
import {animals} from './animalsList';
import { birds } from './animalsList';
import Root from "./pages/Root"
import About from "./pages/About"
import Animals from './pages/Animals';
import Birds from './pages/Birds';
import ErrorPage from './pages/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home.jsx';


function App() {
  const [animalList, setAnimals] = useState(animals);
  const [birdList, setBirdList] = useState(birds);

  const removeHandler = (name) => {
    const updatedAnimalArray = animalList.filter(
      (animal) => animal.name !== name
      );
      setAnimals(updatedAnimalArray);
    };

    const removeBirdHandler = (name) => {
      const updatedArray = birdList.filter((bird) => bird.name !== name);
      setBirdList(updatedArray);
    }

    const [search, setSearch] = useState('');
  
    const searchHandler = (event) => {
      setSearch(event.target.value);
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

  const likesBirdHandler = (name, action) => {
    const updatedArray = birdList.map((bird) => {
      if (bird.name === name) {
        if (action === "add") {
          return {...bird, likes: bird.likes + 1};
        } else {
          return {...bird, likes: bird.likes - 1};
        }
       } else {
          return bird;
        }

      });
    setBirdList(updatedArray)
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children: [

        { path: "/", element: <Home></Home>},
        {
          path: "/animals",
          element: (
            <Animals
            searchHandler={searchHandler}
            removeHandler={removeHandler}
            search={search}
            animalsList={animalList}
            likesHandler={likesHandler}
            />
          ),
        },

        {path: "/about", element: <About></About>},
        {
          path: "/birds",
          element: (
            <Birds
            searchHandler={searchHandler}
            removeBirdHandler={removeBirdHandler}
            search={search}
            birdList={birdList}
            likesBirdHandler={likesBirdHandler}
            />
          ),
        },


      ],
    },

    
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
