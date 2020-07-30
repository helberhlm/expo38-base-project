import React, { useState } from 'react';
import {
  Button,
  View,
  TextInput,
} from 'react-native';
import styles from './styles';
import { useDispatch } from 'react-redux';
import allActions from '../../store/actions';
import * as Api from '../../services/api';
import getEnvVars from '../../../environment';

export function loginNavigationOptions({ navigation }) {
  return {
    title: 'Please sign in',
  };
}

export default function Login({ navigation }) {
  const { login } = getEnvVars();
  const dispatch = useDispatch();
  const [user, setUser] = useState(login?.user || "");

  const _signInAsync = async () => {
    Api.authUser({ user })
      .then(({ data }) => {
        dispatch(allActions.setSession(data));
      })
      .catch((error) => {
        console.log('erro:', error.response.data);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        onChangeText={setUser} value={user} placeholder="Github Username" />
      <Button title="Sign in!" onPress={_signInAsync} />
    </View>
  );
}
