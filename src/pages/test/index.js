import React from 'react';
import {
  Button,
  StatusBar,
  View,
} from 'react-native';
import styles from './styles';
import { useDispatch } from 'react-redux';
import allActions from '../../store/actions';

export default function Test({ navigation }) {
  const dispatch = useDispatch();

  const _signOutAsync = async () => {
    dispatch(allActions.logoutUser());
  };

  return (
    <View style={styles.container}>
      <Button title="I'm done, sign me out" onPress={_signOutAsync} />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
      <StatusBar barStyle="default" />
    </View>
  );
}
