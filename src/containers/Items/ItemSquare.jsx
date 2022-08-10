import React, {useState} from 'react';
import * as C from '../../components/index';

const Chess = [
    C.BlackKing, C.WhiteKing, C.WhiteQueen, C.BlackQueen, C.BlackBishop1, C.WhiteBishop1, C.BlackBishop2, C.WhiteBishop2,
    C.WhiteKnight1, C.WhiteKnight2, C.BlackKnight1, C.BlackKnight2, C.BlackCastle1, C.BlackCastle2, C.WhiteCastle1, C.WhiteCastle2,
    C.BlackPawn1, C.BlackPawn2, C.BlackPawn3, C.BlackPawn4, C.BlackPawn5, C.BlackPawn6, C.BlackPawn7, C.BlackPawn8,
    C.WhitePawn1, C.WhitePawn2, C.WhitePawn3, C.WhitePawn4, C.WhitePawn5, C.WhitePawn6, C.WhitePawn7, C.WhitePawn8
]

const ItemSquare = (props) => {
    const [turn, setTurn] = useState(props.turn)
  return (
    <>
        {Chess && Chess.map((item) => {
            return (
                <>
                    <span><img width='50' src={item.startPosition === props.value ? item.img : ''} alt="" /></span>
                </>
            )
        })}
    </>
  )
}

export default ItemSquare