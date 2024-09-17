import {
  atom,
  atomFamily,
  selector,
  selectorFamily,
  useRecoilValue,
} from 'recoil';

export const networkAtom = atom({
  key: 'networkAtom',
  default: 100,
});

export const jobsAtom = atom({
  key: 'jobsAtom',
  default: 0,
});

export const notificationAtom = atom({
  key: 'notificationAtom',
  default: 12,
});

export const messagingAtom = atom({
  key: 'messagingAtom',
  default: 0,
});

export const totalNotificationSelector = selector({
  key: 'totalNotificationSelector',
  get: ({ get }) => {
    const notificationAtomCount = get(notificationAtom);
    const messagingAtomCount = get(messagingAtom);
    const jobsAtomCount = get(jobsAtom);
    const networkAtomCount = get(networkAtom);

    return (
      notificationAtomCount +
      messagingAtomCount +
      jobsAtomCount +
      networkAtomCount
    );
  },
});

// If want to create default data populate from backend call we need to use async data queries
// In this we pass selector as value in default
// What will happen by using this? In this you can populate data directly from backend call without need of creating deafult value in atoms and it will not show data until backend call provides value so we see white screen when backend call hits

const totalNotificationAtom = atom({
  key: 'totalNotificationAtom',
  default: selector({
    key: 'totalNotificationAtomSelector',
    get: async () => {
      // const res = await {"Your backend api"}
      // return res.data
    },
  }),
});

// If we want to populate the data dynamically in an atom one by one we are going to need atomFamily to store different atoms

const todoAtomFamily = atomFamily({
  key: 'todoAtomFamily',
  default: (id) => {
    // Based on some condition we can dynamically populate atom
  },
});

// Similarly if we want to do this but from backend call we will need selectorFamily
const dynamicTodoAtomFamily = atomFamily({
  key: 'dynamicTodoAtomFamily',
  default: selectorFamily({
    key: 'dynamicTodoAtomSelectorFamily',
    get: (id) => {
      return async () => {
        // call the backend and populate data asynchronously
      };
    },
  }),
});

// I have use id here so that I will get this atom by id
// We can implement this by using this
// const todoIdItem = useRecoilValue(dynamicTodoAtomFamily(id))
