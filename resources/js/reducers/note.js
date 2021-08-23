import { noteConstants } from '../types/note';
const { GET_NOTES, NOTE_ERROR, DELETE_NOTE, CREATE_NOTE, UPDATE_NOTE } = noteConstants;

const initialState = {
  notes: [],
  note: null,
  loading: true,
  error: {}
};

const note = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case GET_NOTES:
      return {
        ...state,
        notes: payload,
        loading: false
      };
    case CREATE_NOTE:
      return {
        ...state,
        notes: [payload, ...state.notes],
        loading: false
      }
    case UPDATE_NOTE:
      return {
        ...state,
        notes: [payload, ...state.notes.filter(note => note.id !== payload.id)],
        loading: false
      }
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== payload),
        loading: false
      }
    case NOTE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
};

export default note;