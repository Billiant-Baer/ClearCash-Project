import { Link } from "react-router-dom";
const Home = () => {
    return (
        <>
            <div className="center-content ">
                <h1 className='title'>Welcome to Clear Cash</h1>
                <div className='button-group '>
                    <Link className='btn btn-outline-info m-1 'to={'/create/account'} >Create Account</Link>
                    <Link className='btn btn-outline-info m-1 'to={'/login'} >Login</Link>
                    
                </div>
            </div>
            <div className='mainContent'>
                <div className='gradient'></div>
            </div>
            <div className='container'>
                <h5>Thanks so much for coming to my budgeting Website. I will be continually updating this website to make it more functional. </h5>
            </div>
                <div className="buttonSub">
                <Link className="btn btn-outline-info mt-2 " to='/show'>Create Budget</Link>
                </div>
        </>
    );
};
export default Home;











