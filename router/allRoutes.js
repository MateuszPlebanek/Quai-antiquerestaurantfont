import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Acceuil", "/pages/home.html"),
    new Route("/galerie", "La galerie", "/pages/galerie.html"),

];

//Le titre s'affiche comme ce-ci : Route.titre - websitename

export const websiteName = "Quai Antique";