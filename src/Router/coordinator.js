export const goToPokedexPage = (navigate) => {
    navigate("/pokedex-page")
}

export const goToPokemonDetailPage = (navigate,idPokemon) => {
    navigate(`/pokemon/${idPokemon}`)
}

export const goToPokemonsListPage = (navigate) => {
    navigate("/")
}


