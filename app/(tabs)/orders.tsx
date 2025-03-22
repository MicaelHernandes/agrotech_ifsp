import { View, Text, StyleSheet, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";

const ORDERS = [
  { id: "1", date: "15/03/2024", status: "Entregue", total: 1250 },
  { id: "2", date: "02/03/2024", status: "Em trânsito", total: 4500 },
  { id: "3", date: "25/02/2024", status: "Processando", total: 780 },
  { id: "4", date: "10/02/2024", status: "Entregue", total: 2300 },
];

export default function Orders() {
  const renderOrder = ({ item }) => (
    <View style={styles.orderCard}>
      <View style={styles.orderHeader}>
        <Text style={styles.orderId}>Pedido #{item.id}</Text>
        <Text
          style={[
            styles.orderStatus,
            item.status === "Entregue"
              ? styles.statusDelivered
              : item.status === "Em trânsito"
              ? styles.statusInTransit
              : styles.statusProcessing,
          ]}
        >
          {item.status}
        </Text>
      </View>
      <View style={styles.orderDetails}>
        <Text style={styles.orderDate}>Data: {item.date}</Text>
        <Text style={styles.orderTotal}>
          Total: R$ {item.total.toLocaleString("pt-BR")}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Meus Pedidos</Text>
      </View>
      <FlatList
        data={ORDERS}
        renderItem={renderOrder}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.ordersList}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Você ainda não tem pedidos</Text>
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
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  ordersList: {
    padding: 15,
  },
  orderCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginBottom: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  orderHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  orderId: {
    fontSize: 16,
    fontWeight: "bold",
  },
  orderStatus: {
    fontSize: 14,
    fontWeight: "500",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusDelivered: {
    backgroundColor: "#E8F5E9",
    color: "#2E7D32",
  },
  statusInTransit: {
    backgroundColor: "#E3F2FD",
    color: "#1976D2",
  },
  statusProcessing: {
    backgroundColor: "#FFF8E1",
    color: "#FFA000",
  },
  orderDetails: {
    borderTopWidth: 1,
    borderTopColor: "#EEEEEE",
    paddingTop: 10,
  },
  orderDate: {
    fontSize: 14,
    color: "#757575",
    marginBottom: 5,
  },
  orderTotal: {
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
