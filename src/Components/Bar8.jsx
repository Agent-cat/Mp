import React from 'react'
import { Bar} from 'react-chartjs-2'

const Bar8 = () => {
    
  return (
    <div className='md:w-80 w-72  h-auto'>
       <Bar className='w-20 h-24 bar'
        data={
            { 
                labels: ['Dharmaraju','Srinivasa Rao','Hari Kumara Raju'],  
                datasets: [
                    {
                        label: 'Votes',
                        data: [108894,63949,3130],  
                        
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
