import { data } from "./data";

export const importDataIntoLocalStorage = () => {
  localStorage.setItem('data', JSON.stringify(data.people));
}

export const addPerson = (personToAdd) => {
  const data = JSON.parse(localStorage.getItem('data'));
  if (data.length) {
    const min = Math.ceil(10);
    const max = Math.floor(100);
    const id = Math.floor(Math.random() * (max - min + 1)) + min;

    data.push({id, ...personToAdd});
    localStorage.setItem('data', JSON.stringify(data));
  }
}