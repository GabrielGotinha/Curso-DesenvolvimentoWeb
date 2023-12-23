import Item from './item'

function List (){
    return (
        <>
            <h1>Lista</h1>  
            <ul>
                <Item marca="Ferrari" lancamento={1241}/>
                <Item marca="Lambo" lancamento={2141}/>
                <Item marca={1}/>
                <Item/>
            </ul>
        </>
    )
}

export default List