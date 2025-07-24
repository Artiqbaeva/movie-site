import { GoogleLogin, GoogleOAuthProvider,  } from '@react-oauth/google';
import React from 'react';
import { jwtDecode } from "jwt-decode";
import { useStore } from '@/zustand/useStore';

const Login = () => {
  const setAuth = useStore(state => state.setAuth);

  interface DecodedToken {
    email: string;
    name: string;
    picture: string;
  }

  interface CredentialResponse {
    credential?: string;
  }

  const handleSuccess = (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      const decoded = jwtDecode<DecodedToken>(credentialResponse.credential);
      setAuth({
        email: decoded.email,
        name: decoded.name,
        picture: decoded.picture,
      });
    }
  };

  return (
    <GoogleOAuthProvider clientId="570495209460-74qdf4rl9ana3ad2klpt2vsats0to7sg.apps.googleusercontent.com">
      <div className="flex items-center justify-center h-screen">
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={() => console.log('Login Failed')}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default React.memo(Login);
