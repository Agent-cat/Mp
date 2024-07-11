import React from 'react'
import { Bar} from 'react-chartjs-2'
const Bar7 = () => {
  return (
    <div className='md:w-80 w-72 overflow-hidden h-auto'>
      <Bar className='w-32 h-32 bar'
        data={
            {
                labels: ['Balaraju',' Rajyalakshmi','Nota'],  
                datasets: [
                    {
                        label: 'Votes',

                        data: [101453,93518,5611],  
                        
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
