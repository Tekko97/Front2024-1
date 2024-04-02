import { cloneElement } from "react"

const Familia = ( props )=>{

    return (
        <>
            <h2>Familia {props.sobrenome}</h2>
            
            {/* {props.children} */}

            { props.children.map( fm =>{
                // return cloneElement(fm, {"sobrenome":props.sobrenome}
                return cloneElement(fm, {...props} ) 
            }) }

        </>
    )
}

export default Familia