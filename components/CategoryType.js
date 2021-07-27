import React, { useState } from 'react';
import { View, Text, StyleSheet } from "react-native";

const CategoryType = ({ type }) => {
  const [clicked, setClicked] = useState(false);

  const switchActive = () => {
    setClicked(prev => !prev);
  }

  return (
    <View style={styles.category}>
      <Text
        onPress={switchActive}
        style={clicked ? [styles.list, styles.active] : styles.list}
      >
        {type}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  category: {
    marginVertical: 5,
  },
  list: {
    fontSize: 20,
  },
  active: {
    backgroundColor: "red",
  }
})

export default CategoryType;