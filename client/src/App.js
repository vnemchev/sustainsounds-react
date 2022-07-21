import { Route, Routes } from 'react-router-dom';

import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';

import Home from './components/Home/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import CreateEvent from './components/events/CreateEvent/CreateEvent';
import EventDetails from './components/events/EventDetails/EventDetails';

const App = () => {
    return (
        <>
            <Header />

            <div className="main-container">
                <Routes>
                    <Route path="/" element={<Home />}></Route>

                    <Route path="/events" element={<h1>Events</h1>}></Route>

                    <Route path="/artists" element={<h1>Artists</h1>}></Route>

                    <Route path="/create" element={<CreateEvent />}></Route>

                    <Route path="/about" element={<h1>About</h1>}></Route>

                    <Route path="/login" element={<Login />}></Route>

                    <Route path="/register" element={<Register />}></Route>

                    <Route path="/profile" element={<h1>Profile</h1>}></Route>

                    <Route path="/details" element={<EventDetails />}>
                        details
                    </Route>
                </Routes>
            </div>

            <Footer />
        </>
    );
};

export default App;
