import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect, ChangeEvent } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";
import { toastAlert } from "../../../utils/ToastAlerts";
import CardTemas from "../cardTemas/CardTemas";
import Tema from '../../../models/Tema';


function BuscarTemaDescricao() {

    const [search, setSearch] = useState("")

    const navigate = useNavigate();

    const [temas, setTemas] = useState<Tema[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function BuscarTemaDescricao() {
        try {
            await buscar(`/temas/descricao/${search}`, setTemas, {
                headers: { Authorization: token },
            })

        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlert("O token expirou. Entre novamente", "erro")
                //handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlert("Você precisa estar autenticado.", "info")
            navigate('/');
        }
    }, [token])

    return (
        <>
            <div className='py-20'>
                <div className='grid grid-cols-4'>
                    <div></div>
                    <div className='col-span-2'>
                        <label htmlFor="default-search" className="mb-2  text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative ">
                            <div className="absolute inset-y-0  start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input
                                type="search"
                                className="block w-full p-4 ps-10 text-lg text-blue-400 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500
                                  "
                                placeholder="Buscar temas"
                                required
                                onChange={event => setSearch(event.target.value)}
                            />
                            <button onClick={BuscarTemaDescricao} type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-400
                              hover:bg-blue-600 font-medium rounded-lg text-sm px-4
                               py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </div>
                    <div></div>
                </div>

                <div className='container mx-auto grid grid-rows-1 md:grid-rows-2 gap-4 lg:grid-rows-4 p-20 hover: bg-grid-rows-6 w-2/4'>
                    {temas.map((tema) => (
                        <>
                            <CardTemas key={tema.id} tema={tema} />
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BuscarTemaDescricao