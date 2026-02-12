'use client';
import Image from 'next/image';
import arrowdown from '../public/icons/arrow-down.svg';
const Explorebtn = () => {
  return (
 
    <button type="button" id="explore-btn" className="mt-8" onClick={() => console.log('dd')}>
        <a href="#events">
            Explore Events
            <Image src={arrowdown} alt="arrow down" width={24} height={24}/>
        </a>
    </button>
  )
}

export default Explorebtn