import './App.scss'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { Main } from './pages/Main';
import { FilteredRentalObjects } from './pages/FilteredRentalObjects';
import { useRef } from 'react';


function App() {
  const filteredObjectsRef = useRef<HTMLDivElement>(null);

  const scrollToFilteredObjects = () => {
    if (filteredObjectsRef.current) {
      filteredObjectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <Routes>
      <Route path="/main_object/:id" element={<Layout scrollToFilteredObjects={scrollToFilteredObjects} />}>
        <Route index element={<Main />} />
        <Route path="filteredRental_objects" element={<FilteredRentalObjects ref={filteredObjectsRef} />} />
      </Route>
    </Routes >
  )
}

export default App
