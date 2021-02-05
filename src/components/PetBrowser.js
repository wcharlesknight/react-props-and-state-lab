import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  state = {
    isAdopted: false 
  }

  isAdopted = () => {
    this.setState(previous => {
      return {
      isAdopted: !previous.isAdopted }
    })  
  }
  
  render()
    {
    return <div className="ui cards"> 
     
        {this.props.pets.map(pet => <a><Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} /></a>)}
    
    </div>
  }
}

export default PetBrowser
