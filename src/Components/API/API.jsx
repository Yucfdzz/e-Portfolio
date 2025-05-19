import { useState } from "react";
import './API.css'; 

export default function App() {
  const [pokemonData, setPokemonData] = useState(null);
  const [currentId, setCurrentId] = useState(1); 

  const fetchPokemon = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Pokémon non trouvé");
        }
                                            // catch error utilisee a l aide de internet (on ne la pas vu en classe)
        return res.json();
      })
      .then((data) => setPokemonData(data))
      .catch(() => setPokemonData(null));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const search = formData.get("search");
    if (search.trim() !== "") {
      fetchPokemon(search.toLowerCase());
      setCurrentId(null); 
    }
    e.target.reset();
  };

  const handleNext = () => {
    const nextId = currentId + 1;
    setCurrentId(nextId);
    fetchPokemon(nextId);


  };

  const handlePrevious = () => {
    if (currentId > 1) {
      const prevId = currentId - 1;
      setCurrentId(prevId);

      fetchPokemon(prevId);
    }
  };


  useState(() => {
    fetchPokemon(currentId);
  }, []);

  return (
    <div className="pokemon-container">
      <h2>Rechercher un Pokémon</h2>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Entrez un nom ou un ID"
          required
          className="search-input"
        />
        <button type="submit" className="search-button">Rechercher</button>
      </form>

   
      <div className="navigation-buttons">
        <button onClick={handlePrevious} className="nav-button">Précédent</button>
          
        
        <button onClick={handleNext} className="nav-button"> Suivant</button>
         
        
      </div>

      {pokemonData ? (
        <>
      
          <img
            className="pokemon-image"
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
          />

      
          <table className="pokemon-stats">
            <thead>
              <tr>
                <th>Statistique</th>
                <th>Valeur</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nom</td>
                <td>{pokemonData.name}</td>
              </tr>
              <tr>
                <td>Taille</td>
                <td>{pokemonData.height}</td>
              </tr>
              <tr>
                <td>Poids</td>
                <td>{pokemonData.weight}</td>
              </tr>
              <tr>
                <td>Types</td>
                <td>{pokemonData.types.map((typeInfo) => typeInfo.type.name).join(", ")}</td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <p>Pokémon non trouvé. Essayez un autre nom ou ID.</p>
      )}
    </div>
  );
}