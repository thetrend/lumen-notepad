import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) => 
  alerts !== null && alerts.length > 0 && alerts.map(alert => (
    <div key={alert.id} className={`alert-${alert.type}`}>
      {alert.message}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = ({ alert }) => ({
  alerts: alert
});

export default connect(mapStateToProps)(Alert);