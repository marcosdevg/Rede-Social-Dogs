import React from "react";
import { UserContext } from "../../UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";
import styles from "./PhotoComments.module.css";

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef(null)
  const { login } = React.useContext(UserContext);

  React.useEffect(() => {
    // linha para mover o scroll para o ultimo comentario.
    // commentsSection.current.scrollTop move o comentario para baixo
    // commentsSection.current.scrollHeight tamanho da secçao
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight
  },[comments] )
  return (
    <>
      <ul ref={commentsSection} className={`${styles.comments} ${props.single ? styles.single : ''}`}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm single={props.single} id={props.id} setComments={setComments}/>}
    </>
  );
};

export default PhotoComments;
