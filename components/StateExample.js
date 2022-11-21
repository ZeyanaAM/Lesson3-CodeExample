import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export const StateExample = () => {
  let exString = "Hello";
  //setExString("Yooo");
  //exString = "Yooo";
  //print(exString) -> "Yooo"
  //setExString((prevString) => prevString + "Yooo") //need to do this way if want explicit concatenation

  // setState(1);
  // setState(2);
  // setState(3)
  // Ok I'm ready update to state
  // x = 3 //rerenders only final value, instead of flashing multiple temporary values

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});
