import { useParams } from "react-router-dom";
import {useCharacter} from "../hooks/useCharacter";


export const Character = () => {
    const {id} = useParams();

    const { error, loading, data } = useCharacter (id)


     if (error) return (<div> Opps something's wrong..</div>)
     if (loading) return (<div> Chill...</div>)
     
     return (
         <div className="character"> 
         <img src={data.character.image} width={550} height={550} alt="" />
            <div className="character-content">
                <h1>{data.character.name}</h1>
                <p>{data.character.gender} </p>
                    <div className="character-episode">
                        {data.character.episode.map(episode =>{
                            return <div>
                                {episode.name} - <b>{episode.episode} </b>
                            </div>
                        })}
                    </div>
            </div>

         </div>
     )
}
 
export default Character;