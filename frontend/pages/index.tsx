import { useUser } from "@auth0/nextjs-auth0";

export default function Home() {
  const { user } = useUser();

  return (
    <div className="p-4">
      <h1>Welcome to the Canadian Dayhome Finder!!</h1>
      {user ? <p>Hello, {user.name}</p> : <a href="/api/auth/login">Login</a>}
    </div>
  );
}
