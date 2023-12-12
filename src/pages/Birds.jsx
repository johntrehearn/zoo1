import Card from "../components/Card.jsx"

function Birds ({birdList, searchHandler, removeBirdHandler, likesBirdHandler, search,})
{
    return (
        <>
        <h1>Johns Bird Zoo</h1>
        <input type="text" onChange={searchHandler} />
        <div className='cards'>
            {birdList
                .filter((bird) =>
                bird.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((bird)=> (
                    <Card
                    addLikes={() => likesBirdHandler(bird.name, "add")}
                    clearLikes={() => likesBirdHandler(bird.name, "remove")}
                    key={bird.name} {...bird} click={() => removeBirdHandler(bird.name)}
                    />

                ))
                }
        </div>


        </>
    );
}

export default Birds;