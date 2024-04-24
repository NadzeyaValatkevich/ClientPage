import './App.scss'
import { useEffect } from 'react';
import { fetchMainObject } from './redux/thunks/mainObjectThunk'
import { useAppDispatch } from './utils/hooks'
import { fetchRentalObjects } from './redux/thunks/rentalObjectsThunk'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { Main } from './pages/Main';
import { FilteredRentalObjects } from './pages/FilteredRentalObjects';


function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMainObject(2))
    dispatch(fetchRentalObjects())

  }, [])

  console.log("App")

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/filteredRental_objects" element={<FilteredRentalObjects />} />
      </Route>
    </Routes>
  )
}

export default App
