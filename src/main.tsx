import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './pages/router';
import { store } from './store/store';
async function deferRender() {
  const { worker } = await import('./mocks/browser.js');
  return worker.start();
}

deferRender().then(() => {
  createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
});
