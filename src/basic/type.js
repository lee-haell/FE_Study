// 타입이 크게 2종류

/*
    원시타입

    - string
    - number
    - boolean
    - null
    - undefined
    - symbol
*/

typeof '텍스트' //string
typeof 10 //number

/*
    객체 타입(원시타입 외의 것들)

    함수, 객체, 배열 등등
*/

//add라는 함수 > 숫자 2개 더하기
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return a + b
}

//타입스크립트(넘버 대신 스트링을 쓰면 바로 알려줌)
// function add(a: Number, b: Number): number {
//     return a + b
// }

add(10, 20)
add('올', '라프')
