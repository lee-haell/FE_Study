class ErrorPage {
  constructor() {
    this.rootE1 = document.getElementById('root')

    this.render()
  }

  //페이지 내용을 그려주는 함수
  render() {
    this.rootE1.innerHTML = `
    <h1>Error Page</h1>
  `
  }
}

export default ErrorPage
