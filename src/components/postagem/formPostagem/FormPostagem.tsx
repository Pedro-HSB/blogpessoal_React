import { useState, useContext, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Postagem from "../../../models/Postagem";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import Tema from "../../../models/Tema";


function FormPostagem() {

    const navigate = useNavigate();

    const [temas, setTemas] = useState<Tema[]>([])

    const [tema, setTema] = useState<Tema>({
        id:0,
        descricao:"",
    })

    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: "",
        texto: "",
        data: "",
        tema: null,
        usuario: null,
    })

    async function buscarPostagemPorId(id: string) {
        try {
            await buscar(`/postagens/${id}`, setPostagem, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('O token Expirou!')
                handleLogout()
            }
        }
    }


    async function buscarTemaPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('O token Expirou!')
                handleLogout()
            }
        }
    }


    async function buscarTemas() {
        try {
            await buscar(`/temas`, setTemas, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('O token Expirou!')
                handleLogout()
            }
        }
    }

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        buscarTemas();
        if (id !== undefined) {
            buscarPostagemPorId(id);
            console.log(tema);

        }
    }, [id]);

    useEffect(() => {
        setPostagem({
            ...postagem,
            tema:tema,
        })
    },[tema])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema:tema,
            usuario:usuario,
        })
    }

    function retornar() {
        navigate("/postagens")
    }

    async function gerarNovaPostagem(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/postagens`, postagem, setPostagem, {
                    headers: { 'Authorization': token }
                })
                alert('Postagem foi atualizado com sucesso!')
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    alert('O Token Expirou!')
                    handleLogout();
                } else {
                    alert('Erro ao atualizar o Postagem.')
                }

            }
        } else {
            try {
                await cadastrar(`/postagens`, postagem, setPostagem, {
                    headers: { 'Authorization': token }
                })
                alert('Postagem foi cadastrado com sucesso!')
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    alert('O Token Expirou!')
                    handleLogout();
                } else {
                    alert('Erro ao cadastrar o Postagem.')
                }

            }
        }

        setIsLoading(false)
        retornar()
    }

    const carregandoTema = tema.descricao === ""

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Postagem' : 'Editar Postagem'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaPostagem}>

                
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">titulo da Postagem</label>
                    <input
                        type="text"
                        placeholder="O titulo Da Sua Postagem"
                        name='titulo'
                        className="border-2 border-slate-700 rounded p-2"
                        value={postagem.titulo}
                        required
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Texto da Postagem</label>
                    <input
                        type="text"
                        placeholder="O Conteudo Da Sua Postagem"
                        name='texto'
                        className="border-2 border-slate-700 rounded p-2"
                        value={postagem.texto}
                        required
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <p>Tema da postagem</p>
                    <select name="tema" id="tema" className='border p-2 border-slate-800 rounded' onChange={(e) => buscarTemaPorId(e.currentTarget.value)}>
                        <option value="" selected disabled>Selecione um tema</option>
                        {temas.map((tema) => (
                            <>
                                <option value={tema.id} >{tema.descricao}</option>
                            </>
                        ))}
                    </select>
                </div>
                <button
                disabled={carregandoTema}
                    className="rounded disabled:bg-slate-200 text-slate-100 bg-indigo-400 
                               hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">

                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{carregandoTema ? <span>Carregando</span> : id !== undefined ? 'Editar' : 'Cadastrar'}</span>

                    }

                </button>
            </form>
        </div>
    );
}

export default FormPostagem;