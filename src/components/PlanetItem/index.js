// Write your code here
const PlanetItem = props => {
  const {eachValue} = props

  return (
    <div className="page-container">
      <img className="logo" src={eachValue.imageUrl} alt={`planet ${eachValue.name}`} />
      <h1 className="inner-heading">{eachValue.name}</h1>
      <p className="para">{eachValue.description}</p>
    </div>
  )
}

export default PlanetItem
