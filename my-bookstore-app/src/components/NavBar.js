
import { Link } from 'react-router-dom';

const NavBar = () => {
return(
<nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    {/* <Link className="navbar-brand" to="/">Bookstore Application</Link> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>


                            
                            <li className="nav-item">
                                <Link className="nav-link" to="/view-books">View Books</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/update-book">Update Book</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/delete-book">Delete Book</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/save-book">Save Book</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
)
};
export default NavBar;



