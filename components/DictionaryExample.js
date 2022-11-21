import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export let allDict = {};

export const DictionaryExample = () => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});
