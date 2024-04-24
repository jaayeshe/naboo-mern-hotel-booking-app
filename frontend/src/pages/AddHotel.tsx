import { useMutation } from "react-query";
import ManageHotelForm from "../forms/ManageHotelForm/ManageHotelForm";
import { useAppContext } from "../contexts/AppContext";
import * as apiClient from "../api-client";

const AddHotel = () => {
  const { showToast } = useAppContext();

  const { mutate, isLoading } = useMutation(apiClient.addMyHotel, {
    onSuccess: () => {
      showToast({ message: "Hotel saved", type: "SUCCESS" });
    },
    onError: () => {
      showToast({ message: "Error saving hotel", type: "ERROR" });
    },
  });

  const handleSave = (hotelFormData: FormData) => {
    mutate(hotelFormData);
  };
  return <ManageHotelForm onSave={handleSave} isLoading={isLoading} />;
};
export default AddHotel;

//component for our new page

//this is where we define our page component & render our ManageHotelForm in here

// we're going to use the useMutation to call our addHotel endpoint, and pass in our fetch function named apiClient

//creating fetch request\

// we have linked our fetch request that we created for our useMutation hook to handle all the state and all of that for us
// the handleSave function calls the mutate function, we just to pass these things to our component and join them up
