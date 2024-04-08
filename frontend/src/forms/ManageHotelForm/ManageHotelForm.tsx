import { FormProvider, useForm } from "react-hook-form";

export type HotelFormData = {
  name: string;
  city: string;
  country: string;
  description: string;
  type: string;
  pricePerNight: number;
  starRating: number;
  facilities: string[];
  imageFiles: FileList;
  adultCount: number;
  childCount: number;
};

const ManageHotelForm = () => {
  const formMethods = useForm<HotelFormData>();
  return;
  <FormProvider {...formMethods}>
    <form></form>;
  </FormProvider>;
};

export default ManageHotelForm;

// we need to use a Form Provider, so our child component can access to all the React Hook Form Methods
//
