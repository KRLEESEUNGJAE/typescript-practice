/**
 * Let's make a game 🕹
 */
type positionType = { x: number; y: number };
let position: positionType = { x: 0, y: 0 };

type commands = "up" | "down" | "left" | "right";
const move = (command: commands) => {
  switch (command) {
    case "up":
      position.y = position.y + 1;
      break;
    case "down":
      position.y = position.y - 1;
      break;
    case "left":
      position.x = position.x - 1;
      break;
    case "right":
      position.x = position.x + 1;
      break;
    default:
      throw Error("unknown command");
  }
};

console.log(position); // { x: 0, y: 0}
move("up");
console.log(position); // { x: 0, y: 1}
move("down");
console.log(position); // { x: 0, y: 0}
move("left");
console.log(position); // { x: -1, y: 0}
move("right");
console.log(position); // { x: 0, y: 0}
