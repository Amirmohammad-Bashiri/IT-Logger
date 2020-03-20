import React from 'react';
import PropTypes from 'prop-types';
import { getTechs } from '../../actions/techActions';
import { connect } from 'react-redux';

const techSelectOptions = ({ getTechs, tech: { loading, techs } }) => {
	return (
		!loading &&
		techs !== null &&
		techs.map((t) => {
			return (
				<option key={t.id} value={`${t.firstName} ${t.lastName}`}>
					{t.firstName} {t.lastName}
				</option>
			);
		})
	);
};

techSelectOptions.propTypes = {
	getTechs: PropTypes.func.isRequired,
	tech: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
	return {
		tech: state.tech
	};
};

export default connect(mapStateToProps, { getTechs })(techSelectOptions);
