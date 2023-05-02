// Write your code here
import {useState} from 'react'

import {
  MainHeading,
  MainContainer,
  ImageAndParaContainer,
  MainPara,
  MainImage,
  InfoPara,
  Button,
} from './styledComponents'

const ReadMore = () => {
  const [isLess, setIsLess] = useState(true)
  const onClickRead = () => {
    setIsLess(prevState => !prevState)
  }

  return (
    <MainContainer>
      <MainHeading>React Hooks</MainHeading>
      <MainPara>Hooks are a new addition to React</MainPara>
      <ImageAndParaContainer>
        <MainImage
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        {isLess ? (
          <InfoPara>
            Hooks solve a wide variety of seemingly unconnected problems in
            React that we have encountered over five years of writing and
            maintaining tens of thousands of components.
          </InfoPara>
        ) : (
          <InfoPara>
            Hooks solve a wide variety of seemingly unconnected problems in
            React that we have encountered over five years of writing and
            maintaining tens of thousands of components. For curious readers, we
            have prepared a detailed RFC. Hooks allow you to reuse stateful
            logic without changing your component hierarchy. Hooks work
            side-by-side with existing code so you can adopt them gradually.
          </InfoPara>
        )}
      </ImageAndParaContainer>
      <Button onClick={onClickRead}>
        {isLess ? 'Read More' : 'Read Less'}
      </Button>
    </MainContainer>
  )
}

export default ReadMore
