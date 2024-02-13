import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { ReactNode, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {
    let FooterComponent: ReactNode

    const { usuario } = useContext(AuthContext)


    if (usuario.token !== "") {
        FooterComponent = (
            <div className="flex justify-center bg-gradient-to-b from-blue-400 to-sky-400 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>Blog pessoal Pedro | Copyright: </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href=""><LinkedinLogo size={48} weight='bold' /></a>
                        <a href=""><InstagramLogo size={48} weight='bold' /></a>
                        <a href=""><FacebookLogo size={48} weight='bold' /></a>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            {FooterComponent}
        </>
    )
}

export default Footer