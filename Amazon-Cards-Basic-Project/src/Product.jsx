import Price from "./Price";
import "./Product.css";

function Product({title, idx}) {
    let oldPrices = ["6999","1299","1999","999"];
    let newPrices = ["3999","699","1299","499"];
    let description = [
        ["High Quality Whey","Enhanced Whey"],
        ["Micro Absorbed Creatine","Enhance Endurance"],
        ["Enhance & Focus Energy","Xplosive Strenght"],
        ["Bone Health & Vitamins","Testosterone Booster"]];
    return(
        <div className="Product">
            <h3>{title}</h3>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default Product;