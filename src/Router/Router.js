import { BrowserRouter, Routes, Route } from "react-router-dom"
import PokedexPage from "../Pages/PokedexPage/PokedexPage"
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage"
import PokemonListPage from "../Pages/PokemonsListPage/PokemonListPage"
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage"


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/pokedex-page" element={<PokedexPage />} />
                <Route path="/pokemon-detail-page" element={<PokemonDetailPage />} />
                <Route path="/" element={<PokemonListPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router