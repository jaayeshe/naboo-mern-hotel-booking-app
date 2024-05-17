import { Link } from "react-router-dom";

const MyHotels = () => {
  return (
    <div className="space-y-5">
      <span className="flex justify-between">
        <h1 className="text-3xl font-bold">My Hotels</h1>
        <Link
          to="/add-hotel"
          className="flex bg-teal-700 text-white text-xl font-bold p-2 hover:bg-teal-600 "
        >
          Add Hotel
        </Link>
      </span>
    </div>
  );
};

export default MyHotels;
// top level page component
// don't forget to add it to the routes and see if it works
