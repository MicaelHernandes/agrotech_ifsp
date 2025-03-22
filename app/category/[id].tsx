import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useLocalSearchParams, router } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const PRODUCTS_BY_CATEGORY = {
  "1": [
    // Irrigation
    {
      id: "101",
      name: "Sistema de Irrigação por Gotejamento",
      price: 1200,
      image: require("../../assets/category-irrigation.png"),
    },
    {
      id: "102",
      name: "Aspersor Rotativo",
      price: 350,
      image: require("../../assets/category-irrigation.png"),
    },
    {
      id: "103",
      name: "Controlador de Irrigação",
      price: 780,
      image: require("../../assets/category-irrigation.png"),
    },
    {
      id: "104",
      name: "Kit de Irrigação para Horta",
      price: 450,
      image: require("../../assets/category-irrigation.png"),
    },
  ],
  "2": [
    {
      id: "201",
      name: "Conjunto de Ferramentas Manuais",
      price: 850,
      image: require("../../assets/category-tools.png"),
    },
    {
      id: "202",
      name: "Motosserra Profissional",
      price: 1500,
      image: require("../../assets/category-tools.png"),
    },
    {
      id: "203",
      name: "Roçadeira a Gasolina",
      price: 1200,
      image: require("../../assets/category-tools.png"),
    },
    {
      id: "204",
      name: "Pulverizador Costal",
      price: 380,
      image: require("../../assets/category-tools.png"),
    },
  ],
  "3": [
    // Seeds
    {
      id: "301",
      name: "Sementes de Milho (5kg)",
      price: 120,
      image: require("../../assets/category-seeds.png"),
    },
    {
      id: "302",
      name: "Sementes de Soja (10kg)",
      price: 220,
      image: require("../../assets/category-seeds.png"),
    },
    {
      id: "303",
      name: "Sementes de Trigo (5kg)",
      price: 150,
      image: require("../../assets/category-seeds.png"),
    },
    {
      id: "304",
      name: "Sementes de Hortaliças (Kit)",
      price: 80,
      image: require("../../assets/category-seeds.png"),
    },
  ],
  "4": [
    // Tractors
    {
      id: "401",
      name: "Trator Compacto 25HP",
      price: 45000,
      image: require("../../assets/category-tractors.png"),
    },
    {
      id: "402",
      name: "Trator Agrícola 75HP",
      price: 120000,
      image: require("../../assets/category-tractors.png"),
    },
    {
      id: "403",
      name: "Mini Trator Multifuncional",
      price: 35000,
      image: require("../../assets/category-tractors.png"),
    },
    {
      id: "404",
      name: "Implemento para Trator - Arado",
      price: 8500,
      image: require("../../assets/category-tractors.png"),
    },
  ],
};

export default function CategoryDetail() {
  const { id, name } = useLocalSearchParams();
  const insets = useSafeAreaInsets();
  const categoryId = Array.isArray(id) ? id[0] : id;
  const categoryName = Array.isArray(name) ? name[0] : name;

  const products = PRODUCTS_BY_CATEGORY[categoryId] || [];

  const renderProduct = ({ item }) => (
    <TouchableOpacity style={styles.productCard}>
      <View style={styles.productImageContainer}>
        <Image
          source={item.image}
          style={styles.productImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>
          R$ {item.price.toLocaleString("pt-BR")}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft color="#FFFFFF" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{categoryName}</Text>
      </View>

      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.productList}
        numColumns={2}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              Nenhum produto encontrado nesta categoria
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    backgroundColor: "#2E7D32",
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  productList: {
    padding: 10,
  },
  productCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    overflow: "hidden",
  },
  productImageContainer: {
    height: 140,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9F9F9",
  },
  productImage: {
    width: "80%",
    height: "80%",
  },
  productInfo: {
    padding: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2E7D32",
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  emptyText: {
    fontSize: 16,
    color: "#757575",
  },
});
