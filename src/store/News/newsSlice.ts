import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewsItem, News } from '../../utils/types';
import axios from 'axios';
import { withIsPrimeData } from '../../utils/fibonacci';

interface NewsState {
  newsData: NewsItem[];
  loading: boolean;
  error: null | string;
  searchTerm: string;
}
const initialState: NewsState = {
  newsData: [],
  loading: false,
  error: null,
  searchTerm: '',
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    filterNews: (state, action: PayloadAction<string>) => {
      const searchTerm = action.payload.toLowerCase();
      state.newsData = state.newsData.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm) ||
          article.description.toLowerCase().includes(searchTerm)
      );
    },
    setNewsData: (state, action: PayloadAction<NewsItem[]>) => {
      if (!state.searchTerm) state.newsData = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchNews.fulfilled,
        (state, action: PayloadAction<NewsItem[]>) => {
          state.loading = false;
          state.newsData = action.payload;
        }
      )
      .addCase(fetchNews.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to fetch news';
      });
    builder
      .addCase(addNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        addNews.fulfilled,
        (state, action: PayloadAction<NewsItem[]>) => {
          state.loading = false;
          state.newsData = action.payload;
        }
      )
      .addCase(addNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
    builder

      .addCase(deleteNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteNews.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.newsData = state.newsData.filter(
          (news) => news.id !== action.payload
        );
      })
      .addCase(deleteNews.rejected, (state) => {
        state.loading = false;
        state.error = 'An error occurred';
      });
  },
});

export const fetchNews = createAsyncThunk<NewsItem[]>(
  'news/fetchNews',
  async () => {
    const response = await axios.get('/api/news');
    const transformedNews = withIsPrimeData(response.data.data);
    return transformedNews;
  }
);
export const addNews = createAsyncThunk(
  'news/addNews',
  async ({ id, image, title, description }: News) => {
    const response = await axios.post('/api/news', {
      title,
      description,
      id,
      image,
    });
    return response.data;
  }
);

export const deleteNews = createAsyncThunk(
  'news/deleteNews',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete('/api/news', {
        data: { id },
      });
      return id;
    } catch {
      return rejectWithValue('Failed to delete news');
    }
  }
);
export const { setSearchTerm, filterNews, setNewsData } = newsSlice.actions;
export default newsSlice.reducer;
