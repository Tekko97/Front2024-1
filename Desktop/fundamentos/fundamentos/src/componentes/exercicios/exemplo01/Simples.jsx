import "./Simples.css"

const  Simples = ()=>{

    var titulo = "Componente Simples"

    const geraTexto = ()=> {
        return "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium recusandae nihil voluptatem maiores? Perferendis ratione explicabo culpa quisquam ipsum architecto tempora, consequatur repellat dicta esse error delectus. Alias, architecto eos?"
    }

return(
    <>
 <h1 className="titulo_simples">{titulo}</h1>
 <p>
     {geraTexto()}

    
 </p>
</>
)
}

export default Simples