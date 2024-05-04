import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [key, SetKey] = useState("Inicial!");

  const generateKey = () => {
    SetKey("Apertado!");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>KEY GENERATOR</Text>
          <Image
            source={require("./assets/logo-app.png")}
            style={styles.image}
          />
        </View>
        <View>
          <Text style={styles.keyText}>{key}</Text>
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
    marginBottom: 50,
    fontSize: 20,
    color: "#0f0f0f",
    fontWeight: "600",
    backgroundColor: "#FAE516",
    borderRadius: 10,
    padding: 5,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "800",
    color: "#fff",
  },
});
