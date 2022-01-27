import AuthNavigation from "./authNavigation";

import { LogBox } from "react-native";

export default function App() {
  LogBox.ignoreLogs([
    "Setting a timer",
    "Remote debugger is in a background tab",
  ]);
  return <AuthNavigation />;
}
