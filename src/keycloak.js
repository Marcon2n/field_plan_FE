import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080/",
  realm: "test",
  clientId: "linht-test",
});

export default keycloak;
