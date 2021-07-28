import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  ScrollView
} from "react-native";
import CategoryType from "./components/CategoryType";
import Message from "./components/Message";
import allMessages from "./messages.json";

const messageTypes = [
  "Bid Submitted",
  "Work Scheduled",
  "Payment Received",
  "Payment Failed"
];

const App = () => {
  const [filterCat, setFilterCat] = useState([...allMessages]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState([])

  const filterCategories = category => {
    setFilterCat(() => {
      return allMessages.filter(message => category.includes(message.type));
    });
  };

  const close = () => {
    setModalVisible(!modalVisible);
    filterCategories(selectedCategory);
  }

  const showAll = () => {
    setModalVisible(!modalVisible);
    setFilterCat([...allMessages])
    setSelectedCategory([]);
  }


  return (
    <View style={styles.outer}>
      <View>
        <Modal
          animationType="fade"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.explainer}>Filter by Catagory</Text>
              {messageTypes.map(type => (
                <CategoryType
                  key={type}
                  type={type}
                  filterCategories={filterCategories}
                  setSelectedCategory={setSelectedCategory}
                  selectedCategory={selectedCategory}
                />
              ))}
              <View style={styles.buttonLayout}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={close}
                >
                  <Text style={styles.textStyle}>Filter</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={showAll}
                >
                  <Text style={styles.textStyle}>Show All</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Catagories</Text>
        </Pressable>
      </View>
      <ScrollView>
        <View style={styles.scrollDiv}>
          {filterCat.map(words => (
            <View key={Math.random().toString()}>
              <Message words={words} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  outer: {
    marginTop: 50
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: "45%"
  },
  buttonOpen: {
    backgroundColor: "#F194FF"
  },
  buttonClose: {
    backgroundColor: "#2196F3"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 3,
    padding: 2
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  explainer: {
    fontSize: 20,
    borderBottomWidth: 2,
    borderBottomColor: "black",
    paddingBottom: 3
  },
  scrollDiv: {
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10
  },
  buttonLayout: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "60%",
    marginTop: 7
  }

});

export default App;
