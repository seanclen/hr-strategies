import React from 'react'
import { Link } from 'gatsby'
import _ from 'lodash'
import logoWhite from '../assets/img/hrs-long-white.svg'

export const ContactLink = ({ children, className, location }) => {
  const path = location.pathname.slice(location.pathname.lastIndexOf('/') + 1, location.pathname.length)
  const name = _.startCase(path.replace(/-/g, ' '))
  return (
    <Link to="/contact" className={className} state={{ contactFrom: {name: name, pathname: location.pathname}}}>{children}</Link>
  )
}

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      isSmall: false
    };

    this.toggleNavigation = this.toggleNavigation.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.onKeyPressed = this.onKeyPressed.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  toggleNavigation() {
    const newState = {
      isOpen: !this.state.isOpen,
      isSmall: this.state.isSmall
    };

    this.setState(newState);

    const $navigationBurger = document.getElementById('navigation-burger');
    const $navigationMenu = document.getElementById('navigation-menu');
    const $navigationShadow = document.getElementById('navigation-shadow');
    $navigationBurger.classList.toggle('is-active');
    $navigationMenu.classList.toggle('is-active');
    $navigationShadow.classList.toggle('is-active');

    if (!newState.isOpen) {
      this.closeActiveDropdown();
      if (document.activeElement) {
        document.activeElement.blur();
      } else {
        document.body.blur(); // Needed for IE
      }
    }
  }

  closeActiveDropdown() {
    const $activeDropdown = document.querySelector('.has-dropdown.is-active');
    if($activeDropdown) {
      $activeDropdown.classList.remove('is-active');
    }
    return $activeDropdown;
  }

  toggleDropdown(element) {
    if (!this.state.isOpen) {
      this.toggleNavigation();
    }
    if (this.closeActiveDropdown() !== element) {
      element.classList.toggle('is-active');
    } else if (!this.state.isSmall) {
      // Selected the same dropdown and is large nav, close navigation.
      this.toggleNavigation();
    }
  }

  updateDimensions() {
    if(window.innerWidth <= 1087) {
      this.setState({ isOpen: this.state.isOpen, isSmall: true });
    } else {
      this.setState({ isOpen: this.state.isOpen, isSmall: false });
      if (this.state.isOpen && !document.querySelector('.has-dropdown.is-active')) {
        // Large navigation is open but no dropdowns selected, close navigation
        this.toggleNavigation();
      }
    }
  }

  componentDidMount() {
    this.updateDimensions();

    const $navigationShadow = document.getElementById('navigation-shadow');
    const $navigationBurger = document.getElementById('navigation-burger');
    const $navbarDropdowns = Array.prototype.slice.call(document.querySelectorAll('.has-dropdown'), 0 );

    window.addEventListener('resize', this.updateDimensions);
    $navigationShadow.addEventListener('click', this.toggleNavigation);
    $navigationBurger.addEventListener('click', this.toggleNavigation);
    if ( $navbarDropdowns.length > 0 ) {
      $navbarDropdowns.forEach( el => {
        el.addEventListener('click', () => {
          this.toggleDropdown(el);
        });
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  onKeyPressed(e) {
    // key codes 13: enter, 41: select
    const keyCodes = [13, 41];

    if (keyCodes.includes(e.keyCode)) {
      this.toggleDropdown(e.target);
    }
  }

  render() {
    const navClass = this.props.isClear ? 'navbar is-absolute-top' : 'navbar is-dark has-background-grey-darker'

    return (
      <nav className={navClass} role="navigation" aria-label="main-navigation">
        <div className="container is-fluid">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logoWhite} alt="HR Strategies" width="150px"/>
            </Link>
            {/* Hamburger menu */}
            <div id="navigation-burger" className="navbar-burger burger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div id="navigation-menu" className="navbar-menu">
            <div className="navbar-end">
              <div tabIndex="1" className="navbar-item has-dropdown" onKeyDown={this.onKeyPressed}>
                <div className="navbar-link is-arrowless">
                  Why HR Strategies
                </div>
                <div className="navbar-dropdown">
                  <Link className="navbar-item" to="/about">
                    About Us
                  </Link>
                  <Link className="navbar-item" to="/about/our-approach">
                    Our Approach
                  </Link>
                  <Link className="navbar-item" to="/about/partners">
                    Partners
                  </Link>
                  <Link className="navbar-item" to="/about/testimonials-case-studies">
                    Testimonials &amp; Case Studies
                  </Link>
                </div>
              </div>
              <div tabIndex="2" className="navbar-item has-dropdown">
                <div className="navbar-link is-arrowless">
                  Compliance
                </div>
                <div className="navbar-dropdown">
                  <Link className="navbar-item" to="/compliance/affirmative-action">
                    Affirmative Action Plans
                  </Link>
                  <Link className="navbar-item" to="/compliance/diversity-programs">
                    Diversity Programs
                  </Link>
                  <Link className="navbar-item" to="/compliance/assessment">
                    HR Assessment
                  </Link>
                  <Link className="navbar-item" to="/compliance/policy-development">
                    Policy Development
                  </Link>
                  <hr className="navbar-divider" />
                  <Link className="navbar-item" to="/compliance">
                    <small>More About Compliance <span className="m-l-10 icon"><i className="fas fa-chevron-right"></i></span></small>
                  </Link>
                </div>
              </div>
              <div tabIndex="3" className="navbar-item has-dropdown">
                <div className="navbar-link is-arrowless">
                  Training
                </div>
                <div className="navbar-dropdown">
                  <Link className="navbar-item" to="/training/mandated-training">
                    Mandated Training
                  </Link>
                  <Link className="navbar-item" to="/training/additional-training">
                    Additional Training
                  </Link>
                  <hr className="navbar-divider" />
                  <Link className="navbar-item" to="/training">
                    <small>More About Training <span className="m-l-10 icon"><i className="fas fa-chevron-right"></i></span></small>
                  </Link>
                </div>
              </div>
              <Link tabIndex="4" className="navbar-item" to="/contact">
                HR Startup
              </Link>
              <div tabIndex="5" className="navbar-item has-dropdown">
                <div className="navbar-link is-arrowless">
                  Services
                </div>
                <div className="navbar-dropdown">
                  <Link className="navbar-item" to="/services/employee-relations">
                    Employee Relations
                  </Link>
                  <Link className="navbar-item" to="/services/compensation-benefits">
                    Compensation &amp; Benefits
                  </Link>
                  <Link className="navbar-item" to="/services/employee-handbooks">
                    Employee Handbooks
                  </Link>
                  <Link className="navbar-item" to="/services/job-descriptions">
                    Job Descriptions
                  </Link>
                  <Link className="navbar-item" to="/services/investigations">
                    Investigations
                  </Link>
                  <Link className="navbar-item" to="/services/recruiting-staffing">
                    Recruiting & Staffing
                  </Link>
                  <hr className="navbar-divider" />
                  <Link className="navbar-item" to="/services">
                    <small>More About Services <span className="m-l-10 icon"><i className="fas fa-chevron-right"></i></span></small>
                  </Link>
                </div>
              </div>
              <Link tabIndex="6" className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar

// Strictly hierarchical behavior, will not point to parent or child outside of family
export const Breadcrumbs = ({ location }) => {
  let path = location.pathname
  let crumbs = []

  const specialNames = {
    'testimonials-case-studies' : 'Testimonials & Case Studies',
    'assessment' : 'HR Assessment',
  }

  const splitUrl = location.pathname.split('/')
  splitUrl.forEach((split, index) => {
    if (index === 0 && split === '') {
      crumbs = [...crumbs, { pathname: '/', label: 'Home' }]
    } else if (index !== 0 && split !== '') {
      let name = specialNames[split] || _.startCase(split.replace(/-/g, ' '))
      crumbs = [...crumbs, {
        pathname: path.slice(0, path.lastIndexOf('/'.concat(split)) + split.length + 1),
        label: name
      }]
    }
  })

  return (
    <nav className="breadcrumb" aria-label="breadcrumbs">
      <ul>
        {crumbs.map((crumb) => {
          if (path === crumb.pathname) {
            return (
              <li className="is-active"><Link to={crumb.pathname} aria-current="page">{crumb.label}</Link></li>
            )
          }
          return (
            <li><Link to={crumb.pathname}>{crumb.label}</Link></li>
          )
        })}
      </ul>
    </nav>
  )
}
