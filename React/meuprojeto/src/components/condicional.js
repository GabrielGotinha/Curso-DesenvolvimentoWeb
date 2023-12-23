import { useState } from "react"

function Condicional (){

    const [email, setEmail] = useState()
    const [useremail, setUserEmail] = useState()

    function enviarEmail (e){
        e.preventDefault()
        setUserEmail(email)
    }

    return (
        <div>
            <h2>Cadastre seu email</h2>
            <form>
                <input type="email" 
                placeholder="Digite seu email" 
                onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" onClick={enviarEmail}> Enviar email</button>
            </form>
            {useremail  && (
                <p>Foi prenchido
                    
                </p>
            )

            }
        </div>
    )
}

export default Condicional