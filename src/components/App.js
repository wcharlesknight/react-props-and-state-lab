import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
   
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }


 
  changeFilter = (event) => {
    this.setState({
      filters:{
        ...this.state.filters,
         type: event.target.value
      }
    })
  }

  clickPets = () => {
           
    if (this.state.filters.type == 'all'){
      fetch('/api/pets')
      .then(res => res.json()).then(pets => this.setState({ pets: pets}))
    } else {fetch(`/api/pets?type=${this.state.filters.type}`).then(res => res.json()).then(pets => this.setState({ pets: pets}))}
  }


  onAdoptPet = petId => {
    const pets = this.state.pets.map(p => {
      return p.id === petId ? { ...p, isAdopted: true } : p;
    });
    this.setState({ pets: pets });
  };


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeFilter} onFindPetsClick={this.clickPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}  onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
