import { AppLayout } from 'layouts';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './MainPage';
import { ContextPage } from './ContextPage';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/context" element={<ContextPage />} />
      </Route>
    </Routes>
  );
};
