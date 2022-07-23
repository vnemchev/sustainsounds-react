import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';

import Home from './components/Home/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Profile from './components/profile/Profile/Profile';
import EventList from './components/events/EventList/EventList';
import EventCreate from './components/events/EventCreate/EventCreate';
import EventDetails from './components/events/EventDetails/EventDetails';
import ArtistList from './components/artists/ArtistList/ArtistList';

import * as eventService from './services/eventService';

const App = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        eventService
            .getAll()
            .then(res => setEvents(res))
            .catch(err => alert(err.message));
    }, []);

    return (
        <>
            <Header />

            <div className="main-container">
                <Routes>
                    <Route path="/" element={<Home />}></Route>

                    <Route
                        path="/events"
                        element={<EventList events={events} />}
                    ></Route>

                    <Route path="/artists" element={<ArtistList />}></Route>

                    <Route path="/create" element={<EventCreate />}></Route>

                    <Route path="/about" element={<h1>About</h1>}></Route>

                    <Route path="/login" element={<Login />}></Route>

                    <Route path="/register" element={<Register />}></Route>

                    <Route path="/profile" element={<Profile />}></Route>

                    <Route path="/events/:eventId" element={<EventDetails />}>
                        details
                    </Route>
                </Routes>
            </div>

            <Footer />
        </>
    );
};

export default App;
