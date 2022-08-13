# **sustainsounds**

_Welcome to "sustainsounds" - a single page React application working with data provided by a Restful API. We connect artists and fans by providing them a platform on which to share, create and attend music events. Done for educational purposes during a React course. Both the SPA and the REST API have been written by me._

Sustainsounds is a platform for creating, browsing and saving events.  
Guests are able to access the application's collections of events and artists and their respective details.
They may register either as an artist or a fan and these roles give different privileges.

-   Users that are not logged in or registered can access the Events and Artists collections and view the details.

-   As an artist, the user has the ability to create, edit, delete and attend events. The Artist may also edit their profile by providing
    more information about the genre of music that they perform, filling out their bio and uploading a profile picture. When an Artist views their
    profile, they are able to see all owned events and attended events.
-   As a fan, the user has the ability to browse events and artists and attend events. When viewing their profile, a fan can
    see all events that they have attended. The profile edit functionality is not available for fans, neither is manipulating events.

## Structure

-   '/' - Home Page
-   '/events' - Events Page
-   '/events/:eventId' - Event Details Page
-   '/events/:eventId/edit' - Event Edit Page
-   '/artists' - Artists Page
-   '/artists/:artistId' - Artist Details Page
-   '/create' - Create Event Page
-   '/profile' - Profile Page
-   '/profile/edit' - Profile Edit Page
-   '/login' - Login Page
-   '/register' - Register Page
-   '/404' - Error Page

## Technologies used

-   React
-   React Router
-   Node.js
-   mongoose
