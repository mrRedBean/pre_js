import { useEffect, useState } from "react"
import "./App.css"
function App () {
    const [count,setCount] = useState([
        {id:1,name:"A",bought:false},
        {id:2,name:"B",bought:false},
        {id:3,name:"C",bought:false},
        {id:4,name:"D",bought:false},
        {id:5,name:"E",bought:false},
        {id:6,name:"F",bought:false},
        {id:7,name:"G",bought:false},
        {id:8,name:"H",bought:false},
        {id:9,name:"I",bought:false},
        {id:10,name:"J",bought:false},
        {id:11,name:"K",bought:false},
        {id:12,name:"L",bought:false},
        {id:13,name:"M",bought:false},
        {id:14,name:"N",bought:false},
        {id:15,name:"O",bought:false},
        {id:16,name:"P",bought:false},
    ])

    
    const handleClick = (id) => {
        setCount((prev) =>
            prev.map((product) =>
                product.id === id ?
        {...product, bought: !product.bought} : product
    )
)
}
useEffect (() => {
    const boughtTrue = count.filter(product => product.bought).length

    if (boughtTrue !== 0 && boughtTrue % 3 === 0) {
        console.log(`現在の購入数は${boughtTrue}です！`)
    }
},[count])
    return (
        <>
        {
            count.map((product)=> (
                <div key={product.id}>
                    <p>{product.name}</p>
                    <button type="button" onClick={() => handleClick(product.id)}>
                        <p>{product.bought ? "購入取り消し":"この商品をカートに入れる"}</p>
                    </button>
                </div>
            ))
        }
        </>
    )
}
 
export default App;