import { useEffect, useState } from 'react';
import { Avatar } from '../components/Avatar';
import { NewsList } from '../components/NewsList';
import { useStyles } from './pages.styles';
import { Modal } from '../components/Modal';
import { CreateForm } from '../components/CreateForm';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { fetchNews } from '../store/News/newsSlice';

const News = () => {
  const classes = useStyles();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { newsData } = useSelector((state: RootState) => state.news);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <div className={classes.newsRoot}>
      <div className={classes.createNews} onClick={() => setIsModalOpen(true)}>
        <div className={classes.flex}>
          <Avatar />
          <div className={classes.inputLikeContent}></div>
        </div>
      </div>
      <NewsList data={newsData} />
      {isModalOpen && (
        <Modal>
          <CreateForm closeForm={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
};

export default News;
