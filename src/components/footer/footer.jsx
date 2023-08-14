import './footer.css'


// ASSETS
import {FaTwitter, FaDiscord, FaLinkedin} from 'react-icons/fa'


export default function Footer() {
    const effectiveYear = new Date().getFullYear();

    return (
        <div className='footer-container' name='footer'>
            
            <div className='footer-zone'>
                <h5>
                    <span className='footer-logo'>GAINZ</span>
                    <span className='footer-copyright'> &copy;{effectiveYear}</span>
                </h5>
                <p>info@gainz.io</p>
                <div className='footer-icons'>
                    <FaLinkedin size={25} />
                    <FaTwitter size={25} />
                    <FaDiscord size={25}/>
                </div>
            </div>

            <div className='footer-zone'>
                <h5>JOIN US</h5>
                <p>Become a partner</p>
                <p>Become an ambassador</p>
            </div>

            <div className='footer-zone'>
                <h5>FAQ</h5>
                <p>Privacy Policy</p>
                <p>Security</p>
            </div>
            
        </div>
    )
}