import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './index.css';
import '@monorepo/shared-components/src/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
