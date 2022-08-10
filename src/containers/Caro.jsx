import React, { useState } from 'react';

const Caro = () => {
    const [column, setColumn] = useState(3);
    const [row, setRow] = useState(3);
    const [columnItem, setColumnItem] = useState();
    const [rowItem, setRowItem] = useState();

    const makeColumn = () => {
        var columnItems = [];
        for (let i = 0; i < column; i++) {
            columnItems.push(column[i]);
        }
        setColumnItem(columnItems);
    }
    console.log(columnItem);
  return (
    <>
        <div className="content" onClick={makeColumn}>
            Test
        </div>
    </>
  )
}

export default Caro