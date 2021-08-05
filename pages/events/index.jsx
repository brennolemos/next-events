import { useRouter } from "next/router";

import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";

const AllEventsPage = () => {
  const router = useRouter();
  const events = getAllEvents();

  const findeEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <div>
      <EventsSearch onSearch={findeEventsHandler} />
      <EventList items={events} />
    </div>
  );
};

export default AllEventsPage;
