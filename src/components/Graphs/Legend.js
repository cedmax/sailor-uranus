import React from 'react'
import theme from 'styled/palette.json'
import { Legend, LegendItem, LegendColorBlock } from 'styled/components'
import Emoji from 'components/Emoji'

export default (props) => {
  const keys = Object.keys(props)
  
  return (
    <Legend>{
      keys.map((key, i) => (
        <LegendItem key={key} amount={keys.length}>
          <LegendColorBlock color={theme.graph[i]} />
          <Emoji  emoji={key} />
        </LegendItem>
      ))
    }</Legend>
  )
}