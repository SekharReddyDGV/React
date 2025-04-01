import "./Header.css";

function Header(){
    return(
        <nav>
            <div className="brandName">
                <a href=""><h2>Brand Name</h2></a>
            </div>
            <div className="navigationLinks">
                <a href="">Home</a>
                <a href="">Products</a>
                <a href="">Electronics</a>
                <a href="">Jewelery</a>
                <a href="">Mens</a>
                <a href="">Womes</a>
            </div>
            <div className="actionBtn">
                <a href="">Cart</a>
                <a href="">WhishL</a>
                <a href=""> <button>Login</button> </a>

            </div>
            
        </nav>
    )
}
export default Header;