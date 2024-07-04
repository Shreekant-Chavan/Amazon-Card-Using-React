import Product from "./Product.jsx"

function ProductTab() {
    let styles = {
        display : "flex",
        flexWrap : "wrap",
        justifyContent : "center",
        alignItems : "center",
        padding : "10px",
        margin : "20px"
    }

    return(
        <div style={styles}>
        <Product title="Muscle-Blaze Whey Protine" idx={0} />
        <Product title="Muscle-Blaze Creatine Monohydrate" idx={1} />
        <Product title="Muscle-Blaze Pre-Workout" idx={2} />
        <Product title="Muscle-Blaze Multi-Vitamin" idx={3} />
        </div>
    );
}

export default ProductTab;