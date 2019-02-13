import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo-short.png'

const Footer = class extends React.Component {

 render() {
   return (
     <footer class="footer">
       <div class="content has-text-centered">
         <p>
           <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
           <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
         </p>
         <p className="has-text-grey-light">&copy; 2018 HR Strategies, LLC.</p>
       </div>
     </footer>
  )}
}

export default Footer
