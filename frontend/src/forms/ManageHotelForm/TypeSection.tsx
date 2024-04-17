import { useFormContext } from "react-hook-form";
import { hotelTypes } from "../../config/hotel-options-config";

const TypesSection = () => {
  const { register, watch } = useFormContext();
  const typeWatch = watch("type");

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3 ">Type</h2>
      <div className="grid grid-cols-5 gap-3">
        {hotelTypes.map((type) => (
          <label
            className={
              typeWatch === type
                ? "cursor-pointer bg-teal-500  rounded-full px-4 py-2 font-semibold "
                : "cursor-pointer bg-gray-300 text-sm rounded-full px-4 py-2 font-semibold"
            }
          >
            <input
              type="radio"
              value={type}
              {...register("type", {
                required: "This field is required",
              })}
              className="hidden"
            />
            <span>{type}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default TypesSection;

// hook into our addHotel form by using useFormContext hook.

// use the register function to track the selected hotel type.

// the div will be the container for the types section.

//display our list of hotelTypes, remember hotelTypes...
//is a string array so we can use the map function on it.

//need to add some text which will be the label of our radio button

//in <span></span> we will render the hotel type
