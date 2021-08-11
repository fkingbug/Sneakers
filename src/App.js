import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

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
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default App
