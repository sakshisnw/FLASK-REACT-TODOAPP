import Keycloak from 'keycloak-js';

const keycloak = Keycloak({
    url: 'http://localhost:8080/auth/',
    realm: 'todo-client',
    clientId: 'ToDoRealm',
});

export default keycloak;