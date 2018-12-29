import React from 'react'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'
import BIO from './Bio'

class foot extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let foot
      //点击后到达的详情页
      foot = (//头部
        <div className="Foot_Box">
            <BIO/>
        </div>
      )
    return (
    <div>
        {foot}
    </div>
        
    )
  }
}

export default foot
