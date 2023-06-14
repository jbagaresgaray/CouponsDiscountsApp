import { View, Text } from "react-native";
import React, { useEffect, useRef } from "react";

import WelcomeSVG from "../assets/svg/welcome.svg";
import { StyleSheet } from "react-native";
import {
  COLORS,
  CONFETTI_COLORS,
  FONT_REGULAR,
  FONT_SEMIBOLD,
} from "../themes";
import AppButton from "../components/AppButton";
import useStatusBarHeight from "../hooks/useStatusBarHeight";
import { useNavigation } from "@react-navigation/native";
import Confetti from "react-native-confetti";

const WelcomeScreen = () => {
  const top = useStatusBarHeight();
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
      <View style={styles.FooterContainer}>
        <View style={styles.SVGContainer}>
          <WelcomeSVG />
        </View>
        <Text style={styles.titleStyle}>Cheers to Discounts!</Text>
        <Text style={styles.subTitleStyle}>
          Curabitur lobortis id lorem id bibendum. Ut id consectetur magna.
          Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at.
        </Text>
        <AppButton
          containerStyle={styles.ButtonContainer}
          label="Get Started"
          onPress={() => navigation.navigate("Onboarding")}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
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
    // position: "absolute",
    left: -40,
  },
  FooterContainer: {
    position: "relative",
    marginHorizontal: 20,
  },
  ButtonContainer: {
    marginTop: 60,
    marginBottom: 30,
  },
});
