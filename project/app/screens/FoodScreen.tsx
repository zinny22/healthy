import firestore from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import SearchBar from '../components/atoms/input/Input';
import ItemCard from '../components/molecules/itemCard/itemCard';
import {BodyTypeKey, FoodType} from '../schema/bodyType.schema';

interface FoodRecommendationsByBodyType {
  title: BodyTypeKey;
  data: FoodType;
}

function FoodScreen() {
  const [foodRecommendationsByBodyType, setFoodRecommendationsByBodyType] =
    useState<FoodRecommendationsByBodyType[]>([]);

  const initFood = async () => {
    const bodyTypeCollection = firestore().collection('체질');
    try {
      const data = await bodyTypeCollection.get();
      const result = data.docs.map((item: any) => ({
        title: item.id,
        data: item._data.음식,
      }));
      setFoodRecommendationsByBodyType(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    initFood();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <SearchBar onSearch={() => {}} placeholder="찾고싶은 음식을 검색하세요" />

      {foodRecommendationsByBodyType.map(item => (
        <ItemCard key={item.title} item={item} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    overflow: 'scroll',
  },
});

export default FoodScreen;
