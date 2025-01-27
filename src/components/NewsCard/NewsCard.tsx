import { FC } from 'react';
import { useStyles } from './NewsCard.styles';
import { NewsItem } from '../../utils/types';
import CloseIcon from '../icons/CloseIcon';
import { deleteNews } from '../../store/News/newsSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';

const NewsCard: FC<NewsItem> = ({ fibo, title, image, description, id }) => {
  const classes = useStyles();
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = (newsId: string) => {
    dispatch(deleteNews(newsId));
  };

  return (
    <div className={classes.root}>
      <span className={classes.titleContent}>
        {' '}
        <span className={classes.title}>{title}</span>{' '}
        <span className={classes.fibo}>your successful fibo is {fibo}</span>
      </span>
      <span onClick={() => handleDelete(id)} className={classes.deleteIcon}>
        <CloseIcon />
      </span>

      <div className={classes.imgContent}>
        <img src={image} alt={'image related to news'} loading="lazy" />
      </div>
      <div className={classes.infoContent}>
        <span className={classes.flex}></span>
        <div className={classes.greyText}>{description}</div>
      </div>
    </div>
  );
};

export default NewsCard;
