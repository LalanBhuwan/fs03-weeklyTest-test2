import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <div className="navbar dis_flex">
            <Link to="/">Home</Link>
            <Link to="/product">Products</Link>
            <Link to="/user">Users</Link>
            <Link to="/contact">Contact</Link>
            
        </div>
    );
}
export default Nav;