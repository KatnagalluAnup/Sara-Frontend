import ReactDOM from 'react-dom/client';
import './index.css';
import createRoutes from './routes/routes';

const routes = createRoutes();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  routes
);
