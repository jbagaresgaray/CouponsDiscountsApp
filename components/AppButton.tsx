import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from "react-native";
import React from "react";
import { COLORS, FONT_SEMIBOLD } from "../themes";

export type AppButtonProps = {
  label?: string;
  alt?: boolean;
  clear?: boolean;
  containerStyle?: ViewStyle;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: (event: GestureResponderEvent) => void;
  image?: React.ReactNode;
};

const AppButton: React.FC<AppButtonProps> = ({
  label,
  alt,
  clear,
  containerStyle,
  buttonStyle,
  textStyle,
  onPress,
  image,
}) => {
  return (
    <View style={containerStyle}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={[
          styles.ButtonStyle,
          buttonStyle,
          clear
            ? styles.ButtonClear
            : alt
            ? styles.ButtonAlt
            : styles.ButtonMain,
        ]}
      >
        {image ? (
          image
        ) : (
          <Text
            style={[
              styles.TextStyle,
              textStyle,
              clear ? styles.TextAlt : alt ? styles.TextAlt : styles.TextMain,
            ]}
          >
            {label}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  ButtonStyle: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    minWidth: 155,
  },
  ButtonClear: {
    backgroundColor: "transparent",
  },
  ButtonMain: {
    backgroundColor: COLORS.primary,
  },
  ButtonAlt: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  TextStyle: {
    ...FONT_SEMIBOLD,
    fontSize: 13,
  },
  TextMain: {
    color: COLORS.white,
  },
  TextAlt: {
    color: COLORS.dark,
  },
});
