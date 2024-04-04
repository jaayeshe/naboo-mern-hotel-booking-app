import React, { useContext, useState } from "react";
import Toast from "../components/Toast";
import { useQuery } from "react-query";
import * as apiClient from "../api-client";

type ToastMessage = {
  message: string;
  type: "SUCCESS" | "ERROR";
};
//appContext describes the different things that we are exposing to our component
type AppContext = {
  showToast: (toastMessage: ToastMessage) => void;
  isLoggedIn: boolean;
};

const AppContext = React.createContext<AppContext | undefined>(undefined);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  //delcare a state obj which holds the state the of the toast, if it's been displayed or not
  const [toast, setToast] = useState<ToastMessage | undefined>(undefined);

  //it's going to call our validateToken endpoint using our apiClient & it's going
  //to return if there is an error or not
  const { isError } = useQuery("validateToken", apiClient.validateToken, {
    retry: false,
  });

  return (
    <AppContext.Provider
      value={{
        showToast: (toastMessage) => {
          setToast(toastMessage);
        },
        isLoggedIn: !isError,
      }}
    >
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(undefined)}
        />
      )}
      {children}
    </AppContext.Provider>
  );
};
//create a hook that lets our components easily access the provider
export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContext;
};
//firstly we will define a type where our context that holds all the properties
//that we are going to expose to our components
//basically all the things that our components can access
