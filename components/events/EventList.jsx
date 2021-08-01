import EventItem from "./EventItem";

const EventList = ({ items }) => {
  return (
    <ul>
      {items.map((event) => (
        <EventItem />
      ))}
    </ul>
  );
};

export default EventList;
