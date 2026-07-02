import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Biblioteca IFMA</Text>
      <Text style={styles.subtitle}>Seu conhecimento começa aqui</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
    justifyContent: "center", // Centraliza o conteúdo na tela (opcional)
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#00843D", // Verde oficial do IFMA
  },

  subtitle: {
    fontSize: 16,
    color: "#666666",
    marginTop: 5,
  },
});