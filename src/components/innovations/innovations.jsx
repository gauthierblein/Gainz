import './innovations.css'
import {Reveal} from '../utils/reveal.tsx'

//ASSETS
import aiPic from '../../assets/img/ai.webp'
import avatarPic from '../../assets/img/avater-removebg-preview.png'

export default function Innovations() {
    return (
        <div className='innovations-container' name="innovations">
            <Reveal><h2>Innovations</h2></Reveal>

            <Reveal>
            <div className='innovations-section'>
                <div className='innovations-text' style={{backgroundColor:'indigo'}}>
                    <h3>Training Programs generated by IA</h3>
                    <p>Step into a new generation of fitness training.</p>
                    <p>Our AI studies your profile and responds with programs perfectly suited to your expectations.</p>
                    <p>Pay with $GAINZ to generate a training program, and then follow your improvement on the app.</p>
                </div>
                <div className='innovations-img'>
                    <img src={aiPic} alt="AI generated training programs" />
                </div>
            </div>
            </Reveal>

            <Reveal>
            <div className='innovations-section'>
            <   div className='innovations-img'>
                    <img src={avatarPic} alt="AI generated training programs" />
                </div>
                <div className='innovations-text' style={{backgroundColor:'darkmagenta'}}>
                <h3>Animated 3D fitness classes with avatars</h3>
                    <p>GAINZ provides you with a number of varied fitness classes, animated by 3D avatars.</p>
                    <p>Strength training, cardio, stretching, pilates.</p>
                    <p>Use $GAINZ to follow a class, and then be rewarded for achieving watching the training.</p>
                </div>
            </div>
            </Reveal>

        </div>
    )
}