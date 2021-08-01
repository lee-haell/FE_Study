class MyPage {
  constructor() {
    // console.log('hello my page')
    this.rootEl = document.getElementById('root')

    this.render()
  }

  //페이지 내용을 그려주는 함수
  render() {
    this.rootE1.innerHTML = `
      <h1>My Page</h1>
    `
  }
}

export default MyPage
