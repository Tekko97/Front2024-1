
const ImparPar = ( props) => {

const ehpar = () => {

    return (props.numero % 2) == 0
}

    return(

<>
<span>

{props.numero} é um numero 

{(ehpar())? <b> PAR</b> : <b> IMPAR</b>}

{ (props.numero >= 18) &&

<b> Maior de idade

</b>

}


</span>



</>

    )

}

export default ImparPar