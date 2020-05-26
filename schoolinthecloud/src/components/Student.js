import React, { useState, useEffect } from 'react';
import { apiAuth } from '../utils/apiAuth';

const Student = (props) => {
	const [student, setStudent] = useState({});

	useEffect(() => {
		apiAuth()
			.get('/student')
			.then((res) => {
				setStudent(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<div>{student.name}</div>
		</div>
	);
};
export default Student;
