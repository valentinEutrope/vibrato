import { Text, View } from "react-native";
import styles from "./TunerNote.scss";
// import PropTypes from "prop-types";

const TunerNote = ({ note }) => {
  return (
    <View style={styles.tunerNote}>
      <Text>{note}</Text>
    </View>
  );
};

// TunerNote.propTypes = {
//   note: PropTypes.string.required,
// };

export default TunerNote;
