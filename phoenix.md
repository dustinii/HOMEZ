# HOMEZ - Software Requirements Specification (SRS)

**1. Introduction**

* **1.1 Purpose:** The purpose of this document is to provide a detailed description of the requirements for the HOMEZ application. It will serve as the guiding document for all stages of development, from design to testing and deployment.

* **1.2 Scope:** The HOMEZ application is a web-based ride-sharing platform that connects riders with "Homez" (drivers). It will facilitate ride requests, manage user profiles, and handle reviews and ratings.

* **1.3 User Characteristics:** The application will have different types of users, distinguished by roles within a single `User` model.
    * **Riders:** Users who request rides.
    * **Homez (Drivers):** Users who provide rides.
    * **Administrators:** Users who oversee the platform.

* **1.4 Technologies:** The application will be built using the M-E-R-N stack (MongoDB, Express.js, React, Node.js) with GraphQL for API communication.

**2. Overall Description**

* **2.1 Product Perspective:** HOMEZ aims to provide a safe, reliable, and user-friendly ride-sharing service. It will differentiate itself through a focus on community and transparency.

* **2.2 User Classes and Characteristics:**
    * **2.2.1 User:** A single `User` model will represent all individuals interacting with the app. A `role` field will define their capabilities.
        * **As a Rider:**
            * Can create an account, log in, and manage their profile.
            * Can request rides by specifying pickup and drop-off locations.
            * Can view their ride history and leave reviews for their Homez.
        * **As a Homez (Driver):**
            * Can create an account, log in, and manage their profile (including vehicle information).
            * Can view available ride requests and accept them.
            * Can view their earnings and ride history.
        * **As an Administrator:**
            * Can manage all users (Riders and Homez).
            * Can monitor all ride activities and resolve disputes.
            * Can manage platform settings and content.

* **2.3 Operating Environment:** The application will be a web-based platform accessible through modern web browsers on desktops and mobile devices.

* **2.4 Design and Implementation Constraints:**
    * The application must be developed using the M-E-R-N stack.
    * The `Homez.js` model for driver teams is to be removed.
    * The `User.js` model must be updated to include a `role` to differentiate user types.
    * All communication between the client and server must be handled via GraphQL.

**3. System Features**

* **3.1 User Authentication:**
    * **3.1.1 Description and Priority:** High-priority feature that allows users to securely access the platform based on their role.
    * **3.1.2 Functional Requirements:**
        * **REQ-1:** Users shall be able to create a new account, selecting a role (Rider or Homez).
        * **REQ-2:** Users shall be able to log in using their credentials.
        * **REQ-3:** The system shall use JSON Web Tokens (JWT) for secure authentication.
        * **REQ-4:** The system shall restrict access to features based on the user's role.

* **3.2 Ride Management:**
    * **3.2.1 Description and Priority:** This is the core feature of the application.
    * **3.2.2 Functional Requirements:**
        * **REQ-5:** A user with the "Rider" role shall be able to request a ride.
        * **REQ-6:** A user with the "Homez" role shall be able to view and accept available ride requests.
        * **REQ-7:** The `driverId` on the `Ride` model will reference the `_id` of the User with the "Homez" role who accepted the ride.
        * **REQ-8:** The system shall track the status of a ride (e.g., "requested," "in-progress," "completed").

* **3.3 User Profile Management:**
    * **3.3.1 Description and Priority:** Medium-priority feature for managing user profiles.
    * **3.3.2 Functional Requirements:**
        * **REQ-9:** Users shall be able to view and edit their profile details.
        * **REQ-10:** Users with the "Homez" role shall have additional profile fields for vehicle information.
        * **REQ-11:** Users shall be able to view a history of their past rides.

* **3.4 Reviews and Ratings:**
    * **3.4.1 Description and Priority:** Medium-priority feature for building trust.
    * **3.4.2 Functional Requirements:**
        * **REQ-12:** Riders shall be able to rate and review their Homez after a completed ride.
        * **REQ-13:** Homez shall be able to view their average rating and individual reviews.

**4. External Interface Requirements**

* **4.1 User Interfaces:** The UI will be clean, intuitive, and responsive, with conditional rendering of components based on user role.
* **4.2 Hardware and Software Interfaces:** The application will be hosted on a cloud server and will require a modern web browser for access.

**5. Non-Functional Requirements**

* **5.1 Performance:** The application must respond to user actions within 2 seconds.
* **5.2 Security:** All sensitive data must be encrypted both in transit and at rest.
* **5.3 Reliability:** The application shall have an uptime of 99.9%.
* **5.4 Usability:** The application shall be easy to learn and use for all user types.

# HOMEZ - Step-by-Step Development Plan - v2

This plan is broken down into four phases, starting with a critical data model refactor.

---

### **Phase 1: Data Model Refactoring & User Authentication**

* **Goal:** Refactor the data model to use a single `User` entity with roles, and establish secure authentication.
* **Features:** Role-based user registration, login, and logout.

| Task ID | Description                                                                                             | Files to Modify                                                                        |
| :------ | :------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------- |
| **1.1** | **Refactor User Model:** Add a `role` field (enum: 'Rider', 'Homez') to the `User.js` schema. Add any other Homez-specific fields (e.g., `vehicleInfo`). | `server/models/User.js`                                                                |
| **1.2** | **Remove Homez Model:** Delete the `Homez.js` model file and remove all its references from the project. | `server/models/Homez.js` (delete), `server/seeders/seed.js`, `server/schemas/resolvers.js` |
| **1.3** | **Update GraphQL Schema:** Modify `typeDefs.js` to reflect the new `User` model with roles and remove the `Homez` type. | `server/schemas/typeDefs.js`                                                           |
| **1.4** | **Update Authentication Logic:** Modify resolvers for user signup and login to handle the `role` field. | `server/schemas/resolvers.js`                                                          |
| **1.5** | **Update UI Components:** Update the `Signup.js` page to include a role selection (Rider or Homez). | `client/src/pages/Signup.js`                                                           |
| **1.6** | **Integrate Front/Back-End:** Connect the updated UI to the refactored GraphQL API for authentication. | `client/src/utils/mutations.js`, `client/src/App.js`                                   |

---

### **Phase 2: Core Ride-Sharing Functionality**

* **Goal:** Implement the primary ride-requesting and fulfillment features using the new data model.
* **Features:** Ride requesting, ride acceptance by a "Homez", and status tracking.

| Task ID | Description                                                                                             | Files to Modify                                                  |
| :------ | :------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------- |
| **2.1** | **Update Ride Schema:** Ensure the `driverId` in the `Ride.js` model correctly references a `User`'s `_id`. | `server/models/Ride.js`                                          |
| **2.2** | **Develop Ride Management Logic:** Create back-end resolvers for creating, accepting (by a Homez), and updating rides. | `server/schemas/resolvers.js`                                    |
| **2.3** | **Build Rider Interface:** Develop the UI for Riders to request a ride.                                  | `client/src/pages/Ride.js`, `client/src/components/Rider.js`     |
| **2.4** | **Create Homez Dashboard:** Implement the dashboard for Homez to view and accept available ride requests. | `client/src/pages/Drive.js`, `client/src/components/Driver.js`   |

---

### **Phase 3: User Profile and History**

* **Goal:** Allow users to view and manage their profiles and ride histories based on their role.
* **Features:** Profile editing and role-specific ride history.

| Task ID | Description                                                                                     | Files to Modify                                           |
| :------ | :---------------------------------------------------------------------------------------------- | :-------------------------------------------------------- |
| **3.1** | **Implement Profile Management:** Create back-end resolvers for updating user profile information. | `server/schemas/resolvers.js`                             |
| **3.2** | **Develop Profile Page:** Build the front-end profile page with conditional rendering for Homez-specific fields (e.g., vehicle info). | `client/src/pages/Profile.js` (new file)                  |
| **3.3** | **Display Ride History:** Fetch and display a list of past rides for both Riders and Homez on their profiles. | `client/src/pages/Profile.js`, `client/src/pages/PastDrives.js` |

---

### **Phase 4: Reviews and Ratings System**

* **Goal:** Implement a system for users to provide and view feedback.
* **Features:** Submitting reviews and displaying ratings for Homez.

| Task ID | Description                                                                                       | Files to Modify                                                                 |
| :------ | :------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------ |
| **4.1** | **Create Review Schema:** Design and implement the `Review` model, linking it to both the Rider and the Homez (`User` models). | `server/models/Review.js` (new file), `server/schemas/typeDefs.js`              |
| **4.2** | **Develop Review Logic:** Implement back-end resolvers for creating and fetching reviews.             | `server/schemas/resolvers.js`                                                   |
| **4.3** | **Build Review Interface:** Create the UI for Riders to submit reviews after a completed ride.          | `client/src/pages/Reviews.js`                                                   |
| **4.4** | **Display Ratings:** Show Homez ratings on their profiles and on the ride acceptance screen.        | `client/src/pages/Profile.js`, `client/src/pages/Drive.js`                       |

---
