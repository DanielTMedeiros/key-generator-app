import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <Image
            source={require("./assets/logo-app.png")}
            style={styles.image}
          />
        </View>
        <View>
          <Text>TEXTO AQUI</Text>
          <Button title="Gerar chave aleatória" />
          <Button title="Copiar" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 250,
    width: 250,
    marginTop: -250,
    marginBottom: 18,
  },
});
