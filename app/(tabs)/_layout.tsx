"use client";

import { Tabs } from "expo-router";
import {
  Home,
  ShoppingBag,
  ClipboardList,
  Settings,
  BoxIcon,
} from "lucide-react-native";
import { View, StyleSheet, Platform } from "react-native";
import { BlurView } from "expo-blur";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useEffect } from "react";

function TabBarIcon({ color, size, icon: Icon, isFocused }) {
  const scale = useSharedValue(1);

  useEffect(() => {
    if (isFocused) {
      scale.value = withSpring(1.2);
    } else {
      scale.value = withSpring(1);
    }
  }, [isFocused]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <View style={styles.iconContainer}>
      <Animated.View style={[animatedStyle]}>
        <Icon size={size} color={color} />
      </Animated.View>
      {isFocused && <View style={styles.indicator} />}
    </View>
  );
}

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  const mainTabs = ["index", "products", "orders", "settings"];

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#2E7D32",
        tabBarInactiveTintColor: "#757575",
        tabBarStyle: {
          height: 70 + (Platform.OS === "ios" ? insets.bottom : 0),
          paddingTop: 10,
          paddingBottom: Platform.OS === "ios" ? insets.bottom : 10,
          backgroundColor: "transparent",
          position: "absolute",
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarBackground: () => (
          <BlurView tint="light" intensity={95} style={StyleSheet.absoluteFill}>
            <View style={styles.tabBarGradient} />
          </BlurView>
        ),
        tabBarItemStyle: {
          paddingVertical: 5,
        },
        tabBarLabelStyle: {
          fontWeight: "600",
          fontSize: 12,
        },
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) => {
          let icon;
          if (route.name === "index") {
            icon = Home;
          } else if (route.name === "products") {
            icon = BoxIcon;
          } else if (route.name === "orders") {
            icon = ShoppingBag;
          } else if (route.name === "settings") {
            icon = Settings;
          }

          return (
            <TabBarIcon
              color={color}
              size={size}
              icon={icon}
              isFocused={focused}
            />
          );
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: "Produtos",
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Pedidos",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Configurações",
        }}
      />
      <Tabs.Screen
        name="category/[id]"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarGradient: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: "rgba(230, 230, 230, 0.5)",
    borderWidth: 1,
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 30,
  },
  indicator: {
    position: "absolute",
    bottom: -8,
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: "#2E7D32",
  },
});