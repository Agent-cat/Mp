import React from 'react'
import { Bar} from 'react-chartjs-2'
import { Chart } from 'chart.js/auto'

const PiChart = () => {
  return (
    <div className='md:w-80 w-72 h-auto'>
        <Bar className='w-52 h-44 '
        data={
            { 
                labels: ['Roshan Kumar',' Vijaya Raju',' Rakada Eliza'],  //x-axis
                datasets: [
                    {
                        label: 'Votes',
                        data: [120126,92360,4958],  //y-axis
                        
                        backgroundColor: ['yellow','blue','green'],
                        borderWidth: 1,
                       
                        indexAxis:'y'
                    }
                ]
                 
            }
            
        }>

        </Bar>
      
    </div>
  )
}

export default PiChart
