import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView } from "react-native";
import CategoryType from "./components/CategoryType";
import Message from "./components/Message";
import allMessages from './messages.json';

const messageTypes = ["Bid Submitted", "Work Scheduled", "Payment Received", "Payment Failed"]

const App = () => {

  const [modalVisible, setModalVisible] = useState(false);

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
              <Text style={styles.explainer} >Filter by Catagory</Text>
              {messageTypes.map(type => <CategoryType key={type} type={type} />)}
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
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
          {allMessages.map(words => (
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
    marginTop: 50,
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
    width: '30%'
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 3,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  explainer: {
    fontSize: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    paddingBottom: 3,
  },
  scrollDiv: {
    justifyContent: "center",
    backgroundColor: 'red',
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,

  }

});

export default App;