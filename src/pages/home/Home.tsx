function Home() {
    return (
        <>
            <main style={{
                backgroundColor:"#57503B"
            }}>
                <section>
                    <article>
                        <div id="container" style={{
                            width: "100vw",
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <div id="subcontainer">
                                <div id="texto" style={{
                                    width:"80vw",
                                    display: "flex",
                                    justifyContent: "center",
                                    flexDirection:"column",
                                    alignItems:"center"
                                }}>
                                    <h2>Seja Bem Vinde</h2>
                                    <p>Expresse aqui os seus pensamentos e opinioes</p>
                                </div>
                                <div id="imagem" style={{
                                    width: "80vw",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center"
                                }}>
                                    <img src="https://i.imgur.com/VpwApCU.png" width="400px" alt="" />
                                </div>
                                <div id="form" style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    backgroundColor:"#E8D7CA",
                                    borderRadius:"10px",
                                    padding:"10px"
                                }}>
                                    <form action="">
                                        <label htmlFor="">email</label>
                                        <input type="text" />
                                        <label htmlFor="">senha</label>
                                        <input type="text" />
                                        <input type="submit" value="enviar" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
        </>
    )
}

export default Home