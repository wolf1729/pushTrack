import { Provider } from "react-redux";
import { store } from "./State/store";
import AuthenticationScreen from "./Screens/authenticationScreen";

export default function App() {
  return (
    <>
    <Provider store={store}>
      <AuthenticationScreen />
    </Provider>
    </>
  );
}

