import { useEffect } from 'react';
import NavNote from './NavNote';
import Note from './Note';
import Alert from './Alert';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router-dom';
import { getNotes } from '../actions/note';
import store from '../store';

const Dashboard = ({ isAuthenticated, note: { notes, loading } }) => {
  if (!isAuthenticated) {
    return <Redirect to='/login' />;
  }
  useEffect(() => {
    store.dispatch(getNotes());
  }, []);

  const notesArray = Object.values(notes);
  return (
    <>
      <NavNote />
      <Alert />
      {loading ? 'Loading' : (
        <div className="grid grid-cols-1 gap-4">
          {
            notesArray.map(note => <Note note={note} key={note.id} />)
          }
        </div>
      )}
    </>
  );
};

Dashboard.propTypes = {
  isAuthenticated: PropTypes.bool,
  getNotes: PropTypes.func.isRequired,
  note: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  note: state.note,
});

export default connect(mapStateToProps, { getNotes })(Dashboard);