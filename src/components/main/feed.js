import './feed.scss'

class Feed {
  constructor(props) {
    this.props = props
  }

  render() {
    //데이터가 있을 때만 그려지도록 할 수 있음
    if (!this.props.feeds.length) {
      return ``
    }

    const components = this.props.feeds.reduce((prev, feed) => {
      return `
            ${prev}
            <li class="feed">
                <div class="header">
                    <img src="${feed.thumbnail}" alt="유저 이미지" />
                    <div class="info">
                        <div class="txt_name">${feed.name}</div>
                        <div class="txt_location">${feed.location}</div>
                    </div>
                </div>
                <img src="${feed.imageUrl}" alt="피드 이미지" />
            </li>
        `
    }, ``)

    return `
        <div class="wrap_feed">
            <ul>
                ${components}
            </ul>
        </div>
    `
  }
}

export default Feed
