//클래스는 대문자로 시작
//객체를 만드는 방법 중의 하나
//객체를 만들어내는 틀

// var todo = { todo: [] }와 같은 의미, 하지만 매번 생성해야하는 문제

class TodoManager {
  //클래스가 만들어질 때 제일 먼저 동작하는 함수
  //값을 초기화하는 곳, 처음 만들어질 때 동작할 함수들 정의
  constructor() {
    this.todos = []
    //this=todo 자기자신

    // this.getTodos = () => {
    //   return this.todos
    // }
  }

  //프로토타입
  //constructor 밖에 있는 영역은 부모의 주머니
  //기존의 todo와 새로운 todo를 합친다
  addTodo(label) {
    this.todos = [
      ...this.todos,
      {
        id: this.todos.length + 1,
        label, //label: label > key, value값이 같으면 생략 가능
        isDone: false,
      },
    ]
  }
  removeTodo(id) {
    this.todos = this.todos.filter((todo) => {
      return todo.id !== id
    })
  }
  updateTodo(id) {
    this.todos = this.todos.map((todo) => {
      return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    })
  }
  isAllCompleted() {
    return this.todos.every((todo) => {
      return todo.isDone
    })
  }
  hasCompleted() {
    return this.todos.some((todo) => {
      return todo.isDone
    })
  }
}

//만들 때는 new 키워드 사용
// var todo = new Todo()

export default TodoManager
//Todo를 내보냄
