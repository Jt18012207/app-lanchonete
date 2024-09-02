import { Stack } from "expo-router";
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0D0D0D',
          borderBottom: 0,
        },
        
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center"
      }}>
      <Stack.Screen name="Index" />
    </Stack>
  );
}
