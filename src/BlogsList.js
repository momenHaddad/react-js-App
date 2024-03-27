const BlogsList = ({blogs, title}) =>{
    

    return(
        <div>
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className='blogs-view' key={blog.id}>
                    <h1>{blog.title}</h1>
                    <p>written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default BlogsList;