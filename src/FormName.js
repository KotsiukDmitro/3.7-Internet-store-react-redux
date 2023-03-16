import { useState } from "react"
import InputMask from "react-input-mask"

function FormName(props) {

    const form = {
        firstName: '',
        lastName: '',
        mobile: ''
    }

    let [change, setChange] = useState(form)
    function inputChange(event) {
        const value = event.target.value
        const name = event.target.name
        setChange({ ...change, [name]: value })
    }

    const [error, setError] = useState({})
    function valid() {
        const errors = {}
        if (change.firstName === "") {
            errors.firstName = true
        }
        if (change.lastName === "") {
            errors.lastName = true
        }
        const PATTERN_TEL = /\+38\(\d{3}\)\d{3}-\d{2}-\d{2}/
        const validTel = PATTERN_TEL.test(change.mobile)
        if (!validTel) {
            errors.mobile = true
        }
        setError(errors)
        if (Object.keys(errors).length) {

            alert("Заполните необходимые поля")
            return false
        }
        return true
    }

    function nextForm(event) {
        event.preventDefault()
        valid() && props.next()
    }

    return (<>
        <form className="form">
            <label className="formLabel" >Name</label>
            <input className={error.firstName ? "formInput formInputError" : "formInput"} type="text" name="firstName" value={change.firstName} onChange={inputChange} ></input>
            {error.firstName &&
                <p className="textError">Это поле не может быть пустым</p>}

            <label className="formLabel" >LastName</label>
            <input className={error.lastName ? "formInput formInputError" : "formInput"} type="text" name="lastName" value={change.lastName} onChange={inputChange}></input>
            {error.lastName &&
                <p className="textError">Это поле не может быть пустым</p>}

            <label className="formLabel">Mobile</label>
            <InputMask className={error.mobile ? "formInput formInputError" : "formInput"} type="tel" name="mobile" value={change.mobile} onChange={inputChange} placeholder="+38(XXX)XXX-XX-XX" mask="+38(099)999-99-99"></InputMask>
            {error.mobile &&
                <p className="textError">Это поле не может быть пустым</p>}

            <div>
                <button className="formBtn cursor" onClick={nextForm}>Next >>> </button>
            </div>
        </form>
    </>)
}

export default FormName