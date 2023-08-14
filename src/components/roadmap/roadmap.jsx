import  './roadmap.css'
import {Reveal} from '../utils/reveal.tsx'

//ASSETS
import { AiFillCheckCircle } from 'react-icons/ai'

export default function Roadmap() {
    return (
        <div className='roadmap-container' name="roadmap">
            <Reveal><h2>Roadmap</h2></Reveal>
            <Reveal><div className='roadmap-timeline'></div></Reveal>
            <div className='roadmap-steps'>
                <Reveal>
                <div className='roadmap-step'>
                    <AiFillCheckCircle size={50} style={{color:'lightseagreen'}}/>
                    <div className='roadmap-description-done'>
                        <h4>Q3 2023 - Create the concept and usecases. Defining business plan</h4>
                        <p>Define with precision the concept of the Gainz project, the steps and the necessary innovations. Launch the website and social media related to the project.</p>
                    </div>
                </div>
                </Reveal>

                <Reveal>
                <div className='roadmap-step'>
                    <AiFillCheckCircle size={50} style={{color:'gray'}}/>
                    <div className='roadmap-description'>
                        <h4>Q4 2023 - Start developping the app - Research of partners</h4>
                        <p>Programming work. Research of partners for investment, 3D animation and the IA system. Find ambassadors accross the world</p>
                    </div>
                </div>
                </Reveal>

                <Reveal>
                <div className='roadmap-step'>
                    <AiFillCheckCircle size={50} style={{color:'gray'}}/>
                    <div className='roadmap-description'>
                            <h4>Q1 2024 - Launch App et onboard Gainzs users - Staking</h4>
                            <p>App launching for training programs.</p>
                            <p>Defi and Staking launched into the App</p>
                    </div>
                </div>
                </Reveal>

                <Reveal>
                <div className='roadmap-step'>
                    <AiFillCheckCircle size={50} style={{color:'gray'}}/>
                    <div className='roadmap-description'>
                            <h4>Q2 2024 - Launch NFT collection for future classes</h4>
                            <p>Creating a NFT collection, giving access on the Gainz marketplace. Special options and rewards for the NFT's holders.</p>
                    </div>
                </div>
                </Reveal>

                <Reveal>
                <div className='roadmap-step'>
                    <AiFillCheckCircle size={50} style={{color:'gray'}}/>
                    <div className='roadmap-description'>
                            <h4>Q3 2024 - Provide animated fitness classes</h4>
                            <p>App launching for training programs. Defi and Staking launched</p>
                    </div>
                </div>
                </Reveal>

                <Reveal>
                <div className='roadmap-step'>
                    <AiFillCheckCircle size={50} style={{color:'gray'}}/>
                    <div className='roadmap-description'>
                            <h4>Q4 2024 - Conclude parternships with fitness clubs and fitness companies</h4>
                            <p>Involve more actors into the fitness ecosystem to join Gainz and be part of our vision.</p>
                    </div>
                </div>
                </Reveal>

            </div>

        </div>
    )
}