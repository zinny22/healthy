import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Detail = {
  name: string;
};

type navigatorType = {
  Detail: Detail;
};

function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<navigatorType>>();

  const [containerWidth, setContainerWidth] = useState(0);

  const numColumns = 2;

  const list = ['태음인', '태양인', '소음인', '소양인'];
  return (
    <View style={styles.warp}>
      <Text style={styles.title}>내 채질 찾기</Text>

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
  title: {
    fontWeight: '700',
    fontSize: 32,
  },
  buttonWrapper: {
    display: 'flex',
  },
  button: {
    width: 100,
    backgroundColor: '#b52525',
  },
});
export default Home;
