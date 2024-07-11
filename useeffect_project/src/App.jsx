import { useEffect, useState } from 'react';
import './App.css';
import { Cards } from './components/Cards';
import { Navbar } from './components/Navbar';
import { Filter } from './components/Filter';
import { filterData, apiUrl } from './data';
import { toast } from 'react-toastify';

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

  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState('All');
  useEffect(() => {
    fetch(apiUrl)
      .then((coursesData) => coursesData.json())
      .then((courses) => setCourses(courses.data))
      .catch((e) => toast.error(e));
  }, []);

  return (
    <div>
      <Navbar />
      <Filter filterData={filterData} setCategory={setCategory} />
      <Cards courses={courses} category={category} />
    </div>
  );
}

export default App;
