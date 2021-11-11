import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'


function Header() {

  
    return (
      <Nav>
        <h4>StreamMe</h4>
        <NavMenu>
          <Link to="/">
            <img src="./images/home-icon.svg" alt="Home" />
            <span>Home</span>
          </Link>
          <Link to="/search">
            <img src="./images/search-icon.svg" alt="Search" />
            <span>Search</span>
          </Link>
          <Link to="/watchlist">
            <img src="./images/watchlist-icon.svg" alt="Watchlist" />
            <span>Watchlist</span>
          </Link>
          <Link to="/originals">
            <img src="./images/original-icon.svg" alt="Originas" />
            <span>Originals</span>
          </Link>
          <Link to="/moviespage">
            <img src="./images/movie-icon.svg" alt="Moive" />
            <span>Movies</span>
          </Link>
          <Link to="/series">
            <img src="./images/series-icon.svg" alt="Series" />
            <span>Series</span>
          </Link>
        </NavMenu>
        <Login>Login</Login>
      </Nav>
    );
}
export default Header; 

const Nav = styled.div`
  height: 80px;
  background: #002244;
  display: flex;
  align-items: center;
  padding: 0 20px;
  overflow-x: hidden;

  a {
    color: white;
    background-color: transparent;
    text-decoration: none;
  }
  container-fluid {
    padding: 0;
  }
  expand: lg; 
`;




const NavMenu = styled.div`
display: flex;
flex: 1;
margin-left: 15px; 
align-items: center; 

a{
    display: flex;
    cursor: pointer;
    align-items: center;
    padding: 0 10px;
    img{
        height: 25px;
        width: 25px;
    }
    span{
        font-size: 16px;
        letter-spacing: 1.5px; 
        position: relative; 

        &:after{
            content: "";
            height: 3px;
            background: white;
            position: absolute;
            left: 0; 
            right: 0; 
            bottom: -5px;
            opacity: 0;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform-origin: left center;
            transform: scalexX(0);

        }
    }

    &:hover {
        span:after {
            transform: scaleX(1);
            opacity: 1;
        }
    }
}
`


const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    border: 2px solid white;
  }
`;