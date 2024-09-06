import './App.scss'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { Main } from './pages/Main';
import { FilteredRentalObjects } from './pages/FilteredRentalObjects';
import { useRef } from 'react';
import { ErrorPage } from './pages/ErrorPage';
import { NOTFOUND_ERROR } from './utils/constants';
import { SmileIcon } from './assets/icons/Smile';

function App() {
  const filteredObjectsRef = useRef<HTMLDivElement>(null);

  // const scrollToFilteredObjects = () => {
  //   if (filteredObjectsRef.current) {
  //     filteredObjectsRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }

  return (
    <Routes>
      <Route path="/:id" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="filteredRental_objects" element={<FilteredRentalObjects ref={filteredObjectsRef} />} />
      </Route>
      <Route path="*" element={<ErrorPage text={NOTFOUND_ERROR} image={<SmileIcon />} />} />
    </Routes >
  )
}

export default App
