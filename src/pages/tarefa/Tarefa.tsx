import { useEffect, useState } from "react"

function Tarefa() {
    const [completed, setCompleted] = useState(false);
    const [tarefa, setTarefa] = useState('');

    useEffect(() => {
        if (completed) {
            setTarefa('Parabéns! Você concluiu a tarefa!')
        }
    }, [completed])

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
        }}>
            <h2>Componente Tarefa</h2>
            <h3>{tarefa}</h3>
            <p>Conclua a tarefa</p>
            <button onClick={() => setCompleted(true)} >Concluir tarefa</button>
        </div>
    )
}

export default Tarefa