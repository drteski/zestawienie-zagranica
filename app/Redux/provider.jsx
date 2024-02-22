"use client";

import { persistor, store } from "@/app/Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

export const StoreProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
