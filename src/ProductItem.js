import { useDispatch, useSelector } from "react-redux"
import { addProduct } from "./store/productSlice"
import { useNavigate } from "react-router-dom"


function ProductItem(props) {
    const navigate = useNavigate()
    function openProduct() {
        navigate(`/products/${props.item.id}`)
    }

    const ListProduct = useSelector(state => state.products.products)
    const dispatch = useDispatch()
    const handleAction = (id) => {
        dispatch(addProduct({ id }))
    }
    const elem = ListProduct.find(e => e.id === props.item.id)
    return (

        < div className="item" >
            <img className="foto" src={props.item.image} onClick={openProduct} />
            <p className="cursor">{props.item.name}</p>
            <button className={elem ? 'btnBuy' : 'cursor'} disabled={elem} onClick={() => handleAction(props.item.id)}>{elem ? 'Товар в корзине' : 'Купить'}</button>
            <div className="price">${props.item.price}</div>

        </div>)
}
export default ProductItem