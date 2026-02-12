import Image from 'next/image'
import Link from 'next/link';
import pin from '../public/icons/pin.svg';
import clock from '../public/icons/clock.svg';
import calandar from '../public/icons/calendar.svg';

interface Props {
    title: string;
    image: string;
    slug: string;  
    location: string;
    date: string;
time: string;

}
const EventCard = ({title, image, slug, location, date, time}:Props) => {
  return (
    <Link href={`/events/${slug}`} id='event-card'>
       <Image src={image} alt={title} width={410} height={300} className='poster' />
        <div className='flex flex-row gap-2'>
            <Image src={pin} width={14} height={14} alt="Location icon"/>
        <p>{location}</p>
        
        </div>
       
       <p className='title'>{title}</p>

       <div className='datetime'>
            <div>
                    <Image src={calandar} width={14} height={14} alt="Calendar icon"/>
                    <p>{date}</p>
            </div>
            <div>
                    <Image src={clock} width={14} height={14} alt="Clock icon"/>
                    <p>{time}</p>
            </div>

       </div>

    


    </Link>
  )
}

export default EventCard