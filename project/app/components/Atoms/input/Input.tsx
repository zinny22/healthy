import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {color} from '../../../styles/color';

interface Props {
  onSearch: (query: string) => void;
}

const SearchBar = ({onSearch}: Props) => {
  const [query, setQuery] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="찾고싶은 음식을 검색하세요"
        value={query}
        onChangeText={setQuery}
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
