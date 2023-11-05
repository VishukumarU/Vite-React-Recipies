import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            <Link to="/login">Login</Link>
            <p>Welcome to dashboard</p>
        </>
    );
};

export default Dashboard;