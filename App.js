import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Tuner from "./components/Tuner";
import AppStyles from "./App.scss";

const App = () => {
  return (
    <View style={AppStyles.container}>
      <Tuner />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
