/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Importamos as dependências necessárias
import React, { useEffect, useState } from 'react';

const card = (pokemon) => {
  const cardName = `corpo ${pokemon.types[0].type.name}`
  const types = `type ${pokemon.types[0].type.name}`

  return(
    <div className={cardName}>
      
      <div className='imagem'>
        <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} /> 
      </div>

      <div className='nome_pokemon'>
        <h2>{pokemon.name}</h2>  
      </div>
      
      <div className={types}>
        <h2>{pokemon.types[0].type.name}</h2>
      </div>
       
    </div>
  )
}

// Primeiro, vamos criar o componente PokemonCard
// Este componente recebe um pokemon como prop e exibe o nome e a imagem do pokemon
export default function PokemonCard({ pokemon }) {
  
  return (
    card(pokemon)
  );
}
