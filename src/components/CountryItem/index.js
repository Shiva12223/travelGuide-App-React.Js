import {
  ListItem,
  ImageElement,
  ContentContainer,
  Name,
  Description,
} from './styledComponents'

const CountryItem = props => {
  const {countryDetails} = props
  const {name, imageUrl, description} = countryDetails
  return (
    <ListItem>
      <ImageElement src={imageUrl} alt={name} />
      <ContentContainer>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </ContentContainer>
    </ListItem>
  )
}

export default CountryItem
