import './home.css'
import {  faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import data from '../../data.json'
import List from '../../components/list/List'

const Home = () => {
  return (
    <div className="right__container">
      <div className="search__input">
        <FontAwesomeIcon className='search__icon' icon={faSearch} />
        <input type="text" placeholder="Search for movies of TV series" />
      </div>
      <div className='trending'>
        <h1 className='trending__title'>Trending</h1>
        <div className='trending__slider'>
          {data.map(item => (
            <List
                key = {item.title}
                title = {item.title}
                year={item.year}
                category={item.category}
                image={item.thumbnail.regular.medium}
                rating = {item.rating}
                BookMark = {item.isBookmarked}
                isTrending = {item.isTrending}
              />
            ))
          }
        </div>
      </div>
      
    </div>
  )
}

export default Home