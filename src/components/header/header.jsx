import { Link, animateScroll as scroll } from "react-scroll";

import './header.css'

// Imported icons images and sounds =========>
import headerPic from '../../assets/img/pngwing.com.png'
import sound1 from "../../assets/sounds/click-1139.wav"



const Header = () => {

  function playClickSound() {
    new Audio(sound1).play()
  }
  
  return (
      <div className="header-container">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        
        <div className="header-top">
          <div className="header-left">
            <div className="header-logo">
                <span>GAINZ</span><span>web3 fit app</span>
            </div>
            </div>
              <nav className="header-nav">
                    <Link 
                      onClick={playClickSound}
                      className="header-link"
                      to ="invest"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={400}
                      >Buy $GAINZ
                    </Link>
                    <Link 
                      onClick={playClickSound}
                      className="header-link"
                      to ="earn"
                      smooth={true}
                      offset={-50}
                      duration={400}
                      >Earn $GAINZ
                    </Link>
                    <Link 
                      onClick={playClickSound}
                      className="header-link"
                      to ="innovations"
                      smooth={true}
                      offset={-50}
                      duration={400}
                      >Innovations
                    </Link>
                    <Link 
                      onClick={playClickSound}
                      className="header-link"
                      to ="roadmap"
                      smooth={true}
                      offset={-50}
                      duration={400}
                      >Roadmap
                    </Link>
                    <Link 
                      onClick={playClickSound}
                      className="header-link"
                      to ="footer"
                      smooth={true}
                      offset={-50}
                      duration={400}
                      >Partners
                    </Link>
              </nav>
              <div className="header-buttons">
                    <Link 
                      onClick={playClickSound}
                      className="header-buttons-link"
                      to ="services"
                      >CONNECT WALLET
                    </Link>
                    <Link 
                      onClick={playClickSound}
                      className="header-buttons-link"
                      to ="contact"
                      >LAUNCH APP
                    </Link>
              </div>
            </div>

            <div className="header-bottom">
              <div className="header-presentation">
                <h1>First web3 fitness app for community</h1>
                <h2>Buy fitness plans and classes with $GAINZ</h2>
                <h2>Earn $GAINZ by training and sharing experience</h2>
                <h2>Stake $GAINZ and earn rewards</h2>
                <div className="header-whitepaper"> 
                  <Link 
                        onClick={playClickSound}
                        className="header-buttons-link"
                        to ="services"
                        >WHITEPAPER
                  </Link>
                </div>
              </div>
              <div className="header-pic">
                <img src={headerPic} alt='web3Fit' />
              </div>
            </div>
          </div>
    )
  };

  export default Header