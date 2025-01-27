import { FC } from 'react';
import { NewsItem } from '../../utils/types';
import { NewsCard } from '../NewsCard';

interface NewsList {
  data: NewsItem[];
}
const NewsList: FC<NewsList> = ({ data }) => {
  return (
    <div>
      {data.map((article) => (
        <NewsCard key={article.id} {...article} id={article.id} />
      ))}
    </div>
  );
};

export default NewsList;
