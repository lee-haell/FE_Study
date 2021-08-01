//from 경로에서 가져온 파일(export로 내보낸)을 Todo라 칭한다
// import TodoManager from './todo/index' //class Todo

// const todo = new TodoManager() //todo는 붕어빵 new TodoManager 붕어빵틀

// console.log(todo)

// console.log('값', todo.todos)

// todo.addTodo('팥붕어빵')

// console.log('값', todo.todos)

//렉시컬 스코프 > 자신의 위치 자체가 최상위
//스코프 체인 > 자기 자신 안에서 찾고 없으면 밖의 영역에서 찾음
//스코프 특징 > 밖에서 안은 안되고, 안에서 밖은 가능

import Router from './router'

import MainPage from './pages/main'
import SigninPage from './pages/main'
import MyPage from './pages/my'
import ErrorPage from './pages/error'

const ROUTES = {
  '/': MainPage, //메인
  '/signin': SigninPage, //로그인
  '/my': MyPage, //내 정보
  '/error': ErrorPage, //에러 페이지
}
//사용자가 유동적으로 바꿀 수 있는 데이터 영역(따라서 밖에 정의, router에 전달함)
//실제 개발에서는 router 라이브러리를 쓰는 형식, 그 과정을 이해하기 위해 써보기

//페이지의 가장 큰 최상위 부모가 될 App
class App {
  constructor() {
    this.router = new Router(ROUTES)
  }
}

new App()
