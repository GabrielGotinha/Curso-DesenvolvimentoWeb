import {useState} from 'react';

function Form(){
    function cadastro(e){
        e.preventDefault()
        console.log(`Usario ${name} foi cadastrado com a senha: ${password}`)
    }
    

    const [name, setName] = useState()
    const [password, setPassword] = useState()
    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastro}>
                <div>
                    <input type="text" 
                    id='name'
                    name='name'                   
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Digite o seu nome"/>
                </div>
                <label htmlFor="password">senha</label>
                <div>
                    <input type="password" 
                    id="password" 
                    name="password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="digite sua senha"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form