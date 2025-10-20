import CustomDrawer from "@/components/CustomDrawer";
import CustomHeader from "@/components/CustomHeader";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        header: () => <CustomHeader />,
      }}
    >
      <Drawer.Screen
        name="HomeScreen" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Home",
          title: "overview",
        }}
      />
    </Drawer>
  );
}
