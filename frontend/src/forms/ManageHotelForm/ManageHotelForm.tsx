import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";
import TypesSection from "./TypeSection";
import FacilitiesSection from "./FacilitiesSection";
import GuestsSection from "./GuestsSection";
import ImagesSection from "./ImagesSection";

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
  const { handleSubmit } = formMethods;
  // we are destructuring the handleSubmit fucntion from formMethods, which we get from use form hook...
  // so the handleSubmit function will submit the form & handle any validation & then pass the data to...
  // our function which we'll define later.

  const onSubmit = handleSubmit((formData: HotelFormData) => {
    // create a new FormData object & call our API
    console.log(formData);
  });
  return (
    <FormProvider {...formMethods}>
      <form className="flex flex-col gap-10" onSubmit={onSubmit}>
        <DetailsSection />
        <TypesSection />
        <FacilitiesSection />
        <GuestsSection />
        <ImagesSection />
        <span className="flex justify-end">
          <button
            type="submit"
            className="bg-teal-700 text-white p-3 font-bold hover:bg-teal-600 text-xl rounded-xl "
          >
            Save
          </button>
        </span>
      </form>
    </FormProvider>
  );
};

export default ManageHotelForm;

// we need to use a Form Provider,
//so our child component can access to all the React Hook Form Methods
//
