import React from 'react'
import { Bar} from 'react-chartjs-2'
const Bar4 = () => {
  return (
    <div>
      <Bar className='w-20 h-24 bar'
        data={
            { 
                labels: ['  Radha Krishnayya',' Krishna Srinivas',' Mathe Bobby'],  //x-axis
                datasets: [
                    {
                        label: 'Votes',
                        data: [111562,49174,1770],  //y-axis
                        
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
