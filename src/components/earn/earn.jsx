import './earn.css'
import {Reveal} from '../utils/reveal.tsx'

// ASSETS
import { FaMobileAlt, FaMoneyCheckAlt } from 'react-icons/fa'
import { AiOutlineTeam } from 'react-icons/ai'
import mobile from '../../assets/img/pexels-mobile-use.jpg'
import staking from '../../assets/img/money.jpeg'
import community from '../../assets/img/pexels-community.jpg'

export default function Earn() {
    return (
        <Reveal>
        <div className='earn-container' name="earn">

            <h2><span>3 ways</span><span> to earn $GAINZ</span></h2>

            <Reveal>
            <div className='earn-possibilities'>

                <div className='earn-section'>
                    <div className='earn-section-title'>
                        <h3>Using the App</h3>
                        <FaMobileAlt size={30} />
                    </div>
                    <p>1 - Follow our programs, provide training feed-back and earn $GAINZ</p>
                    <p>2 - Follow our fitness classes in the GainzVerse (2024, see Roadmap). Get rewarded with $GAINZ when the class is done.</p>
                    <p>3 - Use the Gainz Walk2Earn mode (2025, see Roadmap) and get rewarded with $GAINZ for walking until 45 minutes per day.</p>
                    <div className='earn-section-img'>
                        <img src={mobile} alt="use Gainz App" />
                    </div>
                    <div className='earn-section-btn'>
                        <button>Try the App</button>
                    </div>
                </div>

                <div className='earn-section'>
                    <div className='earn-section-title'>
                        <h3>Staking $GAINZ</h3>
                        <FaMoneyCheckAlt size={30} />
                    </div>
                    <div className='earn-section-img'>
                        <img src={staking} alt="use Gainz App" />
                    </div>
                    <p>Choose your favourite option to stake $GAINZ and get rewarded.</p>
                    <div className='earn-section-stake'>
                        <h4>No Lock</h4>
                        <p>No bonus</p>
                    </div>
                    <div className='earn-section-stake'>
                        <h4>3 months lock</h4>
                        <p>🔥 <span style={{color:'blueviolet'}}>+25% bonus</span></p>
                    </div>
                    <div className='earn-section-stake'>
                        <h4>6 months lock</h4>
                        <p>🔥🔥 <span style={{color:'crimson'}}>+50% bonus</span></p>
                    </div>
                    <div className='earn-section-stake'>
                        <h4>12 months lock</h4>
                        <p>🔥🔥🔥 <span style={{color:'brown'}}>+100% bonus</span></p>
                    </div>
                </div>

                <div className='earn-section'>
                    <div className='earn-section-title'>
                        <h3>Expending community</h3>
                        <AiOutlineTeam size={30} />
                    </div>
                    <p>Gainz is an innovative project that needs to build a large and strong community.</p>
                    <p>Become ambassadors or invite your friends to use the app, and be rewarded.</p>
                    <br />
                    <p>1 - $GAINZ bonus for ambassadors</p>
                    <p>2 - Get rewarded with $GAINZ when your friends join the app.</p>
                    <p>3 - 🔥 Get 2% bonus of <span style={{color:'blueviolet'}}>for each rewards </span><span style={{color:'crimson'}}>given to your friends.</span></p>
                    <div className='earn-section-img'>
                        <img src={community} alt="use Gainz App" />
                    </div>
                </div>
                
            </div>
            </Reveal>
            
        </div>
        </Reveal>
    )
}