import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppRoutes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { store, persistor } from './src/store';

export default function App() {
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    /* load configurations here */
    // await Font.loadAsync({
    //   Roboto: require('native-base/Fonts/Roboto.ttf'),
    //   Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    //   ...Ionicons.font,
    //   'AccordAlternate': require('./src/assets/fonts/AccordAlternate.ttf'),
    //   'AccordAlternate-Bold': require('./src/assets/fonts/AccordAlternate-Bold.ttf'),
    //   'AccordAlternate-Thin': require('./src/assets/fonts/AccordAlternate-Thin.ttf'),
    // });
    setReady(true);
  }, []);

  const renderLoading = () => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  };

  return (
    <Provider store={store}>
      <PersistGate loading={renderLoading()} persistor={persistor}>
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
