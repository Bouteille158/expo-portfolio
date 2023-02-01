import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import HorizontalSeparator from "../components/HorizontalSeparator";
import { data } from "./../data";

export default function WelcomeScreen({
  navigation,
}: RootTabScreenProps<"WelcomeScreen">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur mon portfolio</Text>
      <HorizontalSeparator></HorizontalSeparator>
      <Text style={styles.welcomeText}>{data.welcomeText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  welcomeText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
    marginHorizontal: 50,
  },
});
