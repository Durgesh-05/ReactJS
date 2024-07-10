import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  function changeHandler(e) {
    console.log(text);
    setText(e.target.value);
  }

  // Case 1 - run whenever App component renders
  // useEffect(() => {
  //   console.log('UI rendering');
  // });

  // Case 2 - App component renders but run once only
  // useEffect(() => {
  //   console.log('Render once');
  // }, []);

  // Case 3 - App component renders once + whenever dependency list changes
  // useEffect(() => {
  //   console.log('change done');
  // }, [text]);

  // Case 4 - To unmount something
  useEffect(() => {
    console.log('add event listener');

    return () => {
      console.log('remove event listener');
    };
  }, [text]);

  return (
    <div>
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
