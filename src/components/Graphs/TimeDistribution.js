import React from 'react'
import { Bar } from 'react-chartjs-2'
import Legend from 'components/Graphs/Legend'
import theme from 'styled/palette.json'

export default (props) => {
  const keys = Object.keys(props)
  const labels = Object.keys(props[keys[0]])
  const sunday = labels.shift();
  labels.push(sunday)

  const printedLabel = labels.map(label => label.charAt(0).toUpperCase() + label.substring(1))
  
  const datasets = keys.map((key, i) => {
    const label = key.charAt(0).toUpperCase() + key.substring(1)

    return {
      backgroundColor: theme.graph[i],
      label,
      data: labels.map(label => {
        return props[key][label]
      })
    }
  })
  
  const options = {
    tooltips: {
      mode: 'index',
      intersect: true
    },
    scaleFontColor: 'red',
    responsive: true,
    scales: {
        xAxes: [{ 
            stacked: true,           
            ticks: {
              fontColor: "#fff"
            },
        }],
        yAxes: [{
            stacked: true,           
            ticks: {
              fontColor: '#fff'
            },
        }],
    }
  }         

  return [
    <Bar key="chart" data={{ labels: printedLabel, datasets}} 
        legend={{ display:false }} options={options} />,
    <Legend key="legend" {...props} />
  ]
}