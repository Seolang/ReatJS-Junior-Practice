import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => {
    setCounter((prev) => prev + 1);
  };
  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  // useEffect run only the first render time.
  useEffect(() => {
    console.log("i run only once");
  }, []);

  // search run only when keyword changes
  // watching states 'keyword'
  useEffect(() => {
    if (keyword != "" && keyword.length > 5) {
      console.log("I run when 'keyword' changes");
    }
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);

  // Deps could add multiple states
  useEffect(() => {
    console.log("I run when 'counter and keyword' changes");
  }, [counter, keyword]);


  return (
    <div className="App">
      <input 
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="Search here..." 
      />
      <h1 className={styles.title}>{counter}</h1>
       {/*<Button text={"Continue!"} />*/}
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
