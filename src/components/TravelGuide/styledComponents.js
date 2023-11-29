import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: 'Roboto';
  background-color: #eef4f7;
  overflow: hidden;
`

export const Heading = styled.h1`
  color: #334155;
  border-bottom: 5px solid #52bbf0;
`

export const CountriesContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  width: 90%;
  padding-top: 25px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  overflow-y: scroll;
  margin-bottom: 20px;
`
export const LoaderContainer = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
