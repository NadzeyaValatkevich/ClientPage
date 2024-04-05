import './App.scss'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Order } from './components/Order'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMainObject } from './redux/thunks/mainObjectThunk'
import { useAppDispatch } from './utils/hooks'
import { fetchRentalObjects } from './redux/thunks/rentalObjectsThunk'


function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMainObject(1))
    // dispatch(fetchRentalObjects(0))

  }, [])

  return (
    <>
      <Header />
      <Order />
      <Main />
      <Footer />
    </>
  )
}

export default App
