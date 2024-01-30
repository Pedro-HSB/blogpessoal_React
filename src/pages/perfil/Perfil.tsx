import React, { useContext, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext';
import { ToastAlert } from '../../utils/ToastAlert';

const Perfil = () => {

    let navigate = useNavigate();

    const {usuario} = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === '') {
            ToastAlert('Você precisa estar logado!', "info")
            navigate('/login')
        }
    }, [usuario.token])

  return (
    <div className='container mx-auto mt-4 rounded-2x1 overflow-hidden'>
          <img src="https://i.imgur.com/ZZFAmzo.jpg" alt="Capa Do Perfil" className='w-full h-72 object-cover border-b-8 border-white'/>
        <img src={usuario.foto} alt={`Foto De Perfil Do ${usuario.nome}`} className='w-56 rounded-full mx-auto mt-[-8rem]'/>
        
        <div className='relative mt-[-6rem] h-72 flex flex-col bg-sky-500 text-white text-2x1 items-center justify-center'>
            <p>Nome: {usuario.nome}</p>
            <p>Email: {usuario.usuario}</p>
        </div>
    </div>
  )
}

export default Perfil