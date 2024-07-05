// 쉬운 최단거리

const readline = require("readline");

const rl = readline.createInterface({
  	input: process.stdin,
  	output: process.stdout,
});
const dx = [0,1,0,-1];
const dy = [1,0,-1,0];


let R = 0;
let C = 0;
let inputCount = 0;
const board = [];
rl.on("line", (line) => {
    if(R === 0){
        [R,C] = line.split(" ").map(Number);
    }
    else{
        board.push(line.split(" ").map(Number));
    }
    if(inputCount === R)rl.close();
})



rl.on("close", () => {
    const visited = Array.from({length: R},()=> new Array(C).fill(0));

    const queue = [];
    let head = 0;
    
    for(let r = 0; r < R; r++){
        for(let c = 0; c < C; c++){
            if(board[r][c] === 2){
               visited[r][c] = 1;
               board[r][c] = 0;
               queue.push([r,c])
                break;
            }
        }
    }

    while(queue.length > head){
        const [x, y] = queue[head++];
        for(let i = 0; i < 4; i++){
            const [nx, ny] = [x+dx[i], y+dy[i]];
            if(nx<0||nx>=R||ny<0||ny>= C || board[nx][ny] === 0)continue;
            if(!visited[nx][ny]){
                board[nx][ny] = board[x][y]+1;
                visited[nx][ny] = 1;
                queue.push([nx,ny])
            }
        }
        
    }

    for(let r = 0; r < R; r++){
        for(let c = 0; c < C; c++){
            if(visited[r][c] === 0 && board[r][c] === 1 ){
               board[r][c] = -1;
            }
        }
    }
    console.log(board.map((line)=>line.join(" ")).join("\n"));
    
	process.exit();
});