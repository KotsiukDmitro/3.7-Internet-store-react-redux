
import { listProducts } from "./listProducts"
import { useSelector } from "react-redux";
import { useMemo } from "react"

function FormPayment(props) {

    const ListProduct = useSelector(state => state.products.products)
    const sum = useMemo(
        () => ListProduct.reduce((prev, curr) => {
            const elem = listProducts.find(item => item.id == curr.id)
            const totalPrice = elem.price * curr.count * 100
            return (prev + totalPrice)
        }, 0) / 100, [ListProduct])

    function nextForm(event) {
        event.preventDefault()
        props.next()
    }

    return (<>
        <div className="form">
            <table >
                <tr>
                    <td className="titleCategory tr">product:</td>
                    <td className="titleCategory tr">price:</td>
                    <td className="titleCategory td tr">quantity:</td>
                </tr>

                {ListProduct.map(elem => {
                    const e = listProducts.find(item => item.id === elem.id)
                    return (

                        <tr className="titleCategory">
                            <td className="name-td">{e.name}</td>
                            <td className="name-td">{e.price}</td>
                            <td className="td name-td">{elem.count}</td>
                        </tr>
                    )
                })}
            </table>

            <label className="formLabel"> Delivery method</label>
            <select className="formInput">
                <option>Самовывоз</option>
                <option>Новая почта</option>
                <option>УкрПочта</option>
            </select>
            <label className="formLabel"> Payment method</label>
            <select className="formInput">
                <option>Полная предоплата</option>
                <option>Оплата при получении</option>
                <option>Частичная предоплата</option>
            </select>
            <h3 className="formLabel">Total payable: <span>$ {sum}</span></h3>
            <button className="btnValid cursor" onClick={nextForm}>Valid purchase</button>
        </div>

    </>)
}

export default FormPayment