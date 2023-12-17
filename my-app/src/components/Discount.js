import { useState } from "react";

// Similar to Counter, to create a default, or base state
const resetProduct = {
    name: "Fruits",
    count: 0,
    price: 0
};

function Discount() {
    const [product, setProduct] = useState({
        name: "Fruits",
        count: 0,
        price: 0
    });

// Derived state method
const discount = product.count >= 5 ? 20 : 0;       // Because declared here, and this will re-render. Need not write it twice below.


// need to check for rounding off to 2 decimal place! toFixed only cuts the decimal places with no rounding. Math.round apparently rounds to the full integer.

    const handlerPlus = () => {
        setProduct((prevState) => {
            const updatedCount = prevState.count + 1;
            return {
                ...prevState,
                count: updatedCount,
                price: (updatedCount * 2.99 * (100 - discount) / 100).toFixed(2)
            }

        }); 
    };

    const handlerPlusFive = () => {
        setProduct((prevState) => {
            const updatedCount = prevState.count + 5;
            return {
                ...prevState,
                count: updatedCount,
                price: (updatedCount * 2.99 * (100 - discount) / 100).toFixed(2)
            }
        });
    };

    const handlerMinus = () => {
        setProduct((prevState) => {
            const updatedCount = prevState.count - 1 <= 0 ? 0 : prevState.count - 1;
            return {
                ...product,
                count: updatedCount,
                price: (updatedCount * 2.99 * (100 - discount) / 100).toFixed(2)
            }
        });
    };

    const handlerMinusFive = () => {
        setProduct((prevState) => {
            const updatedCount = prevState.count - 5 <= 0 ? 0 : prevState.count - 5;
            return {
                ...product,
                count: updatedCount,
                price: (updatedCount * 2.99 * (100 - discount) / 100).toFixed(2)
            }
        });
    };

    const handlerReset = () => {
        setProduct(resetProduct);
    }

    return (
        <>
            <h2>{product.name}</h2>
            <button onClick={handlerMinusFive}>-5</button>
            <button onClick={handlerMinus}>-1</button>
            <span>{product.count}</span>
            <button onClick={handlerPlus}>+1</button>
            <button onClick={handlerPlusFive}>+5</button>
            <div>
                <button onClick={handlerReset}>Reset</button>
            </div>
            <h2>{`$ ${product.price}`}</h2>
            <h3>{`Discount: ${discount}%`}</h3>
        </>
    );
}

export default Discount;


/* 

1. Reference for Positive Count only
https://stackoverflow.com/questions/48961319/how-to-stop-decrementing-the-value-if-it-is-less-than-zero-in-reactjs

 */