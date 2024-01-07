import { Text, View } from "react-native";
import PropTypes from "prop-types";
import styles from "./TunerNote.scss";

const TunerNote = ({ note }) => {
  return (
    <View style={styles.tunerNote}>
      <Text style={styles.tunerNote__currentNote}>{note}</Text>
    </View>
  );
};

TunerNote.propTypes = {
  note: PropTypes.string.isRequired,
};

export default TunerNote;
