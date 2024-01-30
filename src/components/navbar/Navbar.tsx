import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'



function Navbar() {

    let navigate = useNavigate()

    let NavbarComponent

    const { usuario, handleLogout } = useContext(AuthContext)

    const nome = usuario.nome

    function logout() {
        handleLogout()
        alert('Usuário deslogado com sucesso')
        navigate('/login')
    }

    function cadastro() {
        navigate('/cadastro')
    }

    if (usuario.token !== "") {
        NavbarComponent = (
        <div className='w-full bg-indigo-900 text-white flex justify-center py-4 p-1'>
            <div className="container flex justify-between text-lg">
                {nome.length === 0 ? (<Link to='/' className='text-2xl font-bold uppercase hover:underline'>Blog Pessoal</Link>) :
                    (<Link to='/home' className='text-2xl font-bold uppercase hover:underline'>Blog Pessoal</Link>)}
                <div className='flex gap-4'>
                    <Link to='/postagens' className='hover:underline'>Postagens</Link>
                    <Link to='/temas' className='hover:underline'>Temas</Link>
                    <Link to='/cadastrartema' className='hover:underline'>Cadastrar Tema</Link>
                    <Link to='/perfil' className='hover:underline'>Perfil</Link>
                    <Link to='' onClick={logout} className='hover:underline'>Sair</Link>

                </div>
            </div>
        </div>)
    }


    return (
        <>
            {NavbarComponent}
        </>
    )
}

export default Navbar