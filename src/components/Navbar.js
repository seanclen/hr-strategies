import React from 'react'
import { Link } from 'gatsby'
import logoWhite from '../assets/img/hrs-long-white.svg'

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
    const navClass = this.props.isClear ? 'navbar is-absolute-top' : 'navbar is-dark has-background-grey-dark'

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
              <div tabindex="1" className="navbar-item has-dropdown" onKeyDown={this.onKeyPressed}>
                <div className="navbar-link is-arrowless">
                  Services
                </div>
                <div className="navbar-dropdown">
                  <Link className="navbar-item" to="/services/recruiting-staffing">
                    Recruiting &amp; Staffing
                  </Link>
                  <Link className="navbar-item" to="/services/investigations">
                    Investigations
                  </Link>
                  <Link className="navbar-item" to="/services/compensation-benefits">
                    Compensation &amp; Benefits
                  </Link>
                  <Link className="navbar-item" to="/services/performance-management">
                    Performance Management
                  </Link>
                  <Link className="navbar-item" to="/services/organized-labor">
                    Organized Labor
                  </Link>
                  <Link className="navbar-item" to="/services/handbooks-job-descriptions">
                    Employee Handbooks &amp; Job Descriptions
                  </Link>
                  <Link className="navbar-item" to="/services/change-management">
                    Change Management
                  </Link>
                  <Link className="navbar-item" to="/services/retainer-retention">
                    Retainer &amp; Retention Programs
                  </Link>
                  <Link className="navbar-item" to="/services/reference-checks">
                    Reference Checks
                  </Link>
                  <hr className="navbar-divider" />
                  <Link className="navbar-item" to="/services">
                    <small>More About Services <span className="m-l-10 icon"><i className="fas fa-chevron-right"></i></span></small>
                  </Link>
                </div>
              </div>
              <div tabindex="2" className="navbar-item has-dropdown">
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
              <div tabindex="3" className="navbar-item has-dropdown">
                <div className="navbar-link is-arrowless">
                  Compliance
                </div>
                <div className="navbar-dropdown">
                  <Link className="navbar-item" to="/compliance/assessments-audits">
                    HR Assessments / Audits
                  </Link>
                  <Link className="navbar-item" to="/compliance/affirmative-action">
                    Affirmative Action Plans
                  </Link>
                  <Link className="navbar-item" to="/compliance/diversity-programs">
                    Diversity Programs
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
              <div tabindex="4" className="navbar-item has-dropdown">
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
                  <Link className="navbar-item has-text-info has-text-weight-normal" to="/about">
                    Training Evaluation
                  </Link>
                  <hr className="navbar-divider" />
                  <Link className="navbar-item" to="/training">
                    <small>More About Training <span className="m-l-10 icon"><i className="fas fa-chevron-right"></i></span></small>
                  </Link>
                </div>
              </div>
              <Link tabindex="5" className="navbar-item" to="/contact">
                Pricing
              </Link>
              <Link tabindex="6" className="navbar-item" to="/contact">
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
