import './invest.css'
import {Reveal} from '../utils/reveal.tsx'

//ASSETS
import tokenImg from '../../assets/img/token-img.jpeg'
import whyInvestPic from '../../assets/img/why-invest.webp'
import tokenomics from '../../assets/img/tokenomics.png'

export default function Invest() {
    return (
        <div className="invest-container" name="invest">
            <Reveal>
            <section className="invest-section">
                <div className="invest-presentation-text">
                    <h2 className="invest-title">What is <span className='span-color4'>$GAINZ?</span></h2>
                    <p>$GAINZ is a BEP20 token for all the usecases of GAINZ app.</p>
                    <ul>
                        <li>Buy workout programs and classes</li>
                        <li>Buy NFT from our collection</li>
                        <li>Get rewards from using app, staking and referral</li>
                    </ul>
                </div>
                <div className="invest-presentation-img">
                    <img src={tokenImg} alt="$GAINZ token" />
                </div>
            </section>
            </Reveal>

            <Reveal>
            <section className="invest-section">
                <div className="invest-presentation-img">
                    <img src={whyInvestPic} alt="$GAINZ token" />
                </div>
                <div className="invest-presentation-text">
                    <h2 className="invest-title"><span className='span-color5'>Why</span> should I invest?</h2>
                    <p>$GAINZ aims to be a <span style={{color:'blueviolet'}}>unique token</span> for all uses of the application, creating a constant buying force.</p>
                    <p>By developing a large community and multiple usecases for the application, <span style={{color:'crimson'}}>the need for GAINZ will be high and constant.</span></p>
                    <p>This makes the $GAINZ token lucrative for everyone. Whether you are an investor, an advertising partner, a pre-sale buyer, a hodler or a user of the Gainz App.</p>
                </div>
            </section>
            </Reveal>

            <Reveal>
            <section className="invest-section">
            <div className="invest-presentation-text">
                    <h2 className="invest-title">$GAINZ <span className='span-color6'>Tokenomics</span></h2>
                    <p>Supply: limited  -  Max supply : 1,000,000,00</p>
                    <ul>
                        <li>Private Sale 15%</li>
                        <li>Public Sale 15%</li>
                        <li>Project Rewards 35%</li>
                        <li>Liquidity & Marketing 25%</li>
                        <li>Partners & Advisors 2%</li>
                        <li>Team 8%</li>
                    </ul>
                    <div className='invest-contract'>
                        <span className='span-color6'>Contract adress: </span>
                        <span>0x53f1e15ed3Cea8c1d4Adc4BE2DDE4BA33715a922</span>
                    </div>
                </div>
                <div className="invest-presentation-img">
                    <img src={tokenomics} alt="$GAINZ tokenomics" />
                </div>
            </section>
            </Reveal>
        </div>
    )
}