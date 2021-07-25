/*
    연산자
*/

/*
    AND / OR

    && / ||

    AND(&&) > 모든 조건이 참일 때 > 참
    OR(||) > 조건 중에 하나라도 참이면 > 참
*/

const n1 = 5
const n2 = 8
const n3 = 12

const isOver10 = n1 > 10 && n2 > 10 && n3 > 10 //모든 숫자가 10보다 클 때 참
const isOver7 = n1 > 7 || n2 > 7 || n3 > 7 //하나라도 7보다 클 때 참
//불완전한 값은 젤 앞에 빼놓는 습관!

/*
    falsy

    - undefined
    - null
    - 0
    - ''
*/

const b = undefined
const b1 = null
const b2 = 0
const b3 = ''

const isAllTrue = b && b1 && b2 && b3

if (!b2) {
  //b2가 0일 때 동작해야되는 곳
}
