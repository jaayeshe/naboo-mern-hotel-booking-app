import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import * as apiClient from "../api-client";
import { BsBuildingFill, BsMapFill } from "react-icons/bs";
import { BiHotel, BiMoney } from "react-icons/bi";

const MyHotels = () => {
  const { data: hotelData } = useQuery(
    "fetchMyHotels",
    apiClient.fetchMyHotels,
    {
      onError: () => {},
    }
  );
  if (!hotelData) {
    return <span>No Hotels Found</span>;
  }
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
      <div className="grid grid-cols-1 gap-8">
        {hotelData.map((hotel) => (
          <div className="flex flex-col justify-between border border-slate-300 rounded-lg p-8 gap-5">
            <h2 className="text-2xl font-bold">{hotel.name}</h2>
            <div className="whitespace-pre-line">{hotel.description}</div>
            <div className="grid grid-cols gap-2">
              <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                <BsMapFill className="mr-1" />
                {hotel.city}, {hotel.country}
              </div>

              <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                <BsBuildingFill className="mr-1" />
                {hotel.type}
              </div>

              <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                <BiMoney className="mr-1" />${hotel.pricePerNight} per night
              </div>

              <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                <BiHotel className="mr-1" />
                {hotel.adultCount} adults
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyHotels;
// top level page component
// don't forget to add it to the routes and see if it works

// make the fetch request to fetch our hotels

// whenever we call the useQuery hook it will give the response body and a variable called data

// hotel type,
// price per night,
// no. of children, adults,
// hotel star rating
