import { useState, useEffect } from "react";
import './API.css'; 

export default function App() {
  const [pokemonData, setPokemonData] = useState(null);
  const [currentId, setCurrentId] = useState(1);
  const [darkMode, setDarkMode] = useState(false); 
  const [search, setSearch] = useState(null)


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode'); 
  };
  
  const fetchPokemon = (id) => {
     fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
       .then((res) => {
         if (!res.ok) {
           throw new Error("Pokémon non trouvé");
                                                                 // Catch error vus sur internet (on ne la pas vu dans le cours)
         }
         return res.json();
       })
       .then((data) => setPokemonData(data))
       .catch(() => setPokemonData(null));
   };

  useEffect(() => {
    currentId && fetchPokemon(currentId)
    search && fetchPokemon(search)
  }, [currentId, search])

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchText = formData.get("search");
    if (searchText.trim() !== "") {
      setCurrentId(null);
      setSearch(searchText.toLowerCase());
    }
    e.target.reset();
  };

  const handleNext = () => {
    setCurrentId(prevId => prevId + 1);
    // fetchPokemon(nextId);
  };

  const handlePrevious = () => {
    if (currentId > 1) {
      setCurrentId(prevId => prevId -1);
      // fetchPokemon(prevId);
    }
  };



  return (
    <div className={`pokemon-container ${darkMode ? 'dark-mode' : ''}`}>
      <button onClick={toggleDarkMode} className="toggle-dark-mode">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <h2 className={`title ${darkMode ? 'dark-mode' : ''}`}>Rechercher un Pokémon</h2>
      <form onSubmit={handleSubmit} className={`search-form ${darkMode ? 'dark-mode' : ''}`}>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Entrez un nom ou un ID"
          required
          className={`search-input ${darkMode ? 'dark-mode' : ''}`}
        />
        <button type="submit" className={`search-button ${darkMode ? 'dark-mode' : ''}`}>Rechercher</button>
      </form>

      <div className={`navigation-buttons ${darkMode ? 'dark-mode' : ''}`}>
        <button onClick={handlePrevious} className={`nav-button ${darkMode ? 'dark-mode' : ''}`}>Précédent</button>
        <button onClick={handleNext} className={`nav-button ${darkMode ? 'dark-mode' : ''}`}>Suivant</button>
      </div>

      {pokemonData ? (
        <>
    <img
        className={`pokemon-image ${darkMode ? 'dark-mode' : ''}`}
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
      />
   <table className={`pokemon-stats ${darkMode ? 'dark-mode' : ''}`}>
    <thead>
        <tr>
          <th className={darkMode ? 'dark-mode' : ''}>Statistique</th>
             <th className={darkMode ? 'dark-mode' : ''}>Valeur</th>
        </tr>
      </thead>
       <tbody>
        <tr>
            <td className={darkMode ? 'dark-mode' : ''}>Nom</td>
            <td className={darkMode ? 'dark-mode' : ''}>{pokemonData.name}</td>
        </tr>
        <tr>
            <td className={darkMode ? 'dark-mode' : ''}>Taille</td>
              <td className={darkMode ? 'dark-mode' : ''}>{pokemonData.height}</td>
         </tr>
           <tr>
                <td className={darkMode ? 'dark-mode' : ''}>Poids</td>
                <td className={darkMode ? 'dark-mode' : ''}>{pokemonData.weight}</td>
         </tr>

         
         <tr>
           <td className={darkMode ? 'dark-mode' : ''}>Types</td>
           <td className={darkMode ? 'dark-mode' : ''}>
                  {pokemonData.types.map((Info) => Info.type.name).join(", ")}
           </td>
          </tr>
            </tbody>
    </table>
        </>
      ) : (
        <p className={darkMode ? 'dark-mode' : ''}>Pokémon non trouvé. Essayez un autre nom ou ID.</p>
      )}
    </div>
  );
}