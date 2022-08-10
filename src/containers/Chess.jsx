import React, { useState } from 'react';
import './Chess.scss';
import ItemSquare from './Items/ItemSquare';

const Board = [
  ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
  ['1','1A', '1B', '1C', '1D', '1E', '1F', '1G', '1H'],
  ['2','2A', '2B', '2C', '2D', '2E', '2F', '2G', '2H'],
  ['3','3A', '3B', '3C', '3D', '3E', '3F', '3G', '3H'],
  ['4','4A', '4B', '4C', '4D', '4E', '4F', '4G', '4H'],
  ['5','5A', '5B', '5C', '5D', '5E', '5F', '5G', '5H'],
  ['6','6A', '6B', '6C', '6D', '6E', '6F', '6G', '6H'],
  ['7','7A', '7B', '7C', '7D', '7E', '7F', '7G', '7H'],
  ['8','8A', '8B', '8C', '8D', '8E', '8F', '8G', '8H']
];

const ChessGame = () => {
  const [turn, SetTurn] = useState(0);

  const compare = (boardKey, squareKey) => {
    if (boardKey === 0 || squareKey === 0) return 'blank-square';
    if (boardKey % 2 === 0) {
      if (squareKey % 2 === 0) return 'black-square';
      else return 'white-square';
    } else {
      if (squareKey % 2 === 0) return 'white-square';
      else return 'black-square'
    }
  }
  
  const handleOnlick = (item) => {
    console.log(item);
  }

  return (
    <>
      <div className="body-content">
        <div className="main-content">
          { Board && Board.map((itemBoard, boardKey) => {
            return (
              <>
                <div className="chess-board">
                    {itemBoard && itemBoard.map((itemSquare, squareKey) => {
                      return (
                        <>
                          <div className={compare(boardKey, squareKey)} onClick={() => handleOnlick(itemSquare)}>
                            {/* <ItemSquare /> */}
                            <span className='fit-content'>
                              <ItemSquare 
                                key={squareKey} 
                                value={itemSquare} 
                                turn={turn}
                              />
                            </span>
                          </div>
                        </>
                      );
                    })}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default ChessGame