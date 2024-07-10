import React from 'react'
import { Bar} from 'react-chartjs-2'
import { Chart } from 'chart.js/auto'

const PiChart = () => {
  return (
    <div>
        <Bar className='w-8 h-8'
        data={
            {
                labels: ['vishnu','arsha','anu'],  //x-axis
                datasets: [
                    {
                        label: 'Population',
                        data: [100,200,300],  //y-axis
                        backgroundColor: ['red','blue','green'],
                        borderWidth: 1,
                        borderRadius: 10
                    }
                ]

            }
        }>

        </Bar>
      
    </div>
  )
}

export default PiChart
