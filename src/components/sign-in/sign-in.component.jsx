import React, {useState} from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import '../custom-button/custom-button.styles.scss';
import './sign-in.styles.scss';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    //Destructure emailSignInStart
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         email: '',
    //         password:'' 
    //     }
    // } 
    // Because we gonna convert class based to functional based for hooks
    const [userCredentials, setCredentials] = useState({ email:'', password:'' })
    // In here we change the this.state to useState

    const { email, password } = userCredentials;
    const handleSubmit = async event => {
        event.preventDefault();  //stopping default event behaviour
        
        //Why userCredentials cause we can't use this.state so we use userCredentials

        emailSignInStart(email, password);
    };


    const handleChange = event => {
        const {value, name} = event.target
        setCredentials({...userCredentials, [name]: value})
        //We have to add other component also so we spred the userCredentials
    };

 
    // render(){
    //     const { googleSignInStart } = this.props;
    //We remove render cause it is class based 
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                
                <span>Sign in with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput name="email" type="email" value={email} 
                    
                    handleChange={handleChange}
                    label="Email"
                    required/>
                   
                    <FormInput name="password" type="password" value={password} 
                    handleChange={handleChange}
                    label="Password"
                    required/>
                    <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type='button'onClick={googleSignInStart}  isGoogleSignIn> 
                            Sign In With Google
                        </CustomButton>
                    </div>    
                </form>
            </div>
        );
    }
 

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(
        emailSignInStart({ email, password }))
})


export default connect(null, mapDispatchToProps)(SignIn);