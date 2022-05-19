import { Link } from "react-router-dom";
import { useCharacters } from "../hooks/useCharacters";

const CharactersList = () => {
    const {error, loading, data} = useCharacters();

if (loading) return <div> Chill, Page loading...</div>;
if (error) return <div> Oops, Somthing went wrong ...</div>;

    return ( 
        <div className="characterList">
            {data.characters.results.map((character) =>{
                return(
                    <Link to={`/${character.id}`}>
                        <img src= {character.image} alt= "" />
                        <h2>{character.name} </h2>
                    </Link>
                );
            })}

        </div>
     );
}
 
export default CharactersList;