import Card from "../components/Card.jsx"

function Animals ({animalsList, searchHandler, removeHandler, likeHandler, search,})
{
    return (
        <>
        <h1>John's Animals Zoo</h1>
        <input type="text" onChange={searchHandler} />
        <div className='cards'>
            {animalsList
                .filter((animal) =>
                animal.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((animal)=> (
                    <Card
                    addLikes={() => likeHandler(animal.name, "add")}
                    removeLikes={() => likeHandler(animal.name, "remove")}
                    key={animal.name} {...animal} click={() => removeHandler(animal.name)}
                    />

                ))
                }
        </div>


        </>
    );
}

export default Animals;