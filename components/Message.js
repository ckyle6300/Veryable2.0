import React from "react";
import {Text, View, StyleSheet} from "react-native";

const Message = ({words}) => {
  return (
    <View style={styles.outer}>
      <Text style={styles.title}>{words.subject}</Text>
      <Text style={styles.category}>{words.type}</Text>
      <Text style={styles.subj}>{words.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  outer: {
    display: "flex",
    justifyContent: "center",
    width: "80%",
    borderRadius: 20,
    padding: 35,
    borderWidth: 1,
    marginVertical: 5
  },
  title: {
    fontSize: 22,
    marginVertical: 5,
    fontWeight: "bold"
  },
  category: {
    fontSize: 18,
    marginVertical: 5
  },
  subj: {
    fontSize: 18,
    marginVertical: 5
  }
});

export default Message;
