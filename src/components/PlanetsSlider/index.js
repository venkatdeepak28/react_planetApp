import Slider from 'react-slick'
import {Component} from 'react'

import PlanetItem from '../PlanetItem'

import './index.css'

class PlanetsSlider extends Component {
  render() {
    const {planetsList} = this.props

    const settings = {
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

    return (
      <div className="bg-container" data-testid="planets">
        <h1 className="main-heading">Planets</h1>
        <Slider {...settings}>
          {planetsList.map(eachValue => (
            <PlanetItem key={eachValue.id} eachValue={eachValue} />
          ))}
        </Slider>
      </div>
    )
  }
}

export default PlanetsSlider
