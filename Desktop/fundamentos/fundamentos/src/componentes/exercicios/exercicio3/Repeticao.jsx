
const Repeticao = ()=>{

    var alunos = [
        "Zezin",
        "Gustin",
        "Pedrin",
        "Jefin",
        "Marquin"
    ]

    var alunosNotas=[
        {"nome":"zezin", "nota": 7},
        {"nome":"gustin", "nota": 4},
        {"nome":"pedrin", "nota": 1},
        {"nome":"jefin", "nota": 10}
    ]

    return(
        <>
            <h2>Listagem</h2>
            <ul>
                {/* {alunos.map( (n)=>{
                   return <li>{n}</li>
                })} */}
                {alunosNotas.map( (n)=>{
                    return <li>{n.nome} - {n.nota}</li>
                })}
            </ul>
        </>
    )
}

export default Repeticao
