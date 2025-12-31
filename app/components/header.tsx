const Header = () => {
  return (
        
    <header className="main-header">
    	
    	{/* Header-Upper*/}
        <div className="header-upper">
        	<div className="auto-container">
            	<div className="clearfix">
                	
                	<div className="pull-left logo-box">
                    	<div className="logo"><a href="#"><img src="/images/SAMPURNHA SOFTWARE.png" alt="" title=""/></a></div>
                    </div>
                   	
                   	<div className="nav-outer clearfix">
						{/* Mobile Navigation Toggler*/}
                        <div className="mobile-nav-toggler"><span className="icon icons-menu-button"></span></div>
						{/*  Main Menu */}
						<nav className="main-menu show navbar-expand-md">
							<div className="navbar-header">
								<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
							</div>

							<div className="navbar-collapse collapse scroll-nav clearfix" id="navbarSupportedContent">
								<ul className="navigation clearfix">
									<li className="current dropdown"><a href="#home-banner">Home</a>
										<ul>
											<li><a href="#">Home Page 01</a></li>
											<li><a href="#">Home Page 02</a></li>
											<li><a href="#">Home Page 03</a></li>
										</ul>
									</li>
									<li><a href="#featured">Features</a></li>
									<li><a href="#how-works">How it works</a></li>
									<li><a href="#pricing">Pricing</a></li>
									<li className="dropdown"><a href="#blog">Blog</a>
										<ul>
											<li><a href="#">Our Blog</a></li>
											<li><a href="#">Blog Single</a></li>
										</ul>
									</li>
									<li><a href="#contact">Contact us</a></li>
								</ul>
							</div>
							
						</nav>
						
						<div className="outer-box">
							<a href="#" className="theme-btn btn-style-one"><span className="txt">Download app</span></a>
						</div>
						
					</div>
                   
                </div>
            </div>
        </div>
        {/* End Header Upper*/}
        
		
		
		{/*  Mobile Menu  */}
        <div className="mobile-menu">
            <div className="menu-backdrop"></div>
            <div className="close-btn"><span className="icon icons-multiply"></span></div>
            
            <nav className="menu-box">
                <div className="nav-logo"><a href="#"><img src="/images/logo-2.png" alt="" title=""/></a></div>
                <div className="menu-outer">{/* Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}</div>
            </nav>
        </div>{/*  End Mobile Menu */}
		
    </header>
  );
};

export default Header;
 