import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';

import Create from './components/events/create-event/Create';

import Login from './components/auth/login-register/Login';
import Register from './components/auth/login-register/Register';

const App = () => {
    return (
        <>
            <Header />

            <div className="main-container">
                <Register />
                <Login />
                <Create />
            </div>

            <Footer />
        </>
    );
};

export default App;
