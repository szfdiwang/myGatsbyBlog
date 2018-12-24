import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social,address } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
              fontSize:12
            }}
          >
            {/* icon小图片部分 */}
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
                border:`1px solid #a9a9a9`
              }}
            />
            <p>
              Written by <strong>{author}</strong><br></br>
              {/* who lives and works in ShenZhen. */}
              Address&nbsp;:&nbsp;{address}<br></br>
              QQ&nbsp;:&nbsp;{social.twitter}<br></br>
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/saosao.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        address
        social {
          twitter
        } 
      }
    }
  }
`

export default Bio
