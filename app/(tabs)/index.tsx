import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const GREEN = "#00843D";
const DARK_GREEN = "#006B32";
const LIGHT_GREEN = "#EAF7EF";

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.screen}>
        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
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
            <Text style={styles.searchText}>
              Pesquisar livros, autores, temas...
            </Text>
          </View>

          <View style={styles.banner}>
            <View style={styles.bannerTextArea}>
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
                uri: "https://cdn-icons-png.flaticon.com/512/2232/2232688.png",
              }}
              style={styles.bannerImage}
            />
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Livros em destaque</Text>
            <Text style={styles.seeAll}>Ver todos</Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoryScroll}
          >
            <Text style={[styles.category, styles.categoryActive]}>Todos</Text>
            <Text style={styles.category}>Tecnologia</Text>
            <Text style={styles.category}>Educação</Text>
            <Text style={styles.category}>Ciências</Text>
            <Text style={styles.category}>Gestão</Text>
          </ScrollView>

          <BookCard
            image="https://cdn-icons-png.flaticon.com/512/2721/2721264.png"
            title="Lógica de Programação"
            author="Edécio Fernando Iepsen"
            rating="4.8"
          />

          <BookCard
            image="https://cdn-icons-png.flaticon.com/512/4248/4248443.png"
            title="Banco de Dados"
            author="Elmasri / Navathe"
            rating="4.6"
          />

          <BookCard
            image="https://cdn-icons-png.flaticon.com/512/2920/2920349.png"
            title="Engenharia de Software"
            author="Ian Sommerville"
            rating="4.7"
          />
        </ScrollView>

        <View style={styles.bottomNav}>
          <NavItem icon="🏠" label="Início" active />
          <NavItem icon="📖" label="Meus Livros" />
          <NavItem icon="✍️" label="Empréstimos" />
          <NavItem icon="👤" label="Perfil" />
        </View>
      </View>
    </SafeAreaView>
  );
}

function BookCard({ image, title, author, rating }) {
  return (
    <View style={styles.bookCard}>
      <Image source={{ uri: image }} style={styles.bookImage} />

      <View style={styles.bookInfo}>
        <Text style={styles.bookTitle}>{title}</Text>
        <Text style={styles.bookAuthor}>{author}</Text>

        <View style={styles.bookDetails}>
          <Text style={styles.star}>⭐</Text>
          <Text style={styles.rating}>{rating}</Text>
          <Text style={styles.dot}>●</Text>
          <Text style={styles.available}>Disponível</Text>
        </View>
      </View>

      <Text style={styles.arrow}>›</Text>
    </View>
  );
}

function NavItem({ icon, label, active }) {
  return (
    <TouchableOpacity style={styles.navItem}>
      <Text style={[styles.navIcon, active && styles.navIconActive]}>
        {icon}
      </Text>
      <Text style={[styles.navLabel, active && styles.navLabelActive]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  content: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 22,
    paddingTop: 20,
    paddingBottom: 110,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    fontSize: 15,
    color: "#666666",
    marginTop: 3,
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

  bannerTextArea: {
    flex: 1,
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
    width: 190,
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
    width: 125,
    height: 125,
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

  categoryScroll: {
    marginBottom: 18,
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
  },

  categoryActive: {
    backgroundColor: GREEN,
    color: "#FFFFFF",
  },

  bookCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E1E1E1",
    borderRadius: 18,
    padding: 14,
    marginBottom: 16,
    minHeight: 118,
  },

  bookImage: {
    width: 82,
    height: 82,
    borderRadius: 12,
    marginRight: 16,
    resizeMode: "contain",
  },

  bookInfo: {
    flex: 1,
  },

  bookTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: "#111111",
  },

  bookAuthor: {
    fontSize: 14,
    color: "#666666",
    marginTop: 5,
  },

  bookDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  star: {
    fontSize: 18,
    marginRight: 4,
  },

  rating: {
    fontSize: 15,
    color: GREEN,
    fontWeight: "900",
    marginRight: 16,
  },

  dot: {
    color: GREEN,
    fontSize: 18,
    marginRight: 6,
  },

  available: {
    fontSize: 15,
    color: "#555555",
  },

  arrow: {
    fontSize: 40,
    color: GREEN,
    fontWeight: "300",
    marginLeft: 8,
  },

  bottomNav: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 82,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E2E2E2",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 8,
  },

  navItem: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
  },

  navIcon: {
    fontSize: 28,
    color: "#666666",
  },

  navIconActive: {
    color: GREEN,
  },

  navLabel: {
    fontSize: 12,
    color: "#555555",
    marginTop: 4,
  },

  navLabelActive: {
    color: GREEN,
    fontWeight: "900",
  },
});
