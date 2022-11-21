import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { PostArrow, Post } from "./components/Post";

const StateExample = () => {
  let exString = "Hello";
  //setExString("Yooo");
  //exString = "Yooo";
  //setExString((prevString) => prevString + "Yooo")
  //print() -> "Yooo"

  //setState(1);
  // setState(2);
  // setState(3)
  // Ok I'm ready update to state
  // x = 3

  // let nameInput = "Starting text";
  const [nameInput, setNameInput] = useState("Starting text");

  // console.log(useState("initial value"));
  let exampleStateArray = useState();
  console.log("example state array: " + exampleStateArray);
  let stateVar = exampleStateArray[0];
  let stateFunc = exampleStateArray[1];
  console.log("stateVar: " + stateVar);
  console.log("stateFunc: " + stateFunc);

  let staticText = "I am static";

  const [counter, setCounter] = useState(1);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter text here"
        // onChangeText={(newTextValue) => (nameInput = newTextValue)}
        onChangeText={(newTextValue) => setNameInput(newTextValue)}
      />

      <Text>Name: {nameInput}</Text>
      <Text>{staticText}</Text>

      <Text>Counter: {counter}</Text>
      <Button
        title="Increment Counter"
        onPress={() => {
          setCounter(5);
          setCounter((prevCounter) => {
            console.log("counter: " + counter);
            console.log("prevCounter: " + prevCounter);
            if (prevCounter == 3) {
              /* ALWAYS USE VARIABLE PASSED INTO ARROW FUNCTION OF SET STATE, 
              DON'T USE THE ACTUAL STATE VARIABLE IN THE FUNCTION
              IT MIGHT NOT BE UP TO DATE SINCE STATE IS UPDATED ASYNCRONOUSLY! */
              //(counter == 3) {
              console.log("You won!");
            }
            return prevCounter + 1;
          });
        }}
      />
    </View>
  );
};

export let allDict = {};

const DictionaryExample = () => {
  let dict = {};
  console.log("dict: " + dict);
  dict["react native"] = "a hybrid mobile development framework";
  console.log("the definition of react native is: " + dict["react native"]);
  console.log("the definition of react is: " + dict["react"]);

  dict.javascript = "programming language used in web dev etc";
  console.log("javascript is: " + dict.javascript);

  dict = {
    ...dict,
    javascript: "programming language for web and hybrid", //update existing values
    css: "used to style", //add new key value pairs
  };
  console.log("the definition of react native is: " + dict["react native"]);
  console.log("**new** javascript is: " + dict.javascript);
  console.log("css is: " + dict.css);

  // const [bioDict, setBioDict] = useState({}); //initializes with an empty dictionary
  const [bioDict, setBioDict] = useState({
    name: "Zeyana",
    email: "zeyana.a@gmail.com",
  }); //initialized dictionary with values

  const [emailInput, setEmailInput] = useState("");

  return (
    <View style={styles.container}>
      <Text>Dictionary Example</Text>

      <Text>Name: {bioDict.name}</Text>
      <Text>Email: {bioDict["email"]}</Text>
      <TextInput
        placeholder="Enter new email (updates dict every time changes)"
        onChangeText={(newEmail) => setBioDict({ ...bioDict, email: newEmail })}
      />
      <TextInput
        placeholder="Enter new email"
        onChangeText={(newEmail) => setEmailInput(newEmail)}
      />
      <Button
        title="Update Email"
        onPress={() => setBioDict({ ...bioDict, email: emailInput })}
      />
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Post title={"First post"} body="Body of the first post" />
      <Post title={"Second post"} body="Body of the second post" />
      <Post title={"Third special post"} body="Body of the 3th post" />
      <PostArrow title={"Fourth special post"} body="Body of the 4th post" />
    </View>
  );
  // return <DictionaryExample />;
  // return DictionaryExample();
  // return StateExample();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});
