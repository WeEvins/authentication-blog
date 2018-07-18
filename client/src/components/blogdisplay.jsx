import Reat, { Component, Fragment } from 'react';


class BlogDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blogs: []
        };
    }
    async componentDidMount() {
        try {
            let res = await fetch('/api/blogs');
            let blogs = await res.json();
            this.setState({ blogs });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        let blogPost = this.state.blogs.map((blogPost, index) => {
            return (
                <div key={index} className="card p-4 m-5">
                    <h1> {blog.title} </h1>
                    <h3> {blog.author} </h3>
                    <p> {blog.content} </p>
                </div>
            )
        });

        return (
            <Fragment>
                {blogPost}
            </Fragment>
        );
    }
};

export default Blog;