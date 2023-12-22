import { useCallback } from "react";
import { View, Text } from "react-native";
import Swiper from "react-native-swiper";
import TunerNote from "./TunerNote";
import config from "utils/config";
import styles from "./Tuner.scss";

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
  //   const [guitarStrings, setGuitarStrings] = useState(forgeGuitarStrings());
  const guitarStrings = forgeGuitarStrings();

  const handleSwipe = useCallback(() => {
    console.log("swipe");
  }, []);

  return (
    <View style={styles.tuner}>
      <Text>wazzaaaa</Text>
      <Swiper
        style={styles.tunerSwipper}
        showsButtons={true}
        loop={false}
        onIndexChanged={() => handleSwipe()}
      >
        {guitarStrings.map((string) => (
          <View
            key={`string-${string.note}-${string.freq}`}
            style={styles.tunerSwipperItem}
          >
            <TunerNote note={string.note} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default Tuner;
