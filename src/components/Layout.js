import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import HEAD from './head'
import FOOT from './foot'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    // let header

    // if (location.pathname === rootPath) {//如果是在主页面 head会大一些
    //   header = (
    //     <h1
    //       style={{
    //         ...scale(1.5),
    //         marginBottom: rhythm(1.5),
    //         marginTop: 0,
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: `none`,
    //           textDecoration: `none`,
    //           color: `inherit`,
    //         }}
    //         to={`/`}
    //       >
    //         {title}
    //       </Link>
    //     </h1>
    //   )
    // } else {
    //   //点击后到达的详情页
    //   header = (//头部
    //     <h3
    //       style={{
    //         fontFamily: `Montserrat, sans-serif`,
    //         marginTop: 0,
    //         marginBottom: rhythm(-1),
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: `none`,
    //           textDecoration: `none`,
    //           color: `inherit`,
    //         }}
    //         to={`/`}
    //       >
    //       {/* {`是克洛洛啊`} */}
    //         {title}
    //       </Link>
    //     </h3>
    //   )
    // }
    return (
      <div className="Layout_Box"
        // style={{
        //   marginLeft: `auto`,
        //   marginRight: `auto`,
        //   maxWidth: rhythm(24),
        //   padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        // }}
      > 
        <HEAD/>
        {/* 头部 */}
        {/* {header} */}
        {/* 内容页 */}
        <div className="Content_Box">
        {children}   
        </div>
        <FOOT/>
      </div>
    )
  }
}

export default Layout
