import './App.scss'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { Main } from './pages/Main';
import { FilteredRentalObjects } from './pages/FilteredRentalObjects';


function App() {

  return (
    <Routes>
      <Route path="/main_object/:id" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="filteredRental_objects" element={<FilteredRentalObjects />} />
      </Route>
    </Routes >
  )
}

export default App
