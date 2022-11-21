import { Text, View } from "react-native";

export function Post(props) {
  return (
    <View style={{ margin: 20, backgroundColor: "white" }}>
      <Text>{props.title}</Text>
      <Text>{props.body}</Text>
    </View>
  );
}

export const PostArrow = ({ title, body }) => {
  return (
    <View style={{ margin: 20, backgroundColor: "grey" }}>
      <Text>{title}</Text>
      <Text>{body}</Text>
    </View>
  );
};
