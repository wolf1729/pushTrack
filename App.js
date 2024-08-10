import { Provider } from "react-redux";
import { store } from "./State/store";

export default function App() {
  return (
    <>
    <Provider store={store}>
      
    </Provider>
    </>
  );
}

