import React from 'react'
import { Bar} from 'react-chartjs-2'
const Bar8 = () => {
  return (
    <div>
       <Bar className='w-20 h-24 bar'
        data={
            { 
                labels: ['Dharmaraju','Srinivasa Rao','Hari Kumara Raju'],  //x-axis
                datasets: [
                    {
                        label: 'Votes',
                        data: [108894,63949,3130],  //y-axis
                        
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

export default Bar8
