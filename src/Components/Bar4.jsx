import React from 'react'
import { Bar} from 'react-chartjs-2'
const Bar4 = () => {
  return (
    <div className='md:w-80 w-72 h-auto'>
      <Bar className='w-20 h-24 bar'
        data={
            { 
                labels: ['  Radha Krishnayya',' Krishna Srinivas',' Mathe Bobby'],  
                datasets: [
                    {
                        label: 'Votes',
                        data: [111562,49174,1770],  
                        
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

export default Bar4
