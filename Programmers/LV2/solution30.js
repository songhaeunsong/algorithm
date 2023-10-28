//해시

function solution(phone_book) {
  phone_book.sort();
  for (let i = 0; i < phone_book.length - 1; i++) {
    let item = phone_book[i];
    let nextItem = phone_book[i + 1].substring(0, item.length);
    if (item === nextItem) return false;
  }
  return true;
}
