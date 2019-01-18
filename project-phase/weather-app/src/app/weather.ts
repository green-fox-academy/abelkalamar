export class Weather {
  cityId: number;
  city: string;
  location: string;
  weather: { temp: number, icon: string, message: string, time?: string, date?: number};
}