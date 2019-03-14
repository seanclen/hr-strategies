import React from 'react'
import { Link } from 'gatsby'
import logoWhite from '../img/hrs-long-white.svg'

const Navbar = class extends React.Component {

  componentDidMount() {
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
   const $navbarDropdowns = Array.prototype.slice.call(document.querySelectorAll('.has-dropdown'), 0)
   var toggledNavItem

   if ($navbarBurgers.length > 0) {
     // Add a click event on each of them
     $navbarBurgers.forEach( el => {
       el.addEventListener('click', () => {
         const target = el.dataset.target;
         const $target = document.getElementById(target);

         el.classList.toggle('is-active');
         $target.classList.toggle('is-active');
       })
     })
   }

   if ($navbarDropdowns.length > 0) {
     // Add a click event on each of them
     $navbarDropdowns.forEach( el => {
       el.addEventListener('click', () => {
         if (toggledNavItem !== undefined) {
           toggledNavItem.classList.toggle('is-active');
         }

         // Toggling a different button
         if (el !== toggledNavItem) {
           el.classList.toggle('is-active')
           toggledNavItem = el
         } else {
           // Just toggled the same item, there is no
           toggledNavItem = undefined
         }
       })
     })
   }
 }

 render() {
   const clearNavigationPages = ['/', '/contact']
   const navClass = clearNavigationPages.includes(this.props.location) ? 'navbar is-absolute-top' : 'navbar is-dark has-background-grey-dark'
   return (
     <nav className={navClass} role="navigation" aria-label="main-navigation">
       <div className="container is-fluid">
         <div className="navbar-brand">
           <Link to="/" className="navbar-item" title="Logo">
             <img src={logoWhite} alt="HR Strategies" width="150px"/>
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
             <div className="navbar-item has-dropdown">
               <div className="navbar-link is-arrowless">
                 Services
               </div>
               <div className="navbar-dropdown">
                 <Link className="navbar-item" to="/about">
                   Recruiting &amp; Staffing
                 </Link>
                 <Link className="navbar-item" to="/about">
                   Investigations
                 </Link>
                 <Link className="navbar-item" to="/about">
                   Compensation &amp; Benefits
                 </Link>
                 <Link className="navbar-item" to="/about">
                   Performance Management
                 </Link>
                 <Link className="navbar-item" to="/about">
                   Organized Labor
                 </Link>
                 <Link className="navbar-item" to="/about">
                   Employee Handbooks &amp; Job Descriptions
                 </Link>
                 <Link className="navbar-item" to="/about">
                   Change Management
                 </Link>
                 <Link className="navbar-item" to="/about">
                   Retainer &amp; Retention Programs
                 </Link>
                 <Link className="navbar-item" to="/about">
                   Reference Checks
                 </Link>
               </div>
             </div>
             <div className="navbar-item has-dropdown">
               <div className="navbar-link is-arrowless">
                 Why HR Strategies
               </div>
               <div className="navbar-dropdown">
                 <Link className="navbar-item" to="/about">
                   Our Approach
                 </Link>
                 <Link className="navbar-item" to="/about">
                   Case Studies
                 </Link>
                 <Link className="navbar-item" to="/about">
                   Testimonials &amp; Awards
                 </Link>
                 <Link className="navbar-item" to="/about">
                   About Us
                 </Link>
               </div>
             </div>
             <div className="navbar-item has-dropdown">
               <div className="navbar-link is-arrowless">
                 Compliance
               </div>
               <div className="navbar-dropdown">
                 <Link className="navbar-item" to="/about">
                   HR Assessments / Audits
                 </Link>
                 <Link className="navbar-item" to="/about">
                   Affirmative Action Plans
                 </Link>
                 <Link className="navbar-item" to="/about">
                   Diversity Programs
                 </Link>
                 <Link className="navbar-item" to="/about">
                   Policy Development
                 </Link>
               </div>
             </div>
             <div className="navbar-item has-dropdown">
               <div className="navbar-link is-arrowless">
                 Training
               </div>
               <div className="navbar-dropdown">
                 <Link className="navbar-item" to="/about">
                   Training &amp; Development
                 </Link>
                 <Link className="navbar-item" to="/about">
                   Onboarding Programs
                 </Link>
                 <Link className="navbar-item" to="/about">
                   Career Planning
                 </Link>
                 <Link className="navbar-item" to="/about">
                   Coaching &amp; Counseling
                 </Link>
                 <Link className="navbar-item" to="/about">
                   Wellness Intervention
                 </Link>
                 <hr className="navbar-divider" />
                 <Link className="navbar-item has-text-info" to="/about">
                   Training Evaluation
                 </Link>
               </div>
             </div>
             <Link className="navbar-item" to="/contact">
               Pricing
             </Link>
             <Link className="navbar-item" to="/contact">
               Contact
             </Link>
           </div>
         </div>
       </div>
     </nav>
  )}
}

export default Navbar
