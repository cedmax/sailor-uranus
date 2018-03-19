import React from 'react'
import { HorizontalBar } from 'react-chartjs-2'
import Legend from 'components/Graphs/Legend'
import theme from 'styled/palette.json'

export default (props) => {
  const keys = Object.keys(props)
  const labels = keys.map(key => key.charAt(0).toUpperCase() + key.substring(1))
  const datasets = [{
    data: keys.map(key => props[key]),
    backgroundColor: theme.graph
  }]
  const options = {
      scaleFontColor: 'red',
      responsive: true,
      scales: {
          xAxes: [{ 
              ticks: {
                fontColor: "#fff"
              },
          }],
          yAxes: [{
              ticks: {
                fontColor: '#fff'
              },
          }],
      }
  }         

  return [
    <HorizontalBar key="chart" data={{ labels, datasets}} 
        legend={{ display:false }} options={options} />,
    <Legend key="legend" {...props} />
  ]
}