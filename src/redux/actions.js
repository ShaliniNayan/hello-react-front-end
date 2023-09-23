import axios from 'axios';

const fetchDataSuccess = (data) => ({
  type: 'FETCH_DATA_SUCCESS',
  payload: data,
});

export const fetchRandomGreeting = () => {
  return (dispatch) => {
    axios
      .get('your_api_endpoint')
      .then((response) => {
        dispatch(fetchDataSuccess(response.data));
      })
      .catch((error) => {});
  };
};
