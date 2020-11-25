/* Your are given a 2-D array of characters. There is a hidden message in it.

I B C A L K A
D R F C A E A
G H O E L A D 
The way to collect the message is as follows

start at top left
move diagonally down right
when cannot move any more, try to switch to diagonally up right
when cannot move any more, try switch to diagonally down right, repeat 3
stop when cannot neither move down right or up right. the character on the path is the message
for the input above, IROCLED should be returned. */

/**
 * @param {string[][]} message
 * @return {string}
 */
function decode(message) {
  let inc = true;
  let decoded = '';
  for (let i = 0, j = 0; j < message[0].length;) {
    if (message[i] && message[i][j]) {
      decoded += message[i][j];
      inc && i++;
      !inc && i--;
      j++
    } else {
      inc = !inc;
      if (inc) {
        i += 2;
      } else {
        i -= 2;
      }
    }
  }
  return decoded;
}

const arr = [
  ['I', 'B', 'C', 'A', 'L', 'K', 'A'],
  ['D', 'R', 'F', 'C', 'A', 'E', 'A'],
  ['G', 'H', 'O', 'E', 'L', 'A', 'D']
]

console.log(decode(arr));