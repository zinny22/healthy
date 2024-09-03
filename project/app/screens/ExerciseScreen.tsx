import firestore from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {BodyTypeKey} from '../schema/bodyType.schema';

interface ExerciseRecommendationsByBodyType {
  title: BodyTypeKey;
  data: string[];
}

function ExerciseScreen() {
  const [
    exerciseRecommendationsByBodyType,
    setExerciseRecommendationsByBodyType,
  ] = useState<ExerciseRecommendationsByBodyType[]>([]);

  const initExercise = async () => {
    const bodyTypeCollection = firestore().collection('체질');
    try {
      const data = await bodyTypeCollection.get();
      const result = data.docs.map((item: any) => ({
        title: item.id,
        data: item._data.운동,
      }));
      setExerciseRecommendationsByBodyType(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    initExercise();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text>각 체질별 운동 보기 : 필터 기능 있으면 좋겠음</Text>

      {exerciseRecommendationsByBodyType.map(item => (
        <View key={item.title}>
          <Text style={styles.sectionHeader}>{item.title}</Text>

          <View style={styles.list}>
            {item.data.map(_item => (
              <Text key={_item} style={styles.item}>
                - {_item}
              </Text>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
  },

  sectionHeader: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },

  list: {
    paddingBottom: 12,
  },

  item: {
    paddingHorizontal: 12,
    paddingBottom: 12,
    fontSize: 12,
  },
});

export default ExerciseScreen;
