import { Platform, StatusBar } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export default function useStatusBarHeight() {
  const top =
    Platform.OS === "android" ? StatusBar.currentHeight : getStatusBarHeight();

  return top;
}
