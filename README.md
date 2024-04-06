# Dsolve-2024

![Banner Github](https://github.com/csacet/Dsolve-2024/assets/90597530/365f4d52-fd34-4df5-948d-8e95745a653a)


## Team Name
ReDiff

# Team Member
Athul Anoop: https://github.com/alpha-og

Sharon P Shajan: https://github.com/sharon504

## Idea
Aligned with the vision of "Create, Grow and Make a Difference," Diff fosters a collaborative ecosystem at CET, empowering students to actively participate in innovation, develop their skills, and contribute to meaningful projects. Diff provides a platform to share project ideas and to connect with collaborators and investors.

## Features 
**Project Management for Leaders:**

- [x] **Effortless Project Visibility:** Publicly accessible project profiles showcase project goals, desired skillsets, and utilized technologies, attracting a wider talent pool.
- [ ] **Enhanced Communication:** Temporary posts and comments facilitate efficient project updates and real time vacancy/ contribution requirement updates.
- [x] **AI-powered Project Synopses:** Large Language Model (LLM) summaries provide concise overviews of project objectives and progress, streamlining communication with stakeholders and project applicants.
- [ ] **Streamlined Funding Acquisition:** Integrated sponsorship requests connect projects with potential financial backers, ensuring project sustainability.

**Empowering Project Applicants:**

- [x] **Intuitive Project Discovery:** Advanced search filters and personalized project suggestions leverage user profiles and project requirements, facilitating efficient project identification.
- [ ] **LLM-driven Skill Development:** AI-powered recommendations suggest personalized roadmaps, guiding applicants on the skills needed for successful project contributions.
- [ ] **Efficient Applicant Onboarding:** A streamlined process allows applicants to submit profiles and relevant documents during signup or application, ensuring ease of participation and providing project-specific information directly to owners.
- [ ] **Direct Communication Channel:** A secure direct messaging feature enables seamless communication between applicants and project owners, fostering collaboration.

## Link to product walkthrough


https://github.com/alpha-og/Diff/assets/76057001/1d491333-3b48-4714-8b67-23852b7e74b2



<img width="1280" alt="Screenshot 2024-04-05 at 11 26 35 PM" src="https://github.com/alpha-og/Diff/assets/76057001/33f287f8-bc8b-4ca3-9d4b-ff3d5fc6e5ef">
<img width="1280" alt="Screenshot 2024-04-05 at 11 25 34 PM" src="https://github.com/alpha-og/Diff/assets/76057001/6183f42f-0d80-4b72-919f-0ebf6f8640ea">
<img width="1280" alt="Screenshot 2024-04-05 at 11 25 51 PM" src="https://github.com/alpha-og/Diff/assets/76057001/427fc5d3-631c-469d-ae8b-bd8fd77815b7">
<img width="1280" alt="Screenshot 2024-04-05 at 11 26 46 PM" src="https://github.com/alpha-og/Diff/assets/76057001/c050249f-362f-41e4-8098-c2a12f52f3ff">

## Libraries used
**API:** Gemini API
**Server:**
- "@google/generative-ai": "^0.5.0",
- "axios": "^1.6.8",
- "bcrypt": "^5.1.1",
- "cookie-parser": "^1.4.6",
- "cors": "^2.8.5",
- "dotenv": "^16.4.5",
- "express": "^4.19.2",
- "jsonwebtoken": "^9.0.2",
- "mongoose": "^8.2.4",
- "nodejs": "^0.0.0",
- "nodemon": "^3.1.0"

**Client**
- "axios": "^1.6.8",
- "lucide-react": "^0.364.0",
- "react": "^18.2.0",
- "react-dom": "^18.2.0",
- "react-router-dom": "^6.22.3"
- "autoprefixer": "^10.4.19",
- "postcss": "^8.4.38",
- "tailwindcss": "^3.4.3",
- "vite": "^5.2.0

## How to configure
- Clone the repository or download the project files.
- Open a terminal and navigate to the project's root directory.
- Open the run.sh file in a text editor and replace the following placeholders with your actual values:
  . <Your_JWT_Secret>: Replace with a secret key for JSON Web Token (JWT) authentication.
  . <Your_MongoDB_URI>: Replace with the connection URI for your MongoDB instance.
  . <Your_Gemini_API> (optional): Replace with your Gemini API key if your application uses the Gemini API.

## How to Run
- Make the run.sh script executable by running the following command:
  ```chmod +x run.sh```
- To start the frontend and backend servers, run the following command from the project's root directory
  ```./run.sh```
- Once both servers are running, you should see the following output in your terminal:
  ```
  Starting backend server...
  > backend@1.0.0 dev
  > nodemon server.js
  
  [nodemon] 2.0.20
  [nodemon] to restart at any time, enter `rs`
  [nodemon] watching path(s): *.*
  [nodemon] watching extensions: js,mjs,json
  [nodemon] starting `node server.js`
  Server is running on port 2000
  
  Starting frontend server...
  > frontend@0.1.0 dev
  > vite
  
    vite v4.3.5 dev server running at:
  
    > Local: http://localhost:5173/
    > Network: use `--host` to expose
  
    ready in 88ms.
  
  Both frontend and backend servers are running.
  Press Ctrl+C to stop.

- You can now access the frontend application at http://localhost:3000 and the backend API at http://localhost:2000
- To stop the running servers, simply press ``Ctrl+C`` in the terminal where the run.sh script is running. The script will automatically stop both the frontend and backend processes.

## How to contribute ? 
Pending Feature Implementations:
- [ ] **Enhanced Communication:** Temporary posts and comments facilitate efficient project updates and real time vacancy/ contribution requirement updates.
- [ ] **Streamlined Funding Acquisition:** Integrated sponsorship requests connect projects with potential financial backers, ensuring project sustainability.
- [ ] **LLM-driven Skill Development:** AI-powered recommendations suggest personalized roadmaps, guiding applicants on the skills needed for successful project contributions.
- [ ] **Efficient Applicant Onboarding:** A streamlined process allows applicants to submit profiles and relevant documents during signup or application, ensuring ease of participation and providing project-specific information directly to owners.
- [ ] **Direct Communication Channel:** A secure direct messaging feature enables seamless communication between applicants and project owners, fostering collaboration.
