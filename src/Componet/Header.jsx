import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const handleSelectChange = (event) => {
        const value = event.target.value;
        if (value) {
            navigate(`/${value}`);
        }
    };

    return (
        <header>
            <div id='logo'>
                <img src="/Colorlib/logo2_footer.png" alt="Logo" />
            </div>
            <nav>
                <ul>
                    <NavLink to="/" className='Link' activeClassName='active'>Home</NavLink>
                    <NavLink to="/Shop" className='Link' activeClassName='active'>Product</NavLink>
                    <select name="pages" id="pages" className='Link' onChange={handleSelectChange}>
                        <option value="">Pages</option>
                        <option value="login">LOGIN</option>
                        <option value="Sing">SIGN UP</option>
                    </select>
                    <NavLink to="/About" className='Link' activeClassName='active'>About</NavLink>
                    <NavLink to="/Contact" className='Link' activeClassName='active'>Contact</NavLink>
                </ul>
            </nav>
            <div id='Hicon'>
                <i className="bi bi-search"></i>
                <i className="bi bi-person-fill"></i>
                <i className="bi bi-cart-check-fill"></i>
            </div>
        </header>
    );
}

export default Header;
