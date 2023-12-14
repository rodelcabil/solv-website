import React from 'react'
import { Title, GradientTitle } from './title-styles'

const TitleComponent = ({title, isGradient}) => {
  if(isGradient){
    return (
      <GradientTitle>{title}</GradientTitle>
    )
  }
  else{
    return (
      <Title>{title}</Title>
    )
  }
}

export default TitleComponent