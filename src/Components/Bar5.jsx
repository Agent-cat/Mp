import React from 'react'
import { Bar} from 'react-chartjs-2'
const Bar5 = () => {
  return (
    <div className='md:w-80 w-72 h-auto'>
      <Bar className=''
      
        data={
            { 
                labels: ['Kamineni Srinivas','Nageswara Rao',' Boddu Noble'],  
                datasets: [
                    {
                        label: 'Votes',
                        data: [109280,64007,2480],  
                        
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
