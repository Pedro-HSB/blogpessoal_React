import ListaPostagens from '../../components/postagem/listaPostagem/ListarPostagens';
import ModalPostam from '../../components/postagem/modalPostagem/ModalPostagem';
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear',
        autoplay: true
    };

    return (
        <>
            <div className="h-3/6 grid grid-cols-3 content-start bg-gradient-to-t from-blue-400 to-sky-400">
                <div className=''></div>
                <div className='w-full'>
                    <Slider {...settings} className="">
                        <div className=''>
                            <img
                                src="src/assets/img/carousel1.svg"
                                alt="Imagem da Página Home"
                                className="  "
                            />
                        </div>
                        <div className=''>
                            <img
                                src="src/assets/img/carousel2.svg"
                                alt="Imagem da Página Home"
                                className="  "
                            />
                        </div>
                        <div className=''>
                            <img
                                src="src/assets/img/carousel3.svg"
                                alt="Imagem da Página Home"
                                className="  "
                            />
                        </div>
                        <div className=''>
                            <img
                                src="src/assets/img/carousel4.svg"
                                alt="Imagem da Página Home"
                                className="  "
                            />
                        </div>
                    </Slider>
                </div>
                <div className='w-2'></div>

            </div>

            <div className="bg-gradient-to-b from-blue-400 to-sky-400">
                <div id="container" className="flex justify-center ">
                    <div id="subcontainer" className=" container  grid  grid-cols-2  text-sky-900">
                        <div id="texto" className="flex flex-col gap-4 items-center justify-center  py-4 ">
                            <h2 className=" text-5xl font-bold ">Seja Bem Vinde!</h2>
                            <p className="text-xl">Expresse aqui os seus pensamentos e opiniões</p>
                            <div className="flex justify-around gap-4">
                                <ModalPostam />
                            </div>
                        </div>

                        <div id="imagem" className="flex justify-center">
                            <img
                                src="src/assets/img/bg_home.svg"
                                alt="Imagem da Página Home"
                                className="w-2/3"
                            />
                        </div>
                    </div>
                </div>
                <div className='pt-10'>
                    <div className=''>
                        <ListaPostagens />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home