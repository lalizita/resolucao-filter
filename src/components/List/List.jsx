import React from 'react'

const List = ({productsList, filteredList}) => {
  return(
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
            filteredList.map((item, index) => {
              return( 
                <tr key={index} style={{color: item.stocked ? '#000' : 'red'}}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      </div>
  )
}

export default List