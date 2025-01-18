from keycloak import KeycloakOpenID

keycloak_openid = KeycloakOpenID(
    server_url="http://localhost:8080/auth/",
    client_id="todo-client",
    realm_name="ToDoRealm",
    client_secret_key="aYUkajJr4rBXVV8MAAlNf3E8DNGDOxSA",
)
