import AuthShell from '@/components/AuthShell';
import AuthForm from '@/components/AuthForm';

export const metadata = { title: 'Sign In – ByteSpace' };

export default function Login() {
  return (
    <AuthShell intro={{ title: 'Sign in with ease', text: 'Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.' }}>
      <AuthForm mode="login" />
    </AuthShell>
  );
}
