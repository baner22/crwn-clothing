import { 
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect,
    createAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils'

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
    // useEffect(async() => {
    //     const response = await getRedirectResult(auth);
    //     if (response) {
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }
    // }, [])
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google popup
            </button>
            <SignUpForm/>
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button> */}
        </div>
    );
};

export default SignIn;