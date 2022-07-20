import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';

import Login from './components/auth/Login';
import Register from './components/auth/Register';

const App = () => {
    return (
        <>
            <Header />

            <div className="main-container">
                <Register />
                <Login />
            </div>

            <Footer />
        </>
    );
};

export default App;
