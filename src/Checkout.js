import { useState } from "react"
import FormName from "./FormName"
import FormPayment from "./FormPayment"
import FormTreatment from "./FormTreatment"


function Checkout() {

    const [step, setStep] = useState(1)
    function next() {
        setStep(step + 1)

    }

    return (<>
        {step === 1 &&
            <FormName next={next} />}
        {step === 2 &&
            <FormPayment next={next} />}
        {step === 3 &&
            <FormTreatment />}

    </>)
}

export default Checkout