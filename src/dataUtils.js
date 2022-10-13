import { data } from "./data";

export const importDataIntoLocalStorage = () => {
  localStorage.setItem('data', JSON.stringify(data.people));
}