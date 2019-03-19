import React from 'react'
import Post from '../Post'

class CategoryTemplateDetails extends React.Component {
  render() {
    const items = []
    const { category } = this.props.pageContext
    const posts = this.props.data.allMarkdownRemark.edges
    posts.forEach(post => {
      items.push(<Post data={post} key={post.node.fields.slug} />)
    })

    return (
      <div className="content">
        <div className="content__inner">
          <div className="page">
            <h1 className="page__title">{category}</h1>
            {category === 'Work' &&
              <React.Fragment>
                <p>
                  Hi, thanks for visiting up. Probably I don't write any technical posts anymore here.
                </p>
                <p>
                  I have no idea what I'm doing, if you are my old visitor it seems you have known me. With love, find
                  me anywhere.
                </p>
              </React.Fragment>
            }
            <div className="page__body">{items}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default CategoryTemplateDetails
