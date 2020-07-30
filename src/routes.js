import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login, { loginNavigationOptions } from './pages/login';
import Home from './pages/home';
import Test from './pages/test';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

// https://reactnavigation.org/docs/nesting-navigators#best-practices-when-nesting
export default function AppRoutes() {
  const currentSession = useSelector(state => state.currentSession);
  const commonScreens = {

  };

  const authScreens = {
    Login: {
      screen: Login,
      options: loginNavigationOptions,
    },
  };

  const userScreens = {
    Home,
    Test,
  };

  return (
    <Stack.Navigator>
      {Object.entries({
        ...commonScreens,
        ...(currentSession.isLogged ? userScreens : authScreens),
      }).map(([name, component], index) => (
        <Stack.Screen key={index.toString()} name={name} component={component.screen || component} options={component.options} />
      ))}
    </Stack.Navigator>
  )
}
