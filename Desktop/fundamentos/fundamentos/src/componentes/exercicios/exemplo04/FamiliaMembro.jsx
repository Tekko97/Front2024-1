
const FamiliaMembro = ( props )=>{

    console.log(props)
    return (
        <>
            <span>{props.nome} 
            <b>{props.sobrenome}</b></span>
            <br />
        </>
    )
}

export default FamiliaMembro