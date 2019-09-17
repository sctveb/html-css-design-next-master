import React, { Component } from 'react';

class ListArticle extends Component {
    render() {
        const {pic, title, value} = this.props;
        return (
            <article>
            <a href="#">
              <div className="photo" style={{backgroundImage: `url(/static/image/${pic}.jpg)`}}>
              </div>              
              <div className="text">
                <h2>{title}</h2>
                <p>{value}</p>
              </div>
              </a>
            </article>
        )
    }
}

export default ListArticle;