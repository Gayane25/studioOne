export interface SvgProps {
  fill?: string;
  width?: string;
  height?: string;
}

export type InputType = 'text' | 'email' | 'password';

export interface News {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface NewsCardProps extends News {
  fibo: number;
}
export interface NewsItem extends News {
  id: string;
  fibo: number;
  isPrime: boolean;
}
