import axios from 'axios';
import { noteConstants } from '../types/note';
const { GET_NOTES, NOTE_ERROR, DELETE_NOTE, CREATE_NOTE, UPDATE_NOTE } = noteConstants;
import { setAlert } from '../actions/alert';

const notesAPI = '/api/notes';

export const getNotes = () => async dispatch => {
  try {
    const response = await axios
      .get(`${notesAPI}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        }
      })
      .then(response => response);
    dispatch({
      type: GET_NOTES,
      payload: response.data.notes
    });
  } catch (error) {
    dispatch({
      type: NOTE_ERROR
    });
  }
};

export const deleteNote = id => async dispatch => {
  try {
    await axios
      .delete(`${notesAPI}/note/${id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        }
      })
      .then(response => response);
    dispatch({
      type: DELETE_NOTE,
      payload: id
    });
    dispatch(setAlert('Note deleted.', 'success'));
  } catch (error) {
    dispatch({
      type: NOTE_ERROR
    });
  }
};

export const editNote = (formData, id) => async dispatch => {
  const config = {
    headers: {
      'Authorization': `Bearer ${localStorage.token}`,
      'Content-Type': 'application/json'
    }
  };
  try {
    await axios
      .put(`${notesAPI}/note/${id}`, formData, config)
      .then(response => dispatch({
        type: UPDATE_NOTE,
        payload: response.data
      }))
      .finally(dispatch(setAlert('Note updated.', 'success')));
  } catch (error) {
    dispatch({
      type: NOTE_ERROR,
      payload: error
    });
  }
};

export const createNote = formData => async dispatch => {
  const config = {
    headers: {
      'Authorization': `Bearer ${localStorage.token}`,
      'Content-Type': 'application/json'
    }
  };
  try {
    await axios
      .post(`${notesAPI}/create`, formData, config)
      .then(response => dispatch({
      type: CREATE_NOTE,
      payload: response.data
    }))
    .finally(dispatch(setAlert('Note created!', 'success')));
  } catch (error) {
    dispatch({
      type: NOTE_ERROR,
      payload: error
    });
  }
};