
const array = 
[  
  { "category" : "Culture",
     "features" : [
        {
          "type": "Feature",
          "properties": 
            {
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Neues_Museum_-_Joy_of_Museums.jpg/1200px-Neues_Museum_-_Joy_of_Museums.jpg",
            "title": "Musée de l'outil et des métiers",
                "adresse": "12 rue du musée; 44800 Véziers",
                "description": "Un endroit extraordinaire pour les amateur de vieux métiers et d'histoire.",
                "icon": "museum-15"
            },
          "geometry": 
            {
              "type": "Point",
              "coordinates": [-1.70700167867071, 47.3233167969856]
            }
        },
        {
          "type": "Feature",
          "properties": 
            {
            "image": "https://img.gocar.be/v7/_cloud_wordpress_/2020/06/EDI-dieteren-2-1.jpg?w=920&optipress=3&func=crop",
            "title": "Borne de recharge",
                "adresse": "23 rue de la chaussée, 44765 Romillet",
                "icon": "fuel-15"
            },
          "geometry": 
            {
              "type": "Point",
              "coordinates": [-1.80700167867071, 47.383167969856]
            }
        },
        {
          "type": "Feature",
          "properties": 
            {
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Neues_Museum_-_Joy_of_Museums.jpg/1200px-Neues_Museum_-_Joy_of_Museums.jpg",
            "title": "Musée Jacques Cartier",
                "adresse": "7 av Jacques Cartier, 35410 La Chapelle sur Rance",
                "description": "Très belle visite, on y apprend beaucoup de choses.",
                "icon": "museum-15"
            },
          "geometry": 
            {
              "type": "Point",
              "coordinates": [-1.99700167867071, 47.403167969856]
            }
        }
       ]
    },
  { "category" : "Gastronomie",
    "features" : [
       {
         "type": "Feature",
         "properties": 
           {
           "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Interior_of_Le_Bernardin.jpg/290px-Interior_of_Le_Bernardin.jpg",
           "title": "La Gourmandise",
               "adresse": "23 rue de l'église, 35444 Vignoc",
               "description": "Accueil très agréable, une cuisine excellente. De l'entrée au dessert tout a été parfait.",
               "icon": "restaurant-15"
           },
         "geometry": 
           {
             "type": "Point",
             "coordinates": [-1.2700167867071, 47.6233167969856]
           }  
       },
       {
         "type": "Feature",
         "properties": 
           {
            "image": "https://img.gocar.be/v7/_cloud_wordpress_/2020/06/EDI-dieteren-2-1.jpg?w=920&optipress=3&func=crop",
            "title": "Borne de recharge",
                "adresse": "23 rue de la chaussée, 35360 St Grégoire",
                "icon": "fuel-15"
           },
         "geometry": 
           {
             "type": "Point",
             "coordinates": [-1.90700167867071, 47.7133167969856]
           }
       },
       {
        "type": "Feature",
        "properties": 
          {
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Interior_of_Le_Bernardin.jpg/290px-Interior_of_Le_Bernardin.jpg",
          "title": "La Recette du Bonheur",
              "adresse": "15 rue des champs, 35760 Vitré",
              "description": "La jeune patronne utilise des produits frais et locaux, nous l’encourageons vivement dans cette démarche.",
              "icon": "restaurant-15"
          },
        "geometry": 
          {
            "type": "Point",
            "coordinates": [-1.93700167867071, 48.0233167969856]
          }
      }
      ]
   },
   { "category" : "Nature",
   "features" : [
      {
        "type": "Feature",
        "properties": 
          {
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/%C3%89tang_d%27ILOA2.jpg/220px-%C3%89tang_d%27ILOA2.jpg",
          "title": "Etang de la Vayrie",
              "adresse": "chemin de l'étang, 35122 Lézoul",
              "description": "Bel étang pour les pêcheurs et des bancs tout autour où on peut regarder les canards.",
              "icon": "park-15"
          },
        "geometry": 
          {
            "type": "Point",
            "coordinates": [-1.89700167867071, 48.2233167969856]
          }  
      },
      {
        "type": "Feature",
        "properties": 
          {
            "image": "https://img.gocar.be/v7/_cloud_wordpress_/2020/06/EDI-dieteren-2-1.jpg?w=920&optipress=3&func=crop",
            "title": "Borne de recharge",
                "adresse": "23 rue de la chaussée, 35010 Melesse",
                "icon": "fuel-15"
          },
        "geometry": 
          {
            "type": "Point",
            "coordinates": [-1.91000167867071, 48.3333167969856]
          }
      },
      {
        "type": "Feature",
        "properties": 
          {
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/%C3%89tang_d%27ILOA2.jpg/220px-%C3%89tang_d%27ILOA2.jpg",
          "title": "Etang de Bazouges",
              "adresse": "chemin vers le bois, 36510 La Mézière",
              "description": "Un immense calme, une généreuse tranquilité, le souffle du vent qui chante dans les plantes aquatiques.",
              "icon": "park-15"
          },
        "geometry": 
          {
            "type": "Point",
            "coordinates": [-1.73000167867071, 48.543167969856]
          }
      }
     ]
  },
]

  module.exports = array