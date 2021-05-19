import React, { useState, useEffect } from 'react';
import PokemonContainer from '../CallApi/CallApi';
import './ApiExample.css';
import {searchPokemon} from '../../../utils/constants';
import warningPokemon from '../../../assets/images/error.gif';

const BASE_API = 'https://pokeapi.co/api/v2/';

const ApiExample = () => {

    const [data, setData] = useState(null);
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState();
    const [shiny, setShinyPokemon] = useState(false);
    const [back, setBackPokemon] = useState(false);
  
    useEffect(() => {
      const callApi = async () => {
        const response = await fetch(BASE_API + `pokemon`);               
        const result = await response.json();
        console.log(response);
        setData(result);             
      }
      callApi()
    }, []);

    const searchingPokemon = (event) =>{
        setSearch(event.target.value);
    }

    const button = async (event) =>{                
        const data = await searchPokemon(search);
        setPokemon(data);        
    }

    const changeShiny = () => {
        setShinyPokemon(shiny => !shiny);
        
    }

    const changeSwitch = () => {
        setBackPokemon(back => !back);
    }
  
    const image = pokemon ? {
        front: pokemon.sprites.front_default,
        frontShiny: pokemon.sprites.front_shiny,
        back: pokemon.sprites.back_default,
        backShiny: pokemon.sprites.back_shiny
        
    } : null;

  return(
    <div className="center">
        <div className="margin">        
            <div className="div">
                {data && (
                    <input className="input" 
                        placeholder="Search pokemon"                        
                        type="text"
                        onChange = {searchingPokemon}
                    />
                )}
                <button className="button" onClick={button}>Search</button>
            </div>

            <div className="div">
                {pokemon ?
                    <div>
                        <PokemonContainer                            
                            images = {image}
                            front = {!back}
                            shiny = {shiny}
                            onChangeType={changeShiny}
                            onFlip = {changeSwitch}                            
                        />
                    </div>
                    :
                    <div>
                        <PokemonContainer                            
                            images = {warningPokemon}                            
                        />
                    </div>                    
                }
            </div>

        </div>
    </div>
  );
};

export default ApiExample;