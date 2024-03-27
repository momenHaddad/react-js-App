import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="navbar">
            <h1>my first react app </h1>
            <div className="links">
                <Link to="/">home</Link>
                <Link to="/NewBlog" > new blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;