import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
}

function CustomButton({onPress, title}: CustomButtonProps) {
  return (
    <Pressable style={[styles.button]} onPress={onPress}>
      <Text style={[styles.title]}>{title}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 15,
  },
});

export default CustomButton;
