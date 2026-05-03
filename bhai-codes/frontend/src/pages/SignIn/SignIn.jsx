import React, { useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router";
const SignIn = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    // Redirect if already signed in
    React.useEffect(() => {
        if (currentUser) {
            navigate("/");
        }
    }, [currentUser, navigate]);
    const handleGoogleSignIn = async () => {
        setLoading(true);
        setError("");
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            navigate("/"); // Redirect to home after sign in
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="card shadow">
                        <div className="card-body p-4">
                            <div className="text-center mb-4">
                                <h2 className="card-title">Welcome Back</h2>
                                <p className="text-muted">Sign in to your account</p>
                            </div>
                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    <i className="bi bi-exclamation-triangle-fill me-2"></i>
                                    {error}
                                </div>
                            )}
                            <button
                                onClick={handleGoogleSignIn}
                                disabled={loading}
                                className="btn btn-outline-primary w-100 d-flex align-items-center
justify-content-center mb-3"
                                style={{ border: "2px solid #4285f4", color: "#4285f4" }}
                            >
                                {loading ? (
                                    <>
                                        <div
                                            className="spinner-border spinner-border-sm me-2"
                                            role="status"
                                        >
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        Signing in...
                                    </>
                                ) : (
                                    <>
                                        <i className="fa-brands fa-google mx-2"></i>
                                        Sign in with Google
                                    </>
                                )}
                            </button>
                            <div className="text-center">
                                <small className="text-muted">
                                    By signing in, you agree to our Terms of Service and Privacy
                                    Policy.
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SignIn;