import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: #ffffff;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px -1px 10px 10px #bfbfbf;
  }
`
export const ImageElement = styled.img`
  height: 170px;
  width: 100%;
`
export const ContentContainer = styled.div`
  padding: 10px;
`
export const Name = styled.h1`
  color: #475569;
  font-weight: normal;
  font-size: 23px;
`
export const Description = styled.p`
  color: #64748b;
`
