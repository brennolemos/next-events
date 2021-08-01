import { getFeaturedEvents } from "../dummy-data";

const Homepage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default Homepage;
