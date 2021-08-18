import React from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'

import Header from './components/Header'
import Drawer from './components/Drawer'

import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Orders from './pages/Orders'

import AppContext from './context'

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [searchValue, serSearchValue] = React.useState('')
  const [favorites, setFavorites] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      const cartResponse = await axios.get(
        'https://611545bd8f38520017a38415.mockapi.io/cart',
      )
      const favoritesResponse = await axios.get(
        'https://611545bd8f38520017a38415.mockapi.io/favorites',
      )
      const itemsResponse = await axios.get(
        'https://611545bd8f38520017a38415.mockapi.io/items',
      )

      setIsLoading(false)

      setCartItems(cartResponse.data)
      setFavorites(favoritesResponse.data)
      setItems(itemsResponse.data)
    }
    fetchData()
  }, [])
  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://611545bd8f38520017a38415.mockapi.io/cart/${obj.id}`)
      setCartItems((prev) => prev.filter((items) => Number(items.id) !== Number(obj.id)))
    } else {
      axios.post('https://611545bd8f38520017a38415.mockapi.io/cart', obj)
      console.log(obj)
      setCartItems((prev) => [...prev, obj])
    }
  }
  const onRemoveItem = (id) => {
    axios.delete(`https://611545bd8f38520017a38415.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }
  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://611545bd8f38520017a38415.mockapi.io/favorites/${obj.id}`)
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id))
      } else {
        const { data } = await axios.post(
          'https://611545bd8f38520017a38415.mockapi.io/favorites',
          obj,
        )
        setFavorites((prev) => [...prev, data])
      }
    } catch (error) {
      alert('Не удалось добавить в фавориты')
    }
  }
  const onChangeSearchInput = (event) => {
    serSearchValue(event.target.value)
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id))
  }
  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        onAddToCart,
        isItemAdded,
        onAddToFavorite,
        setCartOpened,
        setCartItems,
      }}>
      <div className="wrapper clear">
        {/* {cartOpened && (
          
        )} */}
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemoveItem={onRemoveItem}
          opened={cartOpened}
        />
        <Header onClickCart={() => setCartOpened(true)} />

        <Route path="/" exact>
          <Home
            items={items}
            cartItems={cartItems}
            searchValue={searchValue}
            serSearchValue={serSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToFavorite={onAddToFavorite}
            onAddToCart={onAddToCart}
            isLoading={isLoading}
          />
        </Route>
        <Route path="/favorites" exact>
          <Favorites />
        </Route>
        <Route path="/orders" exact>
          <Orders />
        </Route>
      </div>
    </AppContext.Provider>
  )
}

export default App
