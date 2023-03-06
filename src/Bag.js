import React, { useMemo, useEffect } from "react";
import { listProducts } from "./listProducts";
import { removeProduct, increment, decrement, removeAllProduct } from "./store/productSlice"
import { useDispatch, useSelector } from "react-redux";

function Bag(props) {

    const ListProduct = useSelector(state => state.products.products)

    const dispatch = useDispatch()
    const remove = (id) => {
        dispatch(removeProduct({ id }))
    }

    const plus = (id) => {
        dispatch(increment({ id }))
    }
    const minus = (id) => {
        dispatch(decrement({ id }))
    }
    const removeAll = (event) => {
        event.preventDefault()
        if (window.confirm('Очистить корзину?')) { dispatch(removeAllProduct()) }
    }

    const sum = useMemo(
        () => ListProduct.reduce((prev, curr) => {
            const elem = listProducts.find(item => item.id == curr.id)
            const totalPrice = elem.price * curr.count * 100
            return (prev + totalPrice)
        }, 0) / 100, [ListProduct])

    useEffect(() => {
        localStorage.setItem('Bag', JSON.stringify(ListProduct));
    }, [ListProduct]);

    return (<div>
        <div className={props.openBag ? "backDrop" : ""}></div>
        <div className={props.openBag ? "bag active" : "bag"}>
            <i className="fa-solid fa-xmark close " onClick={props.openClose}></i>
            <h2 className="titleBag">Your Bag</h2>
            {ListProduct.map(elem => {
                const e = listProducts.find(item => item.id === elem.id)
                return (
                    <div className="productsInBag" key={e.id}>
                        <div className="prod">
                            <img className="foto" src={e.image} alt="" />
                            <div className="productInBag">
                                <p>{e.name}</p>
                                <div className="price">${e.price}</div>
                                <button className="price btnRemove" onClick={() => remove(e.id)}>remove</button>
                            </div>
                        </div>

                        <div className="amountInBag" >
                            <i className="fa-solid fa-chevron-up" onClick={() => plus(elem.id)}></i>
                            <span className="amount">{elem.count}</span>
                            <i className="fa-solid fa-chevron-down" onClick={() => elem.count > 1 && minus(elem.id)}></i>
                        </div>
                    </div>)
            })
            }

            <div className="refAllProducts">
                <a href="" onClick={removeAll} >Remove All</a>
            </div>
            <p className="titleBag total">Total: $<span>{sum}</span></p>
            <div className="refAllProducts">
                <a className="allProducts checkout" href="">checkout</a>
            </div>
        </div>
    </div >
    )
}
export default Bag