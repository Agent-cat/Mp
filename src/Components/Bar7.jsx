import React from 'react'
import { Bar} from 'react-chartjs-2'
const Bar7 = () => {
  return (
    <div>
      <Bar className='w-32 h-32 bar'
        data={
            { 
                labels: ['Chirri Balaraju',' Rajyalakshmi','Nota'],  //x-axis
                datasets: [
                    {
                        label: 'Votes',
                        data: [101453,93518,5611],  //y-axis
                        
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

export default Bar7
