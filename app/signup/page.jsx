import AuthShell from '@/components/AuthShell';
import AuthForm from '@/components/AuthForm';

export const metadata = { title: 'Create an Account – ByteSpace' };

export default function Signup() {
  return (
    <AuthShell intro={{ title: 'Sign up and come in', text: 'The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost' }}>
      <AuthForm mode="signup" />
    </AuthShell>
  );
}
