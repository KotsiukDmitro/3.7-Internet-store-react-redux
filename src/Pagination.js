import React from 'react'

function Pagination({ productsOnPage, totalProduct, paginate, currentPage }) {

    const pageNumber = []

    for (let i = 1; i <= (totalProduct / productsOnPage); i++)
        pageNumber.push(i)

    return (
        <div>
            <ul className='pagination'>
                {pageNumber.map(number => (
                    <li className="page" key={number}>
                        <button className={currentPage === number ? "page-red" : "page-active cursor"} onClick={(event) => event.preventDefault(paginate(number))} disabled={currentPage === number} >{number}</button>

                    </li>
                ))
                }
            </ul>
        </div >
    )
}
export default Pagination