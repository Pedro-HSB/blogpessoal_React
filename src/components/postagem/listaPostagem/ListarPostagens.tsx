import React, { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Postagem from '../../../models/Postagem';
import { buscar } from '../../../services/Service';
import CardPostagens from '../cardPostagem/CardPostagem';
import { ToastAlert } from '../../../utils/ToastAlert';

function ListaPostagens() {
  const [Postagens, setPostagens] = useState<Postagem[]>([]);

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPostagens() {
    try {
      await buscar('/postagens', setPostagens, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        ToastAlert('O token expirou, favor logar novamente', "info")
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      ToastAlert('Você precisa estar logado', "info")
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    buscarPostagens();
  }, [Postagens.length]);
  return (
    <>
      {Postagens.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="container mx-auto my-4 grid grid-cols-4 md:grid-cols-1 lg:grid-cols-4 gap-4  ">
        <div></div>
        <div className='col-span-2'>
          {Postagens.map((Postagem) => (
            <>
              <CardPostagens key={Postagem.id} postagem={Postagem} />
            </>
          ))}
        </div>
        <div></div>
      </div>
    </>
  );
}

export default ListaPostagens;