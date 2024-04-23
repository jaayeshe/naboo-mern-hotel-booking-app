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

  const handleSave = (HotelFormData: FormData) => {
    mutate(HotelFormData);
  };
  return <ManageHotelForm onSave={handleSave} />;
};
export default AddHotel;
//component for our new page

//this is where we define our page component & render our ManageHotelForm in here

// we're going to use the useMutation to call our addHotel endpoint, and pass in our fetch function named apiClient

// creating fetch request
