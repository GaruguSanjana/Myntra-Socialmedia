# Myn-Social (Fashion-Social Media) 🛍️

This project aims to enhance the Myntra website by introducing new features to boost user engagement, encourage user-generated content, and incorporate a reward system. These improvements are designed to make the shopping experience more interactive and social, especially for younger users.

## Problem Statement ❓
- **Low User Engagement:** Shopping platforms aren't exciting enough for young users who prefer interactive and social features.
- **Lack of User-Generated Content:** Current platforms don't encourage users to share their fashion experiences, resulting in fewer reviews, photos, and videos.
- **Absence of Rewards System:** There's no system to reward users for their engagement, making them less likely to participate actively.
- **Few Social Features:** Existing platforms don't have enough social media functions for sharing and interacting.

## Solution 📝
### Personal Social Fashion Page
- **User Profiles:** Let users share their fashion experiences directly on their personal profile pages.
- **Shoppable Posts:** Allow users and influencers to create posts with shoppable links.
- **Product Tagging:** Every product within the profile will be interconnected to existing products on Myntra, or users can tag manually while posting a product snapshot.
- **User-Generated Content (UGC):** Provides social proof and allows users to see how items look on real people.

### Myntra Coins 👛
- **Virtual Currency:** Coins are a virtual currency within our platform.
- **Reward System:** Incentivize users to actively participate and contribute to the platform.
- **Redeemable Rewards:** Users can redeem coins for discounts on their purchases, making their shopping experience more cost-effective.
- **Earning Coins:** Users earn coins via posting reviews, creating content, etc.

## Screenshots 📸
### Register
[![Register.png](https://i.postimg.cc/FRmDJw4W/Screenshot-2024-07-16-195401.png)](https://postimg.cc/2qc4sc3h)

### Login
[![Screenshot-2024-07-16-195401.png](https://i.postimg.cc/FRmDJw4W/Screenshot-2024-07-16-195401.png)](https://postimg.cc/2qc4sc3h)

### Posts
[![Screenshot-2024-07-16-195446.png](https://i.postimg.cc/kXZsy2Ct/Screenshot-2024-07-16-195446.png)](https://postimg.cc/ZC86bKCT)

### MynCoin & Trends
[![Screenshot-2024-07-16-195559.png](https://i.postimg.cc/BQtNDxr0/Screenshot-2024-07-16-195559.png)](https://postimg.cc/56dwWF97)

### Add Previous Orders
[![Screenshot-2024-07-16-195704.png](https://i.postimg.cc/T130tmhn/Screenshot-2024-07-16-195704.png)](https://postimg.cc/S2Hcsn6K)

### Posting
[![Screenshot-2024-07-16-200943.png](https://i.postimg.cc/V6QZYdvC/Screenshot-2024-07-16-200943.png)](https://postimg.cc/d76j6Q8s)

## Demo Video 📽️
https://github.com/user-attachments/assets/d13d3637-110a-4c4a-bf11-3974f65ea27f

https://github.com/user-attachments/assets/87f288bc-7a17-46fe-8423-a56025bcbff5

## Tech Stack 👩🏻‍💻
### Frontend
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
- **React:** For building the user interface.
- **Reducers:** For managing complex state logic.

### Backend
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- **Node.js:** For server-side runtime environment.
- **Express:** For building RESTful APIs.

### Database
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
- **MongoDB:** For storing various types of data (User Data, Post Data, Coins Data, Trends Data).

## Architecture Diagram
```plaintext
Frontend: React + Context API
Backend: Node.js + Express
Database: MongoDB
```

## Setup and Installation 🚀
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-repo/myntra-enhancement-project.git
   cd myntra-enhancement-project
   ```

2. **Install dependencies:**
   ```bash
   # For backend
   cd backend
   npm install

   # For frontend
   cd ../frontend
   npm install
   ```

3. **Run the development servers:**
   ```bash
   # For backend
   cd backend
   npm start

   # For frontend
   cd ../frontend
   npm start
   ```

4. **Add Envioronment Variables:**
   Add a .env file in both Client and Server folder
   ```bash
   # For backend
   PORT=5000
   MONGODB_CONNECTION=mongodb+srv://BLAH..BLAH..BLAH
   JWTKEY=ANY_RANDOM_KEY

   # For frontend 
   REACT_APP_BASE_URL = http://localhost:5000
   REACT_APP_PUBLIC_FOLDER = http://localhost:5000/images/
   REACT_APP_URL = http://localhost:3000
   ```


## Usage 📜
- **User Profiles:** Navigate to your profile page to start sharing your fashion experiences.
- **Shoppable Posts:** Create posts with links to products available on Myntra.
- **Earning Coins:** Engage with the platform by posting reviews and content to earn Myntra Coins.
- **Redeem Coins:** Use earned coins to get discounts on your purchases.


