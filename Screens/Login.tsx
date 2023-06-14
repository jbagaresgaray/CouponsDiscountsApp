import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useRef } from "react";
import AppButton from "../components/AppButton";
import { useNavigation } from "@react-navigation/native";
import {
  COLORS,
  CONFETTI_COLORS,
  FONT_REGULAR,
  FONT_SEMIBOLD,
} from "../themes";
import Confetti from "react-native-confetti";

import LogoSVG from "../assets/svg/logo.svg";

const LoginScreen = () => {
  const navigation = useNavigation();
  const _confettiView = useRef<any>();

  useEffect(() => {
    if (_confettiView.current) {
      _confettiView.current?.startConfetti();
    }

    return () => {
      if (_confettiView.current) {
        _confettiView.current?.stopConfetti();
      }
    };
  }, []);

  return (
    <View style={styles.MainContainer}>
      <View
        style={{
          flex: 1,
        }}
      />
      <Confetti colors={CONFETTI_COLORS} ref={_confettiView} untilStopped />
      <View style={styles.SVGContainer}>
        <LogoSVG />
      </View>
      <View
        style={{
          flex: 1,
        }}
      />
      <View style={styles.FooterContainer}>
        <Text style={styles.titleStyle}>Login</Text>
        <Text style={styles.subTitleStyle}>
          Welcome back, login to continue!
        </Text>
        <View style={styles.SocialViewContainer}>

        </View>
        <AppButton
          containerStyle={styles.ButtonContainer}
          label="Login to my Account"
        />
        <AppButton
          containerStyle={styles.ButtonContainer1}
          clear
          label="Signup for New Account"
        />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    position: "relative",
    backgroundColor: COLORS.white,
  },
  titleStyle: {
    ...FONT_SEMIBOLD,
    fontSize: 20,
    color: COLORS.dark,
    textAlign: "center",
    marginBottom: 20,
    marginTop: 60,
  },
  subTitleStyle: {
    ...FONT_REGULAR,
    fontSize: 12,
    lineHeight: 20,
    textAlign: "center",
    color: COLORS.medium,
  },
  SVGContainer: {
    justifyContent: "center",
    alignItems: "center",
    // position: "absolute",
    // left: 0,
    // top: 0,
    // right: 0,
  },
  FooterContainer: {
    marginHorizontal: 20,
  },
  SocialViewContainer: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  SocialButtonContainer: {
    width: "100%",
  },
  ButtonContainer: {
    marginTop: 30,
    marginBottom: 10,
  },
  ButtonContainer1: {
    marginBottom: 40,
  },
});
