import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'



function Navbar() {
    
    let navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    let nome = usuario.nome

    function logout() {
        handleLogout()
        alert('Usuário deslogado com sucesso')
        navigate('/login')
    }

    function cadastro() {
        navigate('/cadastro')
    }


    return (
        <>
            <div className='w-full bg-indigo-900 text-white flex justify-center py-4 p-1'>
                <div className="container flex justify-between text-lg">
                    {nome.length === 0 ? (<Link to='/' className='text-2xl font-bold uppercase hover:underline'>Blog Pessoal</Link>) : (<Link to='/home' className='text-2xl font-bold uppercase hover:underline'>Blog Pessoal</Link>)}
                    <div className='flex gap-4'>
                        <div className='hover:underline'>{nome.length === 0 ? '' : 'Postagens'}</div>
                        <Link to='/temas' className='hover:underline'>{nome.length === 0 ? '' : 'Temas'}</Link>
                        <Link to='/cadastrartema' className='hover:underline'>{nome.length === 0 ? '' : 'Cadastrar Tema'}</Link>
                        <div className='hover:underline'>{nome.length === 0 ? '' : 'Perfil'}</div>
                        {nome.length === 0 ? (<Link to='/cadastro' onClick={cadastro} className='hover:underline'>Cadastrar</Link>) 
                            : (<Link to='' onClick={logout} className='hover:underline'>Sair</Link>)}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar