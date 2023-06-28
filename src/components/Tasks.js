import styles from "./Tasks.module.css";

const Tasks = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <form className={styles.container} onSubmit={submitHandler}>
      <button>+</button>
    </form>
  );
};

export default Tasks;