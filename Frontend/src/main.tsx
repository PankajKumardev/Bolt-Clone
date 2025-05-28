import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import LenisProvider from './Providers/LenisProvider.tsx';

createRoot(document.getElementById('root')!).render(
<LenisProvider>
<App />
</LenisProvider>

);
