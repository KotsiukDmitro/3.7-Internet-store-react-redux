import { useEffect, useState } from "react";
import { listProducts } from "./listProducts";
import ProductItem from "./ProductItem";

function Home() {

    const [random, setRandom] = useState([])

    function randomProducts() {
        let arr = []
        for (let i = 0; (i < 5) && (i < listProducts.length); i++) {
            let n = Math.floor(Math.random() * (listProducts.length - i)) + i;
            let randomProduct = listProducts[n];
            listProducts[n] = listProducts[i];
            listProducts[i] = randomProduct;
            arr.push(randomProduct)

        }
        setRandom(arr)

    }
    useEffect(() => {
        randomProducts()
    }, [])
    return (<div>
        <div className="home">
            <h2 className="title">Rest, Relax, Unwind</h2>
            <p>Embarce your choices - we do</p>
            <button className="btn">Show now</button>
        </div>
        <div className="featured">
            <h3 className="titleFeatured">Featured</h3>
            <div className="products">

                {random.map(e => {
                    return (<ProductItem item={e} key={e.id} />)
                })}
            </div>
        </div>
    </div>
    )
}

export default Home




