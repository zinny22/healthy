export interface BodyTypeSchema {
  id: BodyTypeKey;
  value: BodyTypeValue;
}

export type BodyTypeKey = "태음인" | "소음인" | "태양인" | "소양인";

export interface BodyTypeValue {
  운동: string[];
  음식: FoodType;
}

type FoodType = {
  [key in FoodTypeKey]: string[];
};

export type FoodTypeKey =
  | "고기"
  | "곡류,견과류"
  | "과일"
  | "기호식품"
  | "버섯"
  | "생선"
  | "술"
  | "야채"
  | "음료"
  | "조미료";
