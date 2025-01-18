# Todo List with GraphQL API 📝

## Introduction 🌟

Welcome to the **Todo List with GraphQL API**! This simple web app lets users manage their tasks with features like **authentication via Keycloak** 🔑, **Pro License** for image uploads 📸, and **Stripe** integration for payments 💳. Built with **React**, **Flask**, **GraphQL**, and **Keycloak**, it's a modern and secure way to track your to-dos! ✅

## Features 🚀

- **Keycloak Authentication**: Secure login for users 🔐.
- **CRUD Operations**: Create, Read, Update, and Delete tasks ✔️.
- **Pro License**: Unlock image uploads by purchasing a Pro license via **Stripe** 💳.
- **GraphQL API**: Efficient data management with GraphQL queries and mutations 🔄.

## Tech Stack 🛠️

- **Frontend**: React, Keycloak, GraphQL ⚛️
- **Backend**: Flask, SQLAlchemy, Graphene 🐍
- **Database**: SQLite 🗃️
- **Authentication**: Keycloak 🔑
- **Payments**: Stripe 💳

## Setup ⚙️

1. **Clone the repo**:

   ```bash
   git clone https://github.com/yourusername/todo-graphql-app.git
   cd todo-graphql-app
   ```

2. **Backend Setup** (Flask):

   ```bash
   cd server
   pip install -r requirements.txt
   python
   from models import db
   db.create_all()
   exit()
   python server.py
   ```

3. **Frontend Setup** (React):

   ```bash
   cd client
   npm install
   npm start
   ```

4. **Keycloak**: Set up Keycloak and replace URLs in `keycloak.js` and `keycloak.py` with your server details 🔒.

5. **Stripe**: Set up Stripe keys and replace them in the backend 💳.

> **Note**: I'm currently facing some **dependency errors** 🛠️ on my end, but I'm actively working to resolve them. Stay tuned for updates! 🔄

## **Project Assessment: Keycloak, To-Do List, and Pro Features 🚀**

### **1. Keycloak Authentication 🔒**
- **What's Working**: Keycloak authentication and verification are integrated for secure user access.
- **Improvements**: Need to ensure proper **login flow** redirection and manage **roles** for Pro and Non-Pro users.

### **2. GraphQL API 🔧**
- **What's Working**: The GraphQL API handles CRUD operations effectively.
- **Improvements**: Need to add the **Edit mutation** and ensure **API security** with proper user authentication.

### **3. To-Do Fields 📝**
- **What's Working**: To-Do fields and image upload feature for Pro users are set up.
- **Improvements**: Need to integrate **Stripe payments** to activate Pro status and control UI visibility for image upload.

### **4. Pro License & Stripe Integration 💳**
- **What's Working**: Pro license functionality is planned, but **Stripe integration** is missing.
- **Improvements**: Integrate **Stripe** for Pro license activation and store **Pro status** in the database.

### **5. UI (React Frontend) ✨**
- **What's Working**: The UI works but needs polish for better usability.
- **Improvements**: Improve **design**, enhance **error handling**, and make the **Pro upgrade** option more visible.

### **6. CRUD Operations🔄**
- **What's Working**: Add, List, and Delete operations are functional.
- **Improvements**: Add the **Edit** functionality to complete the CRUD cycle.

### **7. Error Handling & Code Quality ⚙️**
- **What's Working**: Code is clean and well-structured.
- **Improvements**: Improve **error handling** and address **edge cases** to ensure smooth user experience.

### **8. Testing 🧪**
- **Improvements**: Add **unit tests**, **integration tests**, and test **Stripe integration** in test mode.

---

### **What’s Next?🚀**
The project is progressing well! Key improvements are needed in:
1. Implementing **Edit mutation** for To-Dos.
2. Integrating **Stripe** for Pro license payments.
3. Enhancing **UI** for better user experience.
4. Addressing **edge cases** and **error handling**.
5. Adding **tests** to ensure everything works smoothly.
