import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {color} from '../styles/color';

type Detail = {
  name: string;
};

type navigatorType = {
  Detail: Detail;
};

function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<navigatorType>>();

  const [containerWidth, setContainerWidth] = useState(0);

  const numColumns = 2;

  const list = ['태음인', '태양인', '소음인', '소양인'];
  return (
    <View style={styles.warp}>
      <View style={styles.banner}>
        <Text>건강한 하루</Text>
        <Text style={styles.title}>내 채질 찾기</Text>
      </View>

      <FlatList
        data={list}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
        numColumns={numColumns}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{
              width: containerWidth / numColumns,
              backgroundColor: '#f9c2ff',
              padding: 20,
              alignItems: 'center',
            }}
            onPress={() => navigation.push('Detail', {name: item})}>
            <Text style={{color: 'black', fontSize: 14}}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  warp: {
    justifyContent: 'center',
  },
  banner: {
    height: 400,
    backgroundColor: color.main,
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 20,
    position: 'relative',
  },
  logo: {
    fontWeight: '500',
    fontSize: 16,
    color: 'white',
    position: 'absolute',
    top: 40,
  },
  title: {
    fontWeight: '500',
    fontSize: 28,
    color: 'white',
  },
  buttonWrapper: {
    display: 'flex',
  },
  button: {
    width: 100,
    backgroundColor: '#b52525',
  },
});
export default HomeScreen;
