import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [key, setKey] = useState("Estado Inicial!");
  const [style, setStyle] = useState(styles.keyText);

  //Funcao chamada em generateKey onde embaralha o array utilizando o algoritmo Fisher-Yates
  const shuffle = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  /*funcao que gera a chave aleatoria com base nos caracteres informados nas 3 constantes.
  Serão gerados no mínimo um caractere aleatorio maiusculo e um caractere aleatorio especial
  e os demais de forma aleatoria dentro dos disponiveis em characters.
  em seguida embaralha o array e depois converte para string */
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
    for (let index = 0; index < 8; index++) {
      result.push(
        characters.charAt(Math.floor(Math.random() * characters.length))
      );
    }
    let finalResult = shuffle(result);
    const finalKey = finalResult.join("");

    setKey(finalKey);
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
          <Button title="🔑 Generate Key" onPress={generateKey} />
          <Button title="🔗 Copy" />
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
