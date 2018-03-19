import React from 'react'
import Pie from 'components/Graphs/Pie'
import Bar from 'components/Graphs/Bar'
import TimeDistribution from 'components/Graphs/TimeDistribution'

import {
  Charts,
  Chart,
  ChartTitle
} from 'styled/components'
export default (props) => (
  <Charts>
    <Chart>
      <ChartTitle>Imagery</ChartTitle>
      <Pie {...props.image} />
    </Chart>
    <Chart>
      <ChartTitle>Divinity Gender</ChartTitle>
      <Bar {...props.gender} />
    </Chart>
    <Chart>
      <ChartTitle>Time Distribution</ChartTitle>
      <TimeDistribution {...props.dayTime} />
    </Chart>
  </Charts>
)