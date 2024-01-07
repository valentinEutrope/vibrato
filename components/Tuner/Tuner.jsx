import { useCallback, useMemo, useState } from "react";
import { View, Text } from "react-native";
import TunerNote from "./TunerNote";
import styles from "./Tuner.scss";
import config from "utils/config";
import TunerFreq from "./TunerFreq";

const forgeGuitarStrings = () => {
  const strings = config.guitarStrings;

  if (strings && strings.length) {
    return config.guitarStrings.map((string) => ({
      note: string.note,
      freq: string.freq,
      currentFreq: null,
    }));
  }

  return [];
};

const Tuner = () => {
  const guitarStrings = useMemo(() => {
    return forgeGuitarStrings();
  }, []);

  const [currentString, setCurrentString] = useState(guitarStrings[0]);
  const [currentFreq, setCurrentFreq] = useState(0);

  const handleSwipe = useCallback(() => {
    console.log("swipe");
  }, []);

  return (
    <View style={styles.tuner}>
      <TunerNote note={currentString.note} />
      <TunerFreq freq={currentString.freq} currentFreq={currentFreq} />
    </View>
  );
};

export default Tuner;
