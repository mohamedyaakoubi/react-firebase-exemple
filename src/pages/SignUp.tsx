import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';

import { useForm } from 'react-hook-form';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

export const SignUp = () => {
	const navigate = useNavigate();
	const { handleSubmit, register } = useForm();

	const SubmitData = (data: any) => {
		createUserWithEmailAndPassword(auth, data.email, data.pass)
			.then((userCredentials) => {
				console.log(userCredentials);
				navigate('/home');
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	return (
		<div>
			<form onSubmit={handleSubmit(SubmitData)} className="myForm">
				<input type="text" placeholder="full name" {...register('name')} />
				<input type="text" placeholder="email" {...register('email')} />
				<input type="password" placeholder="password" {...register('pass')} />
				<input type="submit" />
			</form>
			<Link to="/sign-in">Already have an account ?</Link>
		</div>
	);
};
