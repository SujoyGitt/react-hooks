import React, { useEffect, useState } from 'react'

const Table = ({calculateTable}) => {
  const [table, setTable] = useState([]);

  useEffect(() => {
    setTable(calculateTable)
  }, [calculateTable])
  
    
  return (
    <>
     {table.map(ele=> <h2>{ele}</h2>)}
    </>
  )
}

export default Table