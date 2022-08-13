import { Route, Routes } from 'react-router-dom';

import { AuthProvider } from './contexts/authContext';
import { EventProvider } from './contexts/eventContext';

import PrivateRoute from './components/common/PrivateRoute';
import Header from './components/common/Header/Header';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import Home from './components/Home/Home';
import EventList from './components/events/EventList/EventList';
import EventDetails from './components/events/EventDetails/EventDetails';
import EventCreate from './components/events/EventCreate/EventCreate';
import EventEdit from './components/events/EventEdit/EventEdit';
import ArtistList from './components/artists/ArtistList/ArtistList';
import ArtistDetails from './components/artists/ArtistDetails/ArtistDetails';
import Profile from './components/profile/Profile/Profile';
import ProfileEdit from './components/profile/ProfileEdit/ProfileEdit';
import Error404 from './components/common/404/404';

import './App.module.css';

const App = () => {
    return (
        <>
            <AuthProvider>
                <EventProvider>
                    <Header />

                    <main>
                        <Routes>
                            <Route path="/404" element={<Error404 />}></Route>
                            <Route path="/login" element={<Login />}></Route>

                            <Route
                                path="/logout"
                                element={
                                    <PrivateRoute>
                                        <Logout />
                                    </PrivateRoute>
                                }
                            ></Route>

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
                                element={
                                    <PrivateRoute>
                                        <EventCreate />
                                    </PrivateRoute>
                                }
                            ></Route>

                            <Route
                                path="/events/:eventId/edit"
                                element={
                                    <PrivateRoute>
                                        <EventEdit />
                                    </PrivateRoute>
                                }
                            ></Route>

                            <Route
                                path="/artists"
                                element={<ArtistList />}
                            ></Route>

                            <Route
                                path="/artists/:artistId"
                                element={<ArtistDetails />}
                            ></Route>

                            <Route
                                path="/profile"
                                element={<Profile />}
                            ></Route>

                            <Route
                                path="/profile/edit"
                                element={
                                    <PrivateRoute>
                                        <ProfileEdit />
                                    </PrivateRoute>
                                }
                            ></Route>
                        </Routes>
                    </main>
                </EventProvider>
            </AuthProvider>
        </>
    );
};

export default App;
