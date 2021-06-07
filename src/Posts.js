import './Posts.css';

const Posts = () => {
  return (
    <div>
      <div className="posts-list">
        <h3>All posts</h3>
        <table>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
          <tr>
            <td>1</td>
            <td>How to cook</td>
            <td>This is a guite to cooking solmon...</td>
            <td>
              <button>Show comments</button>
            </td>
          </tr>
        </table>
      </div>
      <div className="posts-comments">
        <Comments postId={3}></Comments>
      </div>
    </div>
  );
};

const Comments = ({ postId }) => {
  return (
    <div>
      <h3>Comments for post How to cook</h3>
      <p>There are 5 comments</p>
      <p>Comments go here</p>
    </div>
  );
};

export default Posts;
