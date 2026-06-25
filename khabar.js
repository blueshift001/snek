import { onSnake, expandSnake } from "./snek.js"
import { RandomGridPosition } from "./grid.js"

let food = getRandomFoodPosition()
const EXPANSION_RATE = 5


export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
    }

}

export function draw(gameBoard) {
    const foodElement = document.createElement('img')  
    foodElement.src = './food.png'                    
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = RandomGridPosition()
    }

    return newFoodPosition
}