import axios from 'axios';

const API_URI = 'https://yalantis-react-school-api.yalantis.com/api/task0/users';

const fetchUsers = axios
  .get(API_URI)
  .then(items => items)
  .catch(e => {
    console.log(e);
  });

export default { fetchUsers };
