import React from "react";
import { View, Text } from "react-native";
import LoginScreen from "./src/screen/LoginScreen";
import SignUpScreen from "./src/screen/SignUpScreen";
import { store, persistor } from "./src/store/index";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
// import { store, persistor } from "@/store";
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={{ backgroundColor: "#FFFFFF70" }}>
          <LoginScreen />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
