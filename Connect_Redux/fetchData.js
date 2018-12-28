export function fetchData() {
  return fetch('http://192.168.56.1:8000')
  .then(res => res.json())
  .then(obj => obj.list)
  .catch(e => console.log(e))
}