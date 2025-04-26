import { useUser } from "../pages/UserContext";

const LogoutButton = () => {
  const { loggedInUser, setLoggedInUser } = useUser();

  if (!loggedInUser) return null;

  return (
    <button
      type="button"
      onClick={() => setLoggedInUser(null)}
      className="btn btn-sm btn-danger"
    >
      {loggedInUser.type === 'user' ? 'Log out User' : 'Log out Admin'}
    </button>
  );
};

export default LogoutButton;
