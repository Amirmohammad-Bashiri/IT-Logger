import React, { useEffect } from 'react';
import TechItem from './TechItem';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';
import PropTypes from 'prop-types';

const TechListModal = ({ getTechs, tech: { loading, techs } }) => {
	useEffect(() => {
		getTechs();
		// eslint-disable-next-line
	}, []);

	return (
		<div id="tech-list-modal" className="modal">
			<div className="modal-content">
				<h4>Technician List</h4>
				<ul className="collection">
					{!loading &&
						techs !== null &&
						techs.map((tech) => {
							return <TechItem key={tech.id} tech={tech} />;
						})}
				</ul>
			</div>
		</div>
	);
};

TechListModal.propTypes = {
	getTechs: PropTypes.func.isRequired,
	techs: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
	return {
		tech: state.tech
	};
};

export default connect(mapStateToProps, { getTechs })(TechListModal);
