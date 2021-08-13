import React from 'react'
import axios from 'axios'
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [searchValue, serSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(() => {
    axios
      .get('https://611545bd8f38520017a38415.mockapi.io/items')
      .then((res) => setItems(res.data))

    axios
      .get('https://611545bd8f38520017a38415.mockapi.io/cart')
      .then((res) => setCartItems(res.data))
  }, [])

  const onAddToCart = (obj) => {
    axios.post('https://611545bd8f38520017a38415.mockapi.io/cart', obj)
  }

  const onChangeSearchInput = (event) => {
    serSearchValue(event.target.value)
  }
  const omRemoveitem = (id) => {
    //axios.delete(`https://611545bd8f38520017a38415.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }
  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          omRemoveitem={omRemoveitem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Поиск по запросу : ${searchValue}` : 'Все кроcсовки'}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && (
              <img
                onClick={() => serSearchValue('')}
                className="clear cu-p"
                src="/img/btn-remove.svg"
                alt="Close"
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск.."
              type="text"
            />
          </div>
        </div>
        <div className="sneakers d-flex flex-wrap">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase()),
            )
            .map((item, index) => (
              <Card
                key={`${index}_${item.title}`}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={() => console.log('Добавили в закладки')}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default App
