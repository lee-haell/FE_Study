import Header from '../components/header'
import Story from '../components/main/story'
import Feed from '../components/main/feed'

class MainPage {
  constructor(props) {
    //최초에 1번만 실행
    this.rootEl = document.getElementById('root')
    this.props = props //router

    //자식 컴포넌트들을 넣어둘 곳
    this.children = []
    //처음 방문한 사람은 로그인 정보가 없을 것
    //기본값 null을 이용하도록 함
    this.user = JSON.parse(window.localStorage.getItem('user') || 'null')

    this.feeds = []
    this.stories = []

    this.initialize() //라이프 사이클
  }

  //(1) 값을 초기화
  async initialize() {
    if (this.user) {
      //1. story 정보 가져옴
      //fetch
    }

    //2. feed 정보 가져옴
    const response = await fetch('http://localhost:8888/feeds')

    if (response.ok) {
      const feeds = await response.json()
      this.feeds = feeds
    }

    this.componentUpdate()
  }

  //(2) 값이 변경되었을 때 컴포넌트들에게 알림
  componentUpdate() {
    this.updateChildrenProps() //자식들 최신화
    this.render()
    this.componentBindEvent() //자식들 이벤트 걸어주기
  }

  //(3) 최신화된 값을 자식들에게 전파
  updateChildrenProps() {
    this.children = [
      new Header({
        user: this.user,
        router: this.props.router,
      }),
      new Story(),
      new Feed({
        feeds: this.feeds,
      }),
    ]
  }

  //(5) 이벤트 => 돔이 화면에 그려진 후 이벤트 호출
  componentBindEvent() {
    //자식들이 하나씩 들어옴
    for (const component of this.children) {
      if (component.componentBindEvent) {
        component.componentBindEvent()
      }
    }
  }

  //(4) 변경된 값을 화면에 반영
  render() {
    //페이지 내용을 그려주는 함수
    this.rootEl.innerHTML = this.children.reduce(
      (prevComponent, currentComponent) => {
        return `${prevComponent}${currentComponent.render()}`
      },
      ``,
    )
  }
}

export default MainPage
