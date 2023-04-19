import React from "react";
import { PHOTO_DELETE } from "../../api";
import useFetch from "../../Hooks/useFetch";
import styles from "../Photo/PhotoDelete.module.css";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm("Tem certeza que deseja deletar?"); //return true ou false
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload(); //recarrega a pagina
    }
  }
  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled >Deletando...</button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
