import { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import { SignInContainer, SignInTitle, SignInButtons } from './sign-in.styles';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error){
            console.log(error);
        }
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email'
                        label='Email'
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required />
                    <FormInput
                        name='password'
                        label='Password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required />

                    <SignInButtons>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </SignInButtons>
                </form>
            </SignInContainer>
        );
    }
}

export default SignIn;
