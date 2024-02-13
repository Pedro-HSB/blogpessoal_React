import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'
import { AuthContext } from '../../../contexts/AuthContext'
import { useContext } from 'react';
import { useWindowSize } from "@uidotdev/usehooks";

interface CardPostagemProps {
  postagem: Postagem;
}

function Browser({ size }) {
  return (
    <div
      data-testid="browser"
      className="browser"
      style={{ width: size.width / 4, height: size.height / 4 }}
    />
  );
}

function CardPostagens({ postagem }: CardPostagemProps) {

  let userTrue = ""

  const { usuario } = useContext(AuthContext)

  const user = usuario.usuario

  let post = postagem.usuario

  let userPost: string | null | undefined = null

  userPost = post?.usuario


  if (user === userPost) {
    userTrue = "true"
  }
  else {
    userTrue = ""
  }

  const size = useWindowSize();


  return (
    <div className='border-slate-900 border flex flex-col rounded overflow-hidden my-6 justify-between'>
      <div>
        <div className="flex w-full bg-gradient-to-b from-blue-400 to-sky-400 py-2 px-4 items-center gap-4">
          {size.width > 600 ? (<img src={postagem.usuario?.foto} className='h-12 rounded-full' alt="" />) : ("")}
          <h3 className='text-lg font-bold text-center uppercase '>{postagem.usuario?.nome}</h3>
        </div>
        <div className=' bg-gradient-to-t from-blue-400 to-sky-400'>
          <div className='p-4'>
            <h4 className='text-lg font-semibold uppercase'>{postagem.titulo}</h4>
            <p>{postagem.texto}</p>
            <p>Tema: {postagem.tema?.descricao}</p>
            <p>Data: {new Intl.DateTimeFormat(undefined, {
              dateStyle: 'full',
              timeStyle: 'medium',
            }).format(new Date(postagem.data))}</p>
          </div>
          <div className="flex ">
            {userTrue === "true" ? (<Link to={`/editarPostagem/${post.id}`} className='w-full text-white bg-blue-400 hover:bg-sky-700 flex items-center justify-center py-2'>
              <button>Editar</button>
            </Link>) : (<div className=''></div>)}
            {userTrue === "true" ? (<Link to={`/deletarPostagem/${post.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
              <button>Deletar</button>
            </Link>) : (<div className=''></div>)}
          </div>
        </div>
      </div>
    </div>
  )
}


export default CardPostagens