import { Route, Routes } from "react-router-dom"

import { Home } from '../Home/Home'
import {Salud} from "../Salud/Salud"

export function Rutas() {
    return (
        <>
           

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/salud" element={<Salud />} />
            </Routes>

        </>

    )
}