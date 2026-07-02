import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const GREEN = "#00843D";
const DARK_GREEN = "#006B32";
const LIGHT_GREEN = "#EAF7EF";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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

        <View style={styles.banner}>
          <View>
            <Text style={styles.bannerTitle}>Explore nossa biblioteca</Text>
            <Text style={styles.bannerSubtitle}>
              Milhares de títulos disponíveis para você!
            </Text>

            <TouchableOpacity style={styles.bannerButton}>
              <Text style={styles.bannerButtonText}>Ver acervo</Text>
            </TouchableOpacity>
          </View>

          <Image
            source={{
              uri: "https://res.cloudinary.com/printstore/image/upload/c_thumb,f_auto,g_auto,h_627,q_auto,w_1200/g%C3%AAneros-de-livros.jpg?_a=BAMADKTE0",
            }}
            style={styles.bannerImage}
          />
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Livros em destaque</Text>
          <Text style={styles.seeAll}>Ver todos</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Text style={[styles.category, styles.categoryActive]}>Todos</Text>
          <Text style={styles.category}>Tecnologia</Text>
          <Text style={styles.category}>Educação</Text>
          <Text style={styles.category}>Ciências</Text>
          <Text style={styles.category}>Gestão</Text>
        </ScrollView>
      </ScrollView>
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

  banner: {
    backgroundColor: GREEN,
    borderRadius: 18,
    padding: 20,
    minHeight: 180,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 28,
  },

  bannerTitle: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "900",
    width: 190,
  },

  bannerSubtitle: {
    color: "#FFFFFF",
    fontSize: 16,
    marginTop: 12,
    width: 180,
    lineHeight: 23,
  },

  bannerButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
    alignSelf: "flex-start",
    marginTop: 18,
  },

  bannerButtonText: {
    color: GREEN,
    fontSize: 15,
    fontWeight: "800",
  },

  bannerImage: {
    width: 110,
    height: 110,
    resizeMode: "contain",
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "900",
    color: "#111111",
  },

  seeAll: {
    color: GREEN,
    fontSize: 16,
    fontWeight: "800",
  },

  category: {
    backgroundColor: "#EFEFEF",
    color: "#555555",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 22,
    fontSize: 15,
    fontWeight: "600",
    marginRight: 10,
    marginBottom: 18,
  },

  categoryActive: {
    backgroundColor: GREEN,
    color: "#FFFFFF",
  },
});
