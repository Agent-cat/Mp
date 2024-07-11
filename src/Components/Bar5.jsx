import React from 'react'
import { Bar} from 'react-chartjs-2'
const Bar5 = () => {
  return (
    <div>
      <Bar className='w-20 h-24 bar'
        data={
            { 
                labels: ['Kamineni Srinivas','Nageswara Rao',' Boddu Noble'],  //x-axis
                datasets: [
                    {
                        label: 'Votes',
                        data: [109280,64007,2480],  //y-axis
                        
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

export default Bar5
