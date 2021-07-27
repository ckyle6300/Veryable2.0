import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Message = ({ words }) => {
  return (
    <View style={styles.outer}>
      <Text style={styles.title}>{words.subject}</Text>
      <Text style={styles.title}>{words.type}</Text>
      <Text style={styles.title}>{words.body}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  outer: {
    display: "flex",
    justifyContent: 'center',
    width: "80%",
    marginTop: 15,
    backgroundColor: 'grey',
    padding: 10
  },
  title: {
    fontSize: 22,
    marginVertical: 5
  },
  category: {
    fontSize: 18,
    marginVertical: 5
  },
  subj: {
    fontSize: 18,
    marginVertical: 5
  }

})

export default Message;