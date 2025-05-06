import {useState , useEffect} from "react"

export default function App() {
  const [pokemonData, setPokemonData] = useState(null)
  const [Count, setCount] =   useState(1)

   useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${Count}`)
      .then(res => res.json())
      .then(data => setPokemonData(data))
  }, [Count])

  return (
    <div>
      <h2>Le numéro est {Count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Afficher le prochain Pokémon</button>

      <div className="Data">
       {pokemonData && <h1>Name: {pokemonData.name}</h1>}
       {pokemonData && <img src={pokemonData.sprites.front_default} alt="" />}

      </div>

      {/* {<pre className="Data">{JSON.stringify(pokemonData, null, 2)}</pre>} */}
    </div>
  )
}