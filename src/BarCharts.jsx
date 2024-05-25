import * as React from 'react'
import { BarChart } from '@mui/x-charts/BarChart'
import { axisClasses } from '@mui/x-charts/ChartsAxis'

const chartSetting = {
  yAxis: [
    {
      label: 'Cashflow',
    },
  ],
  width: 1100,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-10px, 0)',
    },
    margin: 1,
  },
}
const dataset = [
  {
    revenue: 50,
    cogs: 200,
    gross: 100,
    year: '2016-17',
  },
  {
    revenue: 160,
    cogs: 300,
    gross: 120,
    year: '2017-18',
  },
  {
    revenue: 90,
    cogs: 150,
    gross: 100,
    year: '2018-19',
  },
  {
    revenue: 97,
    cogs: 117,
    gross: 100,
    year: '2019-20',
  },
  {
    revenue: 160,
    cogs: 400,
    gross: 120,
    year: '2020-21',
  },
  {
    revenue: 90,
    cogs: 150,
    gross: 100,
    year: '2021-22',
  },
  {
    revenue: 97,
    cogs: 117,
    gross: 100,
    year: '2022-23',
  },
]

const valueFormatter = (value) => `${value} 000 rupees`

export default function BarCharts() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'year' }]}
      series={[
        { dataKey: 'revenue', label: 'Revenue', valueFormatter },
        { dataKey: 'cogs', label: 'COGS', valueFormatter },
        { dataKey: 'gross', label: 'Gross Profit', valueFormatter },
      ]}
      slotProps={{
        legend: {
          direction: 'row',
          position: { vertical: 'bottom', horizontal: 'left' },
          padding: 0,
        },
      }}
      {...chartSetting}
    />
  )
}
