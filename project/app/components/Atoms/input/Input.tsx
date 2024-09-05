import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {color} from '../../../styles/color';

interface Props {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar = ({onSearch, placeholder}: Props) => {
  const [query, setQuery] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={query}
        onChangeText={setQuery}
        placeholderTextColor="#9E9E9E"
      />
      <TouchableOpacity style={styles.button} onPress={() => onSearch(query)}>
        <Icon name="search" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

// 스타일 정의
const styles = StyleSheet.create({
  container: {
    height: 48,
    borderColor: color.main,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: 16,
    marginTop: 25,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 12,
    marginRight: 8,
  },

  button: {
    width: 48,
    height: 48,
    backgroundColor: color.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SearchBar;
