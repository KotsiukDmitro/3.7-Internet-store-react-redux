import { listProducts, stores } from "./listProducts";
import { useEffect, useMemo, useState } from "react";
import { countBy, values, sum, debounce, reduce } from 'lodash'
import ProductItem from "./ProductItem";
import Pagination from "./Pagination";

function Products() {
    const [range, setRange] = useState(100)
    function valueRange(event) {
        setRange(event.target.value)
    }

    const [shop, setShop] = useState('all')
    function select(event) {
        setShop(event.target.value)
    }

    const [inputSearch, setInputSearch] = useState('')
    function searchProduct(event) {
        setInputSearch(event.target.value)
    }

    const [filteredProductList, setFilteredProductList] = useState([])
    const [filterNumberStore, setFilterNumberStore] = useState('')

    function render(shop, range, inputSearch) {
        const filterPrice = listProducts.filter(e => {
            return (e.price <= range && (e.name.toLowerCase().includes(inputSearch.toLowerCase()) || inputSearch === ''))
        })
        const filterProductStore = filterPrice.filter(e => {
            return (e.store === shop || shop === 'all')
        })
        setFilteredProductList(filterProductStore)

        const numberStore = countBy(filterPrice, 'store')
        setFilterNumberStore(numberStore)
    }
    const debounced = useMemo(
        () => debounce(render, 500), [])


    useEffect(() => {
        debounced(shop, range, inputSearch)
    }, [shop, range, inputSearch])

    // пагинация
    const [currentPage, setCurrentPage] = useState(1)
    const [productsOnPage] = useState(4)

    const indexLastProduct = currentPage * productsOnPage
    const indexFirstProduct = indexLastProduct - productsOnPage
    const currentList = filteredProductList.slice(indexFirstProduct, indexLastProduct)
    function paginate(pageNumber) {
        setCurrentPage(pageNumber)
    }

    return (<div>
        <div className="about">Home / Products</div>
        <div className="products">
            <div className="company">
                <input className="search" type="text" placeholder="search" value={inputSearch} onChange={searchProduct} />
                <p className="companyName">Company</p>
                <p className="store"><label className={"all" !== shop ? "cursor" : "cursor checked"}><input type="radio" name='store' value="all" onChange={select} checked={'all' === shop} />all (<span>{sum(values(filterNumberStore))}</span>)
                    {/* альтернативный вариант
                        (<span>{reduce(filterNumberStore, function (a, b) { return (a + b) })}</span>) */}
                </label>
                </p>
                <div>
                    {stores.map((elem, index) => {
                        return (
                            <p className="store" key={elem + index} >

                                <label className={elem !== shop ? "cursor" : "cursor checked"}>
                                    <input type="radio" name='store' value={elem} onChange={select} checked={elem === shop} />
                                    {elem} (<span>{filterNumberStore[elem] || 0}</span>)
                                </label>
                            </p>)
                    })}

                </div>
                <p className="price">Price</p>
                <input className="cursor" type="range" name="price" max="100" value={range} onChange={valueRange} list="values" />
                <datalist id="values">
                    <option value='0'></option>
                    <option value='25'></option>
                    <option value='50'></option>
                    <option value='75'></option>
                    <option value='100'></option>
                </datalist>
                <p>
                    <output className="price">Value:  <span>${range}</span></output>
                </p>
            </div>

            <div className="products-List">
                {currentList.map(e => {
                    return (
                        <ProductItem item={e} key={e.id} />
                    )
                })
                }
            </div>
        </div>
        <Pagination
            productsOnPage={productsOnPage}
            totalProduct={filteredProductList.length}
            paginate={paginate}
            currentPage={currentPage}
        />

    </div>)
}
export default Products
