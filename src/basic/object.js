/*
    객체

    > 데이터 구조화하기 위한 수단
    {key: value}

*/

//떡볶이 레시피
const food = {
  name: '떡복이',
  ingredients: ['대파', '고추장', '떡'],
}

//상자
const box = {
  width: 100,
  height: 100,
  backgroundColor: '#efefef',
}

/*
    Object.keys
    Object.values
*/

Object.keys(box) //['width', 'height' ...]
Object.values(box) //[100, 100, '#efefef']
//for문으로 반복하기 보다 object 활용을 더 많이 함
