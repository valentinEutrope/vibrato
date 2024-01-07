import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import styles from "./TunerFreq.scss";

const TunerFreq = ({ freq, currentFreq }) => {
  return (
    <View style={styles.tunerFreq}>
      <Text style={styles.tunerFreq__expectedFreq}>Expected: {freq}Hz</Text>
      <Text style={styles.tunerFreq__currentFreq}>
        Current: {currentFreq}Hz
      </Text>
    </View>
  );
};

TunerFreq.propTypes = {
  freq: PropTypes.string.isRequired,
  currentFreq: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default TunerFreq;
