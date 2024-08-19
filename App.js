import { Provider } from "react-redux";
import { store } from "./State/store";
import AuthenticationScreen from "./Screens/authenticationScreen";
import MainScreen from "./Screens/mainscreen";
import AvatarSelection from "./Screens/avatarSelectionScreen";
import NavigationScreen from "./Screens/navigationScreen";

export default function App() {
  return (
    <>
    <Provider store={store}>
      <NavigationScreen />
    </Provider>
    </>
  );
}

