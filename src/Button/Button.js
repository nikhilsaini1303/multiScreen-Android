import { Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Button = () => {

  const navigate = useNavigation();

  const onButtonPressed = () => {
    navigate.navigate('Home');
  }

  return (
    <Pressable onPress={onButtonPressed}  style={styles.container}>
      <Text style={styles.text}>Button</Text>
    </Pressable>
  )
}

export default Button;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3B71F3',

        width: '100%',

        padding: 15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5
    },
    
    text: {
        fontWeight: 'bold',
        color: 'white'
    }


});