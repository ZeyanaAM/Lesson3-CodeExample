import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import PostArrow, { Post } from "./components/Post";
import { DictionaryExample } from "./components/DictionaryExample";
import { StateExample } from "./components/StateExample";

const PostExample = () => {
  return (
    <View style={styles.container}>
      <Post title={"First post"} body="Body of the first post" />
      <Post title={"Second post"} body="Body of the second post" />
      <Post title={"Third special post"} body="Body of the 3th post" />
      <PostArrow title={"Fourth special post"} body="Body of the 4th post" />
    </View>
  );
};

export default function App() {
  /** Can uncomment relevant example to see it running on device */
  return <PostExample />;
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
