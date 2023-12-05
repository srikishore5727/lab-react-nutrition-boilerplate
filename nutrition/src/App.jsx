import { Component, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import FoodBox from './Components/FoodBox'
import FoodData from './Components/FoodData'
import Search from './Components/Search'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: "",
      // count:0
    }
  }
  handleSearch=(info)=>{
    this.setState({search:info})
  }
//function to manage the count of food items
  handleCount =(value)=>{
    this.setState({count:value})
  }
  // const [count, setCount] = useState(0)
  render() {
    return (
      <>
      <Search handleSearch={this.handleSearch}/>
        
        {
          FoodData.filter((el) => {
            if (this.state.search == "") {
              return el
            } else if (el.name.toLowerCase().includes(this.state.search.toLowerCase())) {
              return el
            }
          }).map((el) => {
            return (
              <div key={el.id}>
                <FoodBox food={el} count={this.state.count} />
              </div>
            )
          })
        }
      </>
    )
  }

}

export default App;
