import { useEffect, useState } from "react";
import React, { useParams, useNavigate } from "react-router-dom"
import { listProducts } from "./listProducts";
import { addProduct } from "./store/productSlice"
import { useDispatch, useSelector } from "react-redux"

function ProductInformation() {

    const ListProduct = useSelector(state => state.products.products)
    const dispatch = useDispatch()
    const handleAction = (id) => {
        dispatch(addProduct({ id }))
    }

    const { id } = useParams()
    const navigate = useNavigate()
    function nav() {
        navigate(-1)
    }
    console.log(navigate);

    const [item, setItem] = useState({})

    useEffect(() => {
        const product = listProducts.find(e => e.id == id)
        setItem(product)
    }, [])

    const element = ListProduct.find(e => e.id === item.id)
    return (item &&
        <div className="prod aboutProd">
            <img className="foto-about" src={item.image} alt="" />
            <div className="productInBag">
                <p>{item.name}</p>
                <div className="price">Price: ${item.price}</div>
                <p>Описание товара:</p>
                <div className="historyText">{item.about}</div>
                <button className={element ? 'btnBuy' : 'cursor'} disabled={element} onClick={() => handleAction(item.id)}>{element ? 'Товар в корзине' : 'Купить'}</button>
                <button onClick={nav}>Back</button>
            </div>
        </div>
    )
}
export default ProductInformation