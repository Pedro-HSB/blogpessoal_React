import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect, ReactNode } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import Postagem from "../../../models/Postagem";
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";
import { toastAlert } from "../../../utils/ToastAlerts";
import CardPostagens from "../cardPostagens/CardPostagens";




function PostagensUsuario() {

    const navigate = useNavigate();

    let card: ReactNode

    const [postagens, setPostagens] = useState<Postagem[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarPostagens() {
        try {
            await buscar('/postagens', setPostagens, {
                headers: {
                    Authorization: token,
                },
            })

        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlert('O token expirou, favor logar novamente', "erro")
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlert('Você precisa estar logado', "")
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarPostagens()
    }, [postagens.length])

    {
        card = (
            <>
                {
                    postagens.map((postagem) => (
                        postagem.usuario?.id == usuario.id ?
                            (<CardPostagens key={postagem.id} postagem={postagem} />) :
                            "")
                    )
                }

            </>

        )
    }

    return (
        <>
            {postagens.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className='container mx-auto 
                grid grid-rows-2 md:grid-rows-2 lg:grid-rows-4 gap-4 p-32 hover: bg-grid-rows-6 w-2/4'
            >
                {card}
            </div>
        </>
    );
}

export default PostagensUsuario;