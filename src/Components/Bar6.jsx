import React from 'react'
import { Bar} from 'react-chartjs-2'
const Bar6 = () => {
  return (
    <div className='md:w-80 w-72 h-auto'>
      <Bar className='w-20 h-24 bar'
        data={
            { 
                labels: ['Parthasarathy',' Venkata Pratap ','Nota'],  //x-axis
                datasets: [
                    {
                        label: 'Votes',
                        data: [108229,95851,2771],  //y-axis
                        
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

export default Bar6
