import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

const arr = [
  {
    title: 'Mужские кроссовки Nike Blazer Mid Suede',
    price: 12999,
    imageUrl: '/img/sneakers/1.jpg',
  },
  {
    title: 'Mужские кроссовки Nike Air Max 270',
    price: 15600,
    imageUrl: '/img/sneakers/2.jpg',
  },
  {
    title: 'Mужские кроссовки Nike Blazer Mid Suede',
    price: 8499,
    imageUrl: '/img/sneakers/3.jpg',
  },
  {
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8999,
    imageUrl: '/img/sneakers/4.jpg',
  },
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <div className="content p-40">
        <Header />
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">Все кроcсовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск.." type="text" />
          </div>
        </div>
        <div className="sneakers d-flex">
          {arr.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onClick={() => alert(123)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
