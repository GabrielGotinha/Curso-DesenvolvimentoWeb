import Proptypes from 'prop-types'

function Item ({marca, lancamento}) {
    return (
        <>
            <li>{marca} - {lancamento}</li>
        </>
    )
}

Item.prototype = {
    marca: Proptypes.string.isRequired,
};
Item.defaultProps = {
    marca: 'faltou a marca ',
};
export default Item