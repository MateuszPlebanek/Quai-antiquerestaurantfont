import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Acceuil", "/pages/home.html"),
    new Route("/galerie", "La galerie", "/pages/galerie.html"),
    new Route("/signin","Connexion","/pages/auth/signin.html"),
    new Route("/signup","Inscription","/pages/auth/signup.html"),
    new Route("/account","Mon compte","/pages/auth/account.html"),
    new Route("/editPassword", "changement de mot de passe", "/pages/auth/editPassword.html"),
    new Route("/allResa", "vos réservations", "/pages/reservations/allResa.html"),
    new Route("/reserver", "Réserver", "/pages/reservations/reserver.html"),
];


//Le titre s'affiche comme ce-ci : Route.titre - websitename

export const websiteName = "Quai Antique";