import React, { ReactNode, useContext } from 'react'
import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'
import { AuthContext } from '../../../contexts/AuthContext'

interface CardTemaProps {
  tema: Tema
}

function CardTemas({ tema }: CardTemaProps) {

  let btns: ReactNode

  const { usuario } = useContext(AuthContext)


  if (usuario.usuario == "root@root.com") {
    btns = (
      <>
        <Link to={`/editarTema/${tema.id}`} className='w-full text-slate-100 bg-blue-400 hover:bg-sky-700 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarTema/${tema.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </>
    )
  }

  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-gradient-to-b from-blue-400 to-sky-400 text-white font-bold text-2xl'>Tema</header>
      <p className='p-8 text-3xl bg-gradient-to-t from-blue-400 to-sky-400 h-full'>{tema.descricao}</p>
      <div className="flex">
        {btns}
      </div>
    </div>
  )
}

export default CardTemas