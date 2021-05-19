export const viewsEnum = {
  LANDING: 1,
  EXCERCISES: 2,
}

export const excercisesEnum = {
  COUNTER: 1,
  TASK_LIST: 2,
  POKEMON: 3,
}

export const  searchPokemon = async (pokemon) => {
  try{
      let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
  }catch(err){

  }
}
