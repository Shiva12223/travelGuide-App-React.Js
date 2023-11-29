import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CountryItem from '../CountryItem'

import {
  AppContainer,
  Heading,
  CountriesContainer,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
}

class TravelGuide extends Component {
  state = {apiStatus: apiStatusConstants.initial, travelList: []}

  componentDidMount() {
    this.renderTravelGuideResultsView()
  }

  renderTravelGuideResultsView = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.packages.map(eachLocation => ({
        id: eachLocation.id,
        name: eachLocation.name,
        imageUrl: eachLocation.image_url,
        description: eachLocation.description,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        travelList: updatedData,
      })
    }
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </LoaderContainer>
  )

  renderTravelGuideView = () => {
    const {travelList} = this.state
    return (
      <CountriesContainer>
        {travelList.map(eachCountry => (
          <CountryItem key={eachCountry.id} countryDetails={eachCountry} />
        ))}
      </CountriesContainer>
    )
  }

  renderTravelGuideResults = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTravelGuideView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <AppContainer>
        <Heading>Travel Guide</Heading>
        {this.renderTravelGuideResults()}
      </AppContainer>
    )
  }
}

export default TravelGuide
