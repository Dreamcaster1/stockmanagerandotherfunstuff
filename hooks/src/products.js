function Products ({products, func2}) {
console.log("products render")
    return<>
    <button onClick={() => func2()}>Click me</button>
    <ul>
        {products.map(item => {
            return<li>{item}</li>
        })}
    </ul>
    </>
}
export default Products