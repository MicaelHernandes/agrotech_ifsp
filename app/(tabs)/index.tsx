import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native"
import { StatusBar } from "expo-status-bar"
import { router } from "expo-router"

const CATEGORIES = [
  {
    id: "1",
    name: "Irrigação",
    image: require("../../assets/category-irrigation.png"),
    color: "#4CAF50",
    productCount: 12,
  },
  {
    id: "2",
    name: "Ferramentas",
    image: require("../../assets/category-tools.png"),
    color: "#388E3C",
    productCount: 24,
  },
  {
    id: "3",
    name: "Sementes",
    image: require("../../assets/category-seeds.png"),
    color: "#2E7D32",
    productCount: 8,
  },
  {
    id: "4",
    name: "Tratores",
    image: require("../../assets/category-tractors.png"),
    color: "#1B5E20",
    productCount: 6,
  },
]

const FEATURED_CATEGORIES = CATEGORIES.slice(0, 4)

export default function Home() {
  const navigateToCategory = (category) => {
    router.push({
      pathname: "/category/[id]",
      params: {
        id: category.id,
        name: category.name,
      },
    })
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>AgroTech</Text>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.banner}>
          <Image source={require("../../assets/banner.webp")} style={styles.bannerImage} resizeMode="cover" />
          <View style={styles.bannerOverlay}>
            <Text style={styles.bannerText}>Equipamentos de qualidade para o seu agronegócio</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Categorias em Destaque</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.featuredCategories}>
          {FEATURED_CATEGORIES.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[styles.categoryCard, { backgroundColor: category.color }]}
              onPress={() => navigateToCategory(category)}
            >
              <View style={styles.categoryImageContainer}>
                <Image source={category.image} style={styles.categoryImage} resizeMode="cover" />
              </View>
              <Text style={styles.categoryName}>{category.name}</Text>
              <Text style={styles.categoryCount}>{category.productCount} produtos</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Todas as Categorias</Text>
        <View style={styles.categoriesGrid}>
          {CATEGORIES.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={styles.gridCategoryCard}
              onPress={() => navigateToCategory(category)}
            >
              <View style={[styles.gridCategoryIcon, { backgroundColor: category.color }]}>
                <Image source={category.image} style={styles.gridCategoryImage} resizeMode="contain" />
              </View>
              <Text style={styles.gridCategoryName}>{category.name}</Text>
              <Text style={styles.gridCategoryCount}>{category.productCount} produtos</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingBottom: 70,
  },
  header: {
    backgroundColor: "#2E7D32",
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  content: {
    flex: 1,
  },
  banner: {
    height: 180,
    position: "relative",
    marginBottom: 20,
  },
  bannerImage: {
    width: "100%",
    height: "100%",
  },
  bannerOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 15,
  },
  bannerText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E7D32",
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  featuredCategories: {
    paddingLeft: 15,
    marginBottom: 20,
  },
  categoryCard: {
    width: 150,
    height: 180,
    marginRight: 15,
    borderRadius: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    justifyContent: "space-between",
  },
  categoryImageContainer: {
    height: 100,
    width: "100%",
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryImage: {
    width: "80%",
    height: "80%",
  },
  categoryName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  categoryCount: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.8)",
  },
  categoriesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  gridCategoryCard: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    margin: "1%",
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  gridCategoryIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  gridCategoryImage: {
    width: "60%",
    height: "60%",
    tintColor: "#FFFFFF",
  },
  gridCategoryName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 4,
  },
  gridCategoryCount: {
    fontSize: 12,
    color: "#757575",
  },
})

