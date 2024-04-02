import "./Aluno.css"

const Aluno = ( props )=>{

    console.log(props)

    const {nome, nota} = props

    const status = ()=>{
        if (nota >=6){
            return 'Aprovado'
        }else{
            return 'Reprovado'
        }  
    }

    return(
       <table className="table_aluno">
        <tr>
            <td>Matricula</td>
            <td>Nome</td>
            <td>Nota</td>
            <td>Status</td>
        </tr>
        <tr>
            <td>{ props.matricula}</td>
            <td>{ nome}</td>
            <td>{ nota}</td>
            <td>
                {/* { (nota >=6)? 'Aprovado' : 'Reprovado'  } */}
                { status()  }
            </td>
        </tr>
       </table>

    )
}

export default Aluno