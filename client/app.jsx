import React from 'react';

export class MainLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      isHome: false
    }
  }
  render() {
    var self = this;
    var isHome = this.props.pageData.isHome;
    Tracker.autorun(function() {
        FlowRouter.watchPathChange();
        var context = FlowRouter.current();
        isHome = (context.path === '/');
        window.scrollTo(0, 0);
    });
    return <div className="main-layout-container">
      <Header isHome={isHome} fullName={this.props.pageData.fullName} />

      <div className={isHome ? "home-content-container" : "content-container"}>{this.props.content}</div>

      {isHome ? '' :
        <Footer phone={this.props.pageData.phone} email={this.props.pageData.email} fullName={this.props.pageData.fullName} currentYear={this.props.pageData.currentYear} githubUrl={this.props.pageData.githubUrl} linkedInUrl={this.props.pageData.linkedInUrl} />
      }
    </div>
  }
}

const Header = ({isHome, hasProjects, fullName}) => (
  <nav className={isHome ? "navbar navbar-inverse navbar-fixed-top navbar-expanded" : "navbar navbar-inverse navbar-fixed-top navbar-subpage"}>
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="navbar-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand page-scroll logo-link" href={isHome ? "#page-top" : FlowHelpers.pathFor( 'home' )}>
          <img src="/img/logo.png" className="img-responsive" alt={fullName + " Logo"} />
        </a>
      </div>
      <div className="collapse navbar-collapse" id="navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          <li className="hidden">
            <a className={isHome ? "page-scroll" : ""} href={isHome ? "#page-top" : FlowHelpers.pathFor( 'home' )}></a>
          </li>
          <li>
            <a className={isHome ? "page-scroll" : ''} href={isHome ? "#about" : FlowHelpers.pathFor( 'about' )}>About</a>
          </li>
          <li>
            <a className={isHome ? "page-scroll" : ''} href={isHome ? "#services" : FlowHelpers.pathFor( 'services' )}>Services</a>
          </li>
          <li>
            <a className={isHome ? "page-scroll" : ''} href={isHome ? "#work" : FlowHelpers.pathFor( 'caseStudies' )}>Case Studies</a>
          </li>
          <li>
            <a className={isHome ? "page-scroll" : ''} href={isHome ? "#project" : FlowHelpers.pathFor( 'projects' )}>Projects</a>
          </li>
          <li>
            <a className={isHome ? "page-scroll" : ''} href={isHome ? "#contact" : FlowHelpers.pathFor( 'contact' )}>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export const Footer = ({phone, email, fullName, currentYear, githubUrl, linkedInUrl}) => (
  <footer className="footer">
    <div className="container text-center">
      <div className="row">
        <div className="col-md-4 contact-details">
          <h4><i className="fa fa-phone"></i> Call</h4>
          <p>{phone}</p>
        </div>
        <div className="col-md-4 contact-details">
        </div>
        <div className="col-md-4 contact-details">
          <h4><i className="fa fa-envelope"></i> Email</h4>
          <p><a href={"mailto:" + email}>{email}</a>
          </p>
        </div>
      </div>
      <div className="row social">
        <div className="col-lg-12">
          <ul className="list-inline">
            <li><a href={githubUrl}><i className="fa fa-github fa-fw fa-2x"></i></a>
            </li>
            <li><a href={linkedInUrl}><i className="fa fa-linkedin fa-fw fa-2x"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row copyright">
        <div className="col-lg-12">
          <p className="small">&copy; {currentYear} {fullName}, All Rights Reserved</p>
        </div>
      </div>
    </div>
  </footer>
);