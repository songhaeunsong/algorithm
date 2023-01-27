//N개의 최소공배수

function solution(arr) {
    let answer = 1;
    let lcm = arr[0];
  
    for(let i = 1; i <arr.length; i++){
        while(answer%lcm !== 0 || answer%arr[i] !== 0)answer++;
        lcm = answer;
    }
    return answer;
    
}