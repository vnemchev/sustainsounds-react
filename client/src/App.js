import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AuthProvider } from './contexts/authContext';
import { EventProvider } from './contexts/eventContext';

import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import Home from './components/Home/Home';
import EventList from './components/events/EventList/EventList';
import EventDetails from './components/events/EventDetails/EventDetails';
import EventCreate from './components/events/EventCreate/EventCreate';
import EventEdit from './components/events/EventEdit/EventEdit';
import ArtistList from './components/artists/ArtistList/ArtistList';
import Profile from './components/profile/Profile/Profile';
import ProfileEdit from './components/profile/ProfileEdit/ProfileEdit';
import About from './components/About/About';

import * as eventService from './services/eventService';

const App = () => {
    // const [events, setEvents] = useState([]);

    // useEffect(() => {
    //     eventService
    //         .getAll()
    //         .then(res => setEvents(res))
    //         .catch(err => alert(err.message));
    // }, []);

    return (
        <>
            <AuthProvider>
                <EventProvider>
                    <Header />

                    <main className="main-container">
                        <Routes>
                            <Route path="/login" element={<Login />}></Route>

                            <Route path="/logout" element={<Logout />}></Route>

                            <Route
                                path="/register"
                                element={<Register />}
                            ></Route>

                            <Route path="/" element={<Home />}></Route>

                            <Route
                                path="/events"
                                element={<EventList />}
                            ></Route>

                            <Route
                                path="/events/:eventId"
                                element={<EventDetails />}
                            ></Route>

                            <Route
                                path="/create"
                                element={<EventCreate />}
                            ></Route>

                            <Route
                                path="/events/:eventId/edit"
                                element={<EventEdit />}
                            ></Route>

                            <Route
                                path="/artists"
                                element={<ArtistList />}
                            ></Route>

                            <Route
                                path="/profile"
                                element={<Profile />}
                            ></Route>

                            <Route
                                path="/profile/edit"
                                element={<ProfileEdit />}
                            ></Route>

                            <Route path="/about" element={<About />}></Route>
                        </Routes>
                    </main>

                    <Footer />
                </EventProvider>
            </AuthProvider>
        </>
    );
};

export default App;
