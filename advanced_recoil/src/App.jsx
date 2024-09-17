import { useRecoilValue } from 'recoil';
import './App.css';
import { jobsAtom, messagingAtom, networkAtom, notificationAtom } from './atom';

function App() {
  const networkAtomCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  return (
    <>
      <button>Home</button>
      <button>
        My Network ({networkAtomCount >= 100 ? '99+' : networkAtomCount})
      </button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notification ({notificationAtomCount})</button>
      <button>Me</button>
    </>
  );
}

export default App;
