import './header.scss'

class Header {
  constructor(props) {
    this.props = props //user, router

    console.log('props', props)
  }

  componentBindEvent() {
    document.querySelector('.wrap_header').addEventListener('click', (e) => {
      const { push } = this.props.router

      if (e.target.className === 'logo') {
        // 메인 페이지로 이동
        push('/')
      }
      if (e.target.className === 'thumbnail') {
        // 마이페이지로 이동
        push('/my')
      }
      if (e.target.className === 'btn_signin') {
        // 로그인 페이지로 이동
        push('/signin')
      }
    })
  }

  render() {
    return `
        <div class="wrap_header">
            <img class="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" alt="로고"/>
            <div class="wrap_user">
                ${
                  this.props.user
                    ? `
                        <img class="thumbnail" src="${this.props.user.thumbnail}" alt="유저이미지"/>
                        `
                    : `
                        <button class="btn_signin">로그인</button>
                    `
                }
            </div>
        </div>
    `
  }
}

export default Header
