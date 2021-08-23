import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import parse from 'html-react-parser';
import { deleteNote, editNote } from '../actions/note';

const Note = ({ auth, note, deleteNote, editNote }) => {
  const [editForm, setEditForm] = useState(false);
  const [formData, setFormData] = useState({
    title: note.title,
    body: note.body
  });

  const { title, body } = formData;
  const id = note.id;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const timestamp = new Date(note.created_at);
  return (
    <>
      <div className="bg-gray-800 bg-opacity-90 rounded-lg p-10 my-4 w-full flex flex-col">
        { !editForm ? 
        (<>
          <h2 className="text-xl font-semibold">{note.title} <small className="block lg:inline">(created by {auth.user.name}, &nbsp;
        <time dateTime={note.created_at}>
          {new Intl.DateTimeFormat(undefined, { weekday: 'long', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }).format(timestamp)}
        </time>)</small></h2>
        <div className="note">{parse(note.body)}</div>
        </>) :
        (<>
          <form 
      className="w-11/12 mx-auto"
      onSubmit={e => {
        e.preventDefault();
        editNote(formData, id);
        setEditForm(!editForm);
      }}>
      <div className="form row">
          <input
            name="title"
            id="title"
            type="text"
            value={title}
            className="form input"
            onChange={e => onChange(e)}
            placeholder="Note Title"
          />
        </div>
        <div className="form row">
          <textarea
            name="body"
            id="body"
            value={body}
            className="form textarea input"
            onChange={e => onChange(e)}
            placeholder="Note content"
            rows="4"
          />
        </div>
        <button type="submit" className="form submit">Edit Note</button>
      </form>
        </>)
        }
        <div className="flex flex-row justify-end">
          <a onClick={() => setEditForm(!editForm)} className="text-green-600 hover:text-green-400">{!editForm ? 'Edit' : 'Cancel'}</a>
          <span className="mx-5">&middot;</span>
          <a onClick={e => deleteNote(note.id)} className="text-red-600 hover:text-red-400">Delete</a>
        </div>
      </div>
    </>
  )
};

Note.propTypes = {
  note: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteNote: PropTypes.func.isRequired,
  editNote: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteNote, editNote })(Note);