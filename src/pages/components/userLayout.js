import Header from "./header";

export default function UserLayout({ user }) {
  var isBlocked = String(user.isblocked);
    return (
    <>
      <Header />
      <a href="/allUser">Back to User List</a>
        <p>User ID: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Block Status: {isBlocked}</p>   
    </>
  );
}
