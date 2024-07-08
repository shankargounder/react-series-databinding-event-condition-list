import image from "../assets/investment-calculator-logo.png";


export default function Header() {
    return (
        <div id="header">
            <img src={image} />
            <h1>React Investment Calculator</h1>
        </div>
    )
}