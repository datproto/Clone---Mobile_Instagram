import { View, Text, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SignedInStack from "./navigation";
import HomeScreen from "./screens/HomeScreen";
import NewPostScreen from "./screens/NewPostScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <SignedInStack />
    </SafeAreaProvider>
  );
}
