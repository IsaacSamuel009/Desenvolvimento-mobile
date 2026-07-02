import { StyleSheet, Text, View } from "react-native";

const GREEN = "#00843D";
const DARK_GREEN = "#006B32";
const LIGHT_GREEN = "#EAF7EF";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.logo}>IFMA</Text>
          <Text style={styles.title}>Biblioteca IFMA</Text>
          <Text style={styles.subtitle}>Seu conhecimento começa aqui</Text>
        </View>

        <View style={styles.notification}>
          <Text style={styles.notificationIcon}>🔔</Text>
        </View>
      </View>

      <View style={styles.searchBox}>
        <Text style={styles.searchIcon}>🔍</Text>
        <Text style={styles.searchText}>Pesquisar livros, autores, temas...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 24,
  },

  logo: {
    fontSize: 22,
    fontWeight: "900",
    color: DARK_GREEN,
    marginBottom: 8,
  },

  title: {
    fontSize: 30,
    fontWeight: "900",
    color: GREEN,
  },

  subtitle: {
    fontSize: 16,
    color: "#666666",
    marginTop: 5,
  },

  notification: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: GREEN,
    justifyContent: "center",
    alignItems: "center",
  },

  notificationIcon: {
    fontSize: 22,
  },

  searchBox: {
    height: 58,
    borderWidth: 1.5,
    borderColor: GREEN,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    marginBottom: 26,
  },

  searchIcon: {
    fontSize: 22,
    marginRight: 10,
  },

  searchText: {
    fontSize: 16,
    color: "#888888",
  },
});
