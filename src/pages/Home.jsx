import React from 'react'
import Card from '../components/Card'

function Home({
  items,
  searchValue,
  serSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  cartItems,
  isLoading,
}) {
  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    )
    return (isLoading ? [...Array(4)] : filteredItems).map((item, index) => (
      <Card
        key={`${index}`}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        added={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
        {...item}
        loading={isLoading}
      />
    ))
  }
  return (
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
      <div className="sneakers d-flex flex-wrap">{renderItems()}</div>
    </div>
  )
}

export default Home
