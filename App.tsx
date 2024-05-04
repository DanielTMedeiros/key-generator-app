import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [key, setKey] = useState("Estado Inicial!");
  const [style, setStyle] = useState(styles.keyText);

  const generateKey = () => {
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialChars = "!@#$%&*";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

    let result = [];

    result.push(
      upperCaseChars.charAt(Math.floor(Math.random() * upperCaseChars.length))
    );
    result.push(
      specialChars.charAt(Math.floor(Math.random() * specialChars.length))
    );
    for (let i = 0; i < 10; i++) {
      result.push(
        characters.charAt(Math.floor(Math.random() * characters.length))
      );
    }
    let finalResult = result.sort(() => Math.random() - 0.5).join("");

    setKey(finalResult.toString());
    setStyle(styles.keyTextPressed);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>KEY GENERATOR</Text>
          <Image
            source={require("./assets/logo-app-new.png")}
            style={styles.image}
          />
        </View>
        <View>
          <Text style={style}>{key}</Text>
          <Button title="Gerar chave aleatória" onPress={generateKey} />
          <Button title="Copiar Chave" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f0f",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Roboto",
  },
  image: {
    height: 250,
    width: 250,
    marginBottom: 18,
  },
  keyText: {
    textAlign: "center",
    textAlignVertical: "center",
    marginBottom: 50,
    fontSize: 20,
    color: "#0f0f0f",
    fontWeight: "600",
    backgroundColor: "#FAE516",
    borderRadius: 10,
    padding: 12,
  },

  keyTextPressed: {
    textAlign: "center",
    textAlignVertical: "center",
    marginBottom: 50,
    fontSize: 20,
    color: "#0f0f0f",
    fontWeight: "600",
    backgroundColor: "#4AF947",
    borderRadius: 10,
    padding: 12,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "800",
    color: "#fff",
  },
});
