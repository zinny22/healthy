import firestore from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import {BodyTypeKey} from '../../schema/bodyType.schema';

interface ExerciseRecommendationsByBodyType {
  title: BodyTypeKey;
  data: string[];
}

function Exercise() {
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
    <View style={styles.container}>
      <Text>각 체질별 운동 보기 : 필터 기능 있으면 좋겠음</Text>

      <SectionList
        sections={exerciseRecommendationsByBodyType}
        renderItem={({item}) => <Text style={styles.item}>-{item}</Text>}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={item => `basicListEntry-${item}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 24,
    backgroundColor: '#ffffff',
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
  },

  divider: {
    backgroundColor: '#bababa',
    height: 1,
    marginVertical: 12,
  },

  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },

  item: {
    fontSize: 16,
    paddingBottom: 8,
  },
});

export default Exercise;
