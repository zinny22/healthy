import firestore from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {BodyTypeKey, FoodType} from '../../schema/bodyType.schema';

interface FoodRecommendationsByBodyType {
  title: BodyTypeKey;
  data: FoodType;
}

function Food() {
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
      {foodRecommendationsByBodyType.map(item => (
        <View key={item.title}>
          <Text style={styles.sectionHeader}>{item.title}</Text>

          {Object.entries(item.data).map(([key, value], index) => (
            <View key={index}>
              <Text style={styles.sectionSubHeader}>{key}</Text>

              <View style={styles.list}>
                {value.map((item, index) => (
                  <Text key={item} style={styles.item}>
                    {item} {index + 1 < value.length && ','}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    overflow: 'scroll',
  },

  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },

  sectionSubHeader: {
    paddingVertical: 4,
    fontSize: 14,
  },

  list: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingBottom: 12,
  },

  item: {
    fontSize: 12,
  },
});

export default Food;
