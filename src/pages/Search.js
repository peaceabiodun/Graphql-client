import { gql, useLazyQuery } from "@apollo/client";
import { useState } from "react";

const GET_CHARACTER_LOCATIONS = gql`
query GetCharacterLocations($name: String!) {
    character(filter:{name: $name}) {
        results{
            location{
                name 
            }
        }
    }
}
`;

const Search = () => {
    const [name, setName] = useState("");

    const [getLocations, {error, loading, data}] = useLazyQuery(
        GET_CHARACTER_LOCATIONS,
        {
            variables: {
                name,
            },
        }
    );

    console.log({
        loading,
        error,
        data,
    });

    return (
        <div>
            <input value={name} onChange= {(e) => setName(e.target.value)}></input>
            <button onClick={() => getLocations()}>Search </button>
            {loading && <div>chill....</div>}
            {error && <div>something is wrong </div>}
            {data && (
                <ul>
                    {data.characters.results.map((character) =>{
                        return <li>{character.location.name} </li>
                    })}
                </ul>
            )}
        </div>
      );
}
 
export default Search;