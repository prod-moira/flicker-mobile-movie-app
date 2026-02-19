import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{
        fontSize: 60,
        fontFamily: 'Times New Roman',
        fontStyle: 'italic',
        fontWeight: 600
      }}>flicker</Text>
    </View>
  );
}
