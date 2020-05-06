export interface RootObject {
  count: number;
  results: Result[];
}

export interface Result {
  id: number;
  ref: string;
  name: string;
}

export interface DonutDetail {
  id: number;
  ref: string;
  name: string;
  calories: number;
  extras: string[];
  photo: string;
  photo_attribution: string;
}