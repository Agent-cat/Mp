import React from 'react'
import { Bar} from 'react-chartjs-2'
const Bar3 = () => {
  return (
    <div className='md:w-80 w-72 h-auto'>
      <Bar className='w- h-24 bar'
        data={
            { 
                labels: [' Prabhakar',' Abbaya Chowdary',' Nota'],  //x-axis
                datasets: [
                    {
                        label: 'Votes',
                        data: [107287,81021,1920],  //y-axis
                        
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

export default Bar3
