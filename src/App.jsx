import { useEffect, useState } from "react"
import "./App.css"

function App() {

    const [count, setCount] = useState([
        { id: 1, name: "商品A", cart: false },
        { id: 2, name: "商品B", cart: false },
        { id: 3, name: "商品C", cart: false },
        { id: 4, name: "商品D", cart: false },
        { id: 5, name: "商品E", cart: false },
        { id: 6, name: "商品F", cart: false },
    ])

    const handleClick = (id) => 
        setCount((prev) => 
            prev.map((product) => 
                product.id === id ? {
                    ...product, cart: !product.cart
                } : product
            )
        )
// useEffectで何がしたい＝count検証によるコンソール通信
// cartを数にしないといけない
    useEffect(() => {
        const cartTrue = count.filter(product => product.cart).length

        if (cartTrue !== 0 && cartTrue % 3 ===0 ) {
            console.log(`現在のカートの数は${cartTrue}です！`)
        }
    },[count])

    return (
        <>
            {count.map((product) => (
                <div key={product.id}>
                    <p>{product.name}</p>
                    <button type="button" onClick={() => handleClick(product.id)}>
                        {product.cart ? "カートに削除":"カートから追加"}
                    </button>
                </div>
            )
        )}
        </>
    )
};

export default App;