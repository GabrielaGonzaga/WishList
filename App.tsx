import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/Routes/TabNavigator';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View, StyleSheet } from 'react-native';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        {/* <GestureHandlerRootView> */}
          <TabNavigator />
        {/* </GestureHandlerRootView> */}
      </NavigationContainer>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
