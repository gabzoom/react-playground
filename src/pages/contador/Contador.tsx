import { useState } from "react"

function Contador() {
    const [valor, setValor] = useState(0);

    function handleClick() {
        setValor(valor + 1);
    }
    return (
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
        }}>
            <h2>Componente contador</h2>
            <p>O valor atual é: {valor}</p>
            <button onClick={handleClick}>Adicionar +1</button>
        </div>
    )
}

export default Contador