import { http, HttpResponse } from 'msw';
import data from './data.json';
const username = import.meta.env.VITE_USERNAME;
const password = import.meta.env.VITE_PASSWORD;

const createToken = (userName, password) => {
  const base64Encode = (str) =>
    btoa(decodeURIComponent(encodeURIComponent(str)));
  return base64Encode(
    JSON.stringify({ userName, password, timestamp: Date.now() })
  );
};

export const handlers = [
  http.get('/api/news', () => {
    return HttpResponse.json(data);
  }),
  http.post('/api/news', async ({ request }) => {
    const { title, description, id, image } = await request.json();
    const newNews = {
      id,
      image,
      title,
      description,
    };
    data.data.push(newNews);
    return HttpResponse.json(data);
  }),
  http.delete('/api/news', async ({ request }) => {
    const { id } = await request.json();
    const index = data.data.findIndex((news) => news.id === id);
    if (index !== -1) {
      data.data.slice(index, 1);
    }
    return HttpResponse.json({
      success: true,
      message: 'News deleted successfully',
    });
  }),
  http.post('/api/authenticate', async ({ request }) => {
    const { userName, password: inputPassword } = await request.json();

    if (userName === username && inputPassword === password) {
      const token = createToken(userName, inputPassword);
      return HttpResponse.json({ token }, { status: 200 });
    }

    return HttpResponse.json(
      { error: 'Invalid login or password' },
      { status: 401 }
    );
  }),
];
