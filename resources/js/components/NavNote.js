import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';
import { createNote } from '../actions/note';

const NavNote = ({ createNote, logout }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    body: ''
  });

  const { title, body } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
    <div className="my-10 flex flex-row justify-between mx-auto">
    <button 
      className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded"
      onClick={() => setShowForm(!showForm)}
      type="button"
    >
      {showForm ? 'Cancel' : 'New Note' }
    </button>
    <h1 className="text-3xl font-bold">Notes</h1>
    <button className="bg-red-500 hover:bg-red-400 text-black font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" onClick={logout}>
      Log Out
    </button>
    </div>
    {showForm && 
      <form 
      className="w-9/12 mx-auto" 
      onSubmit={e => {
        e.preventDefault();
        createNote(formData);
        setShowForm(!showForm);
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
          />
        </div>
        <button type="submit" className="form submit">Create Note</button>
      </form>
      }
    </>
  )
}

NavNote.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  createNote: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { createNote, logout })(NavNote);