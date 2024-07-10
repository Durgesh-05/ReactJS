import { useEffect, useState } from 'react';
import './App.css';
import { Cards } from './components/Cards';
import { Navbar } from './components/Navbar';
import { Filter } from './components/Filter';
import { filterData, apiUrl } from './data';

function App() {
  // const [text, setText] = useState('');
  // function changeHandler(e) {
  //   console.log(text);
  //   setText(e.target.value);
  // }

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
  // useEffect(() => {
  //   console.log('add event listener');

  //   return () => {
  //     console.log('remove event listener');
  //   };
  // }, [text]);

  const [response, setResponse] = useState('');

  useEffect(() => {
    fetch(apiUrl)
      .then((coursesData) => coursesData.json())
      .then((courses) => setResponse(courses.data))
      .catch((e) => console.error('Error: ', e));
  }, []);

  return (
    <div>
      <Navbar />
      <Filter filterData={filterData} />
      <Cards courses={response} />
    </div>
  );
}

export default App;
