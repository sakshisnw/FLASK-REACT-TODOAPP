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
