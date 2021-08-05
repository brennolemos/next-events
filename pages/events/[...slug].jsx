import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";

const FilteredEventsPage = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p>Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return <p>Invalid filters. Please adjust your values!</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found for the chosen filters!</p>;
  }
  return (
    <div>
      <h1>Filtered Events</h1>
    </div>
  );
};

export default FilteredEventsPage;
