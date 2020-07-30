import React from 'react';
import {
  Button,
  View,
  Text,
  Image
} from 'react-native';
import allActions from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';

export function homeNavigationOptions({ navigation }) {
  return {
    title: 'Welcome to the app!',
  }
}
export default function Home({ navigation }) {
  const currentSession = useSelector(state => state.currentSession);
  console.log(currentSession)
  const dispatch = useDispatch();
  _showMoreApp = () => {
    navigation.navigate('Test');
  };

  _signOutAsync = async () => {
    dispatch(allActions.logoutUser());
    // navigation.navigate('Auth');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: currentSession.avatar_url }} style={{ width: 100, height: 100 }} />
      <Text>Login: {currentSession.login}</Text>
      <Text>Id: {currentSession.id}</Text>
      <Text>bio: {currentSession.bio}</Text>
      <Button title="Show me more of the app" onPress={_showMoreApp} />
      <Button title="Actually, sign me out :)" onPress={_signOutAsync} />
    </View>
  );
}
