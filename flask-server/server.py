from flask import Flask, request, jsonify
from flask_graphql import GraphQLView
from keycloak import KeycloakOpenID
from schema import schema
from models import db, Todo
from keycloak import keycloak_openid

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///todo.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

@app.route('/graphql', methods=['POST'])
def graphql_server():
    auth_header = request.headers.get("Authorization")
    if not auth_header or not auth_header.startswith("Bearer "):
        return jsonify({"error": "Unauthorized"}), 401
    
    token = auth_header.split(" ")[1]
    try:
        keycloak_openid.userinfo(token)
    except Exception as e:
        return jsonify({"error": f"Unauthorized - {str(e)}"}), 401
    
    return GraphQLView.as_view('graphql', schema=schema)

if __name__ == '__main__':
    app.run(debug=True)
