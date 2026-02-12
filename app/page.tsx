import Explorebtn from "@/components/Explorebtn"
import EventCard from "@/components/EventCard"
import { events } from "@/lib/constant"

const page = () => {
  return (
    <>
    <section >
      <h1 className="text-center">The hub of every developer's journey <br className="hidden md:block" /> in Next.js</h1>
      <p className="text-center mt-4">Hakaton, Metup, Conference, all in one place</p>
      
      <Explorebtn />
      
      <div className="mt-20 space-y-7">
        <h3>Feature Events</h3>
        <ul className="events">
          {events.map((event) =>(
            <li key={event.title}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>

    </section>
    
  </>

  )
}

export default page