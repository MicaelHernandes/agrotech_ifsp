import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  User,
  CreditCard,
  MapPin,
  Bell,
  HelpCircle,
  LogOut,
} from "lucide-react-native";

export default function Settings() {
  const renderSettingItem = (icon, title, subtitle) => (
    <TouchableOpacity style={styles.settingItem}>
      <View style={styles.settingIcon}>{icon}</View>
      <View style={styles.settingContent}>
        <Text style={styles.settingTitle}>{title}</Text>
        {subtitle && <Text style={styles.settingSubtitle}>{subtitle}</Text>}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Configurações</Text>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.profileSection}>
          <View style={styles.profilePicture}>
            <Text style={styles.profileInitial}>J</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>João Silva</Text>
            <Text style={styles.profileEmail}>joao.silva@email.com</Text>
          </View>
        </View>

        <View style={styles.settingsSection}>
          <Text style={styles.sectionTitle}>Conta</Text>
          {renderSettingItem(
            <User size={22} color="#2E7D32" />,
            "Informações Pessoais"
          )}
          {renderSettingItem(
            <CreditCard size={22} color="#2E7D32" />,
            "Métodos de Pagamento"
          )}
          {renderSettingItem(
            <MapPin size={22} color="#2E7D32" />,
            "Endereços de Entrega"
          )}
        </View>

        <View style={styles.settingsSection}>
          <Text style={styles.sectionTitle}>Preferências</Text>
          {renderSettingItem(
            <Bell size={22} color="#2E7D32" />,
            "Notificações"
          )}
        </View>

        <View style={styles.settingsSection}>
          <Text style={styles.sectionTitle}>Suporte</Text>
          {renderSettingItem(
            <HelpCircle size={22} color="#2E7D32" />,
            "Ajuda e Suporte"
          )}
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <LogOut size={20} color="#D32F2F" />
          <Text style={styles.logoutText}>Sair da Conta</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
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
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 20,
    marginBottom: 15,
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  profileInitial: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: "#757575",
  },
  settingsSection: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginBottom: 15,
    paddingVertical: 10,
    marginHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2E7D32",
    marginHorizontal: 15,
    marginVertical: 10,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  settingIcon: {
    width: 40,
    alignItems: "center",
  },
  settingContent: {
    flex: 1,
    marginLeft: 10,
  },
  settingTitle: {
    fontSize: 16,
  },
  settingSubtitle: {
    fontSize: 14,
    color: "#757575",
    marginTop: 2,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 15,
    marginVertical: 20,
    padding: 15,
    borderRadius: 8,
  },
  logoutText: {
    color: "#D32F2F",
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 10,
  },
});
