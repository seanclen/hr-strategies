import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo-short.svg'

const debounce = (func, wait) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollPositionY: 0,
    }
  }

  componentDidMount() {
    // 24 is the number of milliseconds to debounce
    //window.addEventListener('scroll', debounce(this.handleScroll, 24))

    // Get all "navbar-burger" elements
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
   if ($navbarBurgers.length > 0) {

     // Add a click event on each of them
     $navbarBurgers.forEach( el => {
       el.addEventListener('click', () => {

         // Get the target from the "data-target" attribute
         const target = el.dataset.target;
         const $target = document.getElementById(target);

         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
         el.classList.toggle('is-active');
         $target.classList.toggle('is-active');

       });
     });
   }
 }

 componentWillUnmount() {
   return window.removeEventListener('scroll', debounce(this.handleScroll, 32))
 }

 handleScroll = () => {
   // + is unary operator, same as Number(scrollPositionY)
   const scrollPositionY = +window.scrollY
   return this.setState({ scrollPositionY })
 }

 render() {
   // !! coerces value to be a Boolean
   // we want it to be true or false (true if scrollPositionY > 0)
   // it works because scrollPositionY === 0 is falsy
   const isScrolling = !!this.state.scrollPositionY
   return (
     <nav className="navbar" role="navigation" aria-label="main-navigation">
       <div className="container is-fluid">
         <div className="navbar-brand">
           <Link to="/" className="navbar-item" title="Logo">
             <img src={logo} alt="HR Strategies" />
             <span style={{ paddingLeft: '0.5rem', textTransform: 'uppercase', fontWeight: '800' }} >Strategies</span>
           </Link>
           {/* Hamburger menu */}
           <div className="navbar-burger burger" data-target="navMenu">
             <span></span>
             <span></span>
             <span></span>
           </div>
         </div>
         <div id="navMenu" className="navbar-menu">
           <div className="navbar-end has-text-centered">
             <Link className="navbar-item" to="/about">
             About
             </Link>
             <Link className="navbar-item" to="/products">
             Products
             </Link>
             <Link className="navbar-item" to="/contact">
             Contact
             </Link>
             <Link className="navbar-item" to="/contact/examples">
             Form Examples
             </Link>
           </div>
         </div>
       </div>
     </nav>
  )}
}

export default Navbar
