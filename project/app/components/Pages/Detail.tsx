import firestore from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {BodyTypeValue, FoodType} from '../../schema/bodyType.schema';

interface DetailProps {
  route: {
    params: {
      name: string;
    };
  };
}

function Detail(props: DetailProps) {
  const name = props.route.params.name;

  const [exercise, setExercise] = useState<string[]>([]);
  const [food, setFood] = useState<FoodType>();

  const initBodyType = async () => {
    const bodyTypeCollection = firestore().collection('체질');
    try {
      const data = await bodyTypeCollection.get();
      const filteredData: any = data.docs.find(doc => doc.id === name);
      const result: BodyTypeValue = filteredData?._data;

      setExercise(result.운동);
      setFood(result.음식);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    initBodyType();
  }, []);

  return (
    <View>
      {exercise.map(item => (
        <Text key={item}>{item}</Text>
      ))}

      {food &&
        Object.entries(food).map(([key, value], index) => (
          <View key={index}>
            <Text>{key}</Text>

            {value.map((item, index) => (
              <Text key={item}>
                {item} {index + 1 < value.length && ','}
              </Text>
            ))}
          </View>
        ))}
    </View>
  );
}

export default Detail;
