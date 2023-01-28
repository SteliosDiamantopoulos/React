import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
    return (
        <div className='gpt3__header section__padding' id='home'>
            <div className='gpt3__header-content'>
                <h1 className='gradient__text'>"GPT-3 in Everyday Life: Unlocking its Potential"</h1>
                <p>Welcome to Introduction to Chat GPT-3, the ultimate resource for understanding and utilizing the power of GPT-3.
                    Learn about its capabilities, potential uses and tips for using it effectively.
                    Explore the possibilities of this revolutionary technology with us.</p>
                <div className="gpt3__header-content__input">
                    <input type='email' placeholder='Your Email' />
                    <button type='button'>Get Started</button>
                </div>
                <div className="gpt3__header-content__people">
                    <img src={people} alt='people' />
                    <p>Active users</p>
                </div>
            </div>
            <div className="gpt3__header-image">
                <img src={ai} alt='ai' />
            </div>
        </div>
    )
}

export default Header