//주소의 변경을 감지, 주소에 맞는 페이지 노출
//hash 값에 맞는 페이지를 도출(외부로부터 받는 값을 토대로 공정만 하는 역할, 동작시키는 역할)

class Router {
  //App으로부터 넘겨받은 페이지 정의
  constructor(routes) {
    //최초에 한번 생성될 때 이벤트 바인딩
    this.routes = routes
    this.bindEvent()

    // console.log(this.routes)
    //페이지 값들이 넘어온 것을 확인할 수 있음

    //첫 진입시 최초의 페이지를 그리기 위해 실행
    this.renderPage()
  }

  bindEvent() {
    //이벤트를 추가는 바로 실행되지 않고, 후에 이벤트가 발생하면 실행됨
    window.onhashchange = () => {
      this.renderPage() //hash값이 변경되었다는 것 = 변경된 hash값에 맞게 페이지 새로 그림
    }
  }

  renderPage() {
    const path = window.location.hash.replace('#', '/') || '/'
    //페이지 불러오는 경로가 /이기 때문에 #을 /로 바꿔줌
    //만약 앞의 값이 falsy(공백)면 뒤의 '/'를 실행 > 콜백
    // console.log('path', path)

    const PageComponent = this.routes[path]

    console.log('PageComponent', PageComponent)

    //정해진 path에 맞는 페이지가 없을 때
    if (!PageComponent) {
      //Error Page
      const ErrorPageComponent = this.routes['/error']
      new ErrorPageComponent()

      //return을 만나면 함수 종료
      return
    }
    //path에 맞는 페이지가 있을 때
    new PageComponent()
  }
}

export default Router
