class MyPage {
  constructor() {
    this.rootEl = document.getElementById('root')

    this.render()
  }

  //event
  //logout button 누르고
  //로컬 스토리지 데이터 삭제 window.localStorage.removeItem()
  //삭제 완료 후에 메인페이지로 이동

  // 페이지 내용을 그려주는 함수
  render() {
    this.rootEl.innerHTML = `
      <h1>My Page</h1>
      <button>로그아웃</button>
    `
  }
}

export default MyPage
