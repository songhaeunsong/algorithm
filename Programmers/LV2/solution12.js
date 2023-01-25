/*영어 끝말잇기 */

function solution(n, words) {
    const duplicate = words.filter((val, idx) => {
        return words.indexOf(val) !== idx; 
    });
    let dp_word = duplicate[0];
    let idx = words.indexOf(dp_word);
    idx = words.indexOf(dp_word, idx + 1); //중복 값 인덱스 저장
    
    for(let i = 1; i< words.length; i++){
    if(words[i].slice(0,1) !== words[i-1].slice(-1)){
        if(idx === -1 || i < idx) return [i%n+1, Math.ceil((i+1)/n)] // 1. 전 단어 끝과 해당 단어 첫글자 불일치
    }
    }
    if(idx > 0) return[idx%n+1,Math.ceil((idx+1)/n)] //2. 중복값
    

    return [0,0]; // 3. 틀린 사람 없음
}