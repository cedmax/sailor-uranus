import React from 'react'
import { Pie } from 'react-chartjs-2'
import theme from 'styled/palette.json'
import Legend from 'components/Graphs/Legend'

export default (props) => {
  const keys = Object.keys(props)
  const labels = keys.map(key => key.charAt(0).toUpperCase() + key.substring(1))
  const datasets = [{
    data: keys.map(key => props[key]),
    backgroundColor: theme.graph
  }]
  
  return [
    <Pie key="chart" data={{ labels, datasets}} 
        legend={{ display:false }} options={{ responsive: true }} />,
    <Legend key="legend" {...props} />
  ]
}