export class Weather {
  city: string;
  location: string;
  weather: { temp: number, icon: string, message: string }[];
}