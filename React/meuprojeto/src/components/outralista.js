function Outralista ({itens}){
    return (
        <>
            <h3>Lista de coisas boas:</h3>
            {itens > 0 ? (
                itens.map((item, index) => (
                    <p key={index}>{item}</p>
                ))) : (
                    <p>Nao a lista</p>
                )
            }
        </>
    )
}

export default Outralista