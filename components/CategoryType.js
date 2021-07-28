import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const CategoryType = ({ type, filterCategories, setSelectedCategory, selectedCategory }) => {
  const [clicked, setClicked] = useState(selectedCategory.includes(type));

  const switchActive = () => {
    setClicked(prev => !prev);
    setSelectedCategory([...selectedCategory, type])
    //need to wait until components rerender to send current selectedCategory to filterCategories
    addToList()
  };

  const addToList = () => {
    filterCategories(selectedCategory);
  }

  const removeFromList = () => {
    let currentList = [...selectedCategory].filter(insideCatagory => insideCatagory !== type);
    setSelectedCategory([...currentList]);
    setClicked(prev => !prev);
  }

  return (
    <View style={styles.category}>
      <Text
        onPress={clicked ? removeFromList : switchActive}
        style={selectedCategory.includes(type) ? styles.active : styles.list}
      >
        {type}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    marginVertical: 5
  },
  list: {
    fontSize: 20
  },
  active: {
    backgroundColor: "#6FB98F",
    fontSize: 20,
    borderRadius: 20,
    padding: 10
  }
});

export default CategoryType;
