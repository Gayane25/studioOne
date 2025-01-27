import { News } from './types';

export const getFibonacci = (index: number): number => {
  if (index <= 1) return index;
  return getFibonacci(index - 1) + getFibonacci(index - 2);
};

const isPrime = (num: number) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

export const withIsPrimeData = (news: News[]) => {
  const transformed = news?.map((article: News, index: number) => {
    const fibo = getFibonacci(index + 1);
    return {
      ...article,
      fibo,
      isPrime: isPrime(fibo),
    };
  });
  return transformed;
};
