const King = {
    move: 1,
    direction: 'anywhere',
    type: 'King'
}

const Queen = {
    move: 8,
    direction: 'anywhere',
    type: 'Queen'
}

const Bishop = {
    move: 8,
    direction: 'diagonal',
    type: 'Bishop'
}

const Knight = {
    move: 2,
    direction: 'knight',
    type: 'Knight'
}

const Castle = {
    move: 8,
    direction: 'straight',
    type: 'Castle'
}

const Pawn = {
    move: 2,
    direction: 'straight',
    type: 'Pawn'
}

export {
    King, Queen, Bishop, Knight, Castle, Pawn
}