import {useState , useEffect} from "react"

export default function App() {
  const [pokemonData, setPokemonData] = useState(null)
  const [Count, setCount] =   useState(1)

   useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${Count}`)
      .then(res => res.json())
      .then(data => setPokemonData(data))
      console.log(pokemonData);
      
  }, [Count])

  return (
    <div>
      <h2>ID: {Count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Afficher le prochain Pokémon</button>

      <div className="Data">
       {pokemonData && <h1>Name: {pokemonData.name}</h1>}
       {pokemonData && <img src={pokemonData.sprites.front_default} alt="" />}
       {/* {pokemonData &&  <h1>type: {pokemonData.types.type.name}</h1> } */}
       
       <h1>height:</h1>
       <h1>weight:</h1>

      </div>

      {/* {<pre className="Data">{JSON.stringify(pokemonData, null, 2)}</pre>} */}
    </div>
  )
}