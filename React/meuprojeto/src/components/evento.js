import Button from "./Button"

function evento(){
    function meuEvento(){
        console.log("Fui ativado")
    }

    return (
        <div>
        <p>clique parar disparar um evento</p>
        <Button event={meuEvento} text="Primeiro Evento" />
        
        </div>
    )
}

export default evento