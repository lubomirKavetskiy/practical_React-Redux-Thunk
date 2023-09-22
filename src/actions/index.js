export const IS_LOADING = 'IS_LOADING';
export const HELLO_RESPONSE = 'HELLO_RESPONSE';

export const isLoading = (isLoading = false) => ({
  type: IS_LOADING,
  isLoading,
});

const charactersResponse = data => ({
  type: HELLO_RESPONSE,
  data,
});

//thunk action creator
export const fetchCharacters = () => async dispatch => {
  dispatch(isLoading(true));

  try {
    const response = await fetch('http://5afa7456edf5520014cbd352.mockapi.io/hello-world');
    const data = await response.json();

    dispatch(charactersResponse(data));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(isLoading(false));
  }
};
