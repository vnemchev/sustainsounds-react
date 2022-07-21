import { Route, Routes } from 'react-router-dom';

import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';

import Login from './components/auth/login-register/Login';
import Register from './components/auth/login-register/Register';
import Create from './components/events/create-event/Create';

const App = () => {
    return (
        <>
            <Header />

            <div className="main-container">
                <Routes>
                    <Route path="/" element={<h1>Home</h1>}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/create" element={<Create />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/events" element={<h1>Events</h1>}></Route>
                    <Route path="/artists" element={<h1>Artists</h1>}></Route>
                    <Route path="/profile" element={<h1>Profile</h1>}></Route>
                    <Route path="/about" element={<h1>About</h1>}></Route>
                </Routes>
            </div>

            <Footer />
        </>
    );
};

export default App;
