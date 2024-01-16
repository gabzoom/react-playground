import { useState } from "react";

interface homeProps {
    titulo: string;
    texto: string;
}

function Home(props: homeProps) {

    const [isLogged, setIsLogged] = useState(false);

    return (
        <>
            {
                isLogged ? (
                    <div style={{
                        textAlign: "center",
                        width: "500px",
                        margin: "auto",
                        backgroundColor: "darkorchid",
                        border: "solid 3px",
                        fontFamily: "Arial",
                        fontWeight: "700",
                        color: "white",
                        padding: "10px",
                        marginBottom: "20px"

                    }} >
                        <h2>{props.titulo}</h2>
                        <p>{props.texto}</p>
                    </div >
                ) : (
                    <div style={{
                        textAlign: "center",
                        width: "500px",
                        margin: "auto",
                        backgroundColor: "darkorchid",
                        border: "solid 3px",
                        fontFamily: "Arial",
                        fontWeight: "700",
                        color: "white",
                        marginBottom: "20px",
                        padding: "10px",
                    }} >
                        <h2>Login</h2>
                        <button onClick={() => { setIsLogged(true) }}>Entrar</button>
                    </div>
                )
            }
        </>
    )
}

export default Home