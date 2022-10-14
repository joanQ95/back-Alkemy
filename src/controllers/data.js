const characterData = {
    "characters": [
        {
            "name": "Mickey",
            "age": 50,
            "weight": 8.0,
            "story": "A funny mouse",
            "image": "https://i.pinimg.com/564x/65/d6/cf/65d6cfcb2bb5193d6d160157b34b2bd0.jpg",
            
        },
        {
            "name": "Pluto",
            "age": 30,
            "weight": 14.0,
            "story": "A funny dog",
            "image": "https://i.pinimg.com/564x/65/d6/cf/65d6cfcb2bb5193d6d160157b34b2bd0.jpg"
        },
        {
            "name": "Goofy",
            "age": 30,
            "weight": 14.0,
            "story": "A funny guy",
            "image": "https://i.pinimg.com/564x/65/d6/cf/65d6cfcb2bb5193d6d160157b34b2bd0.jpg"
        },
        {
            "name": "Yen Sid",
            "age": 70,
            "weight": 70.0,
            "story": "A magician",
            "image": "https://static.wikia.nocookie.net/disney/images/d/d8/Yen_Sid.png/revision/latest/scale-to-width-down/350?cb=20140313162649&path-prefix=es"
        }               
    ]
}

const genres = [
        {
            "name": "action",
            "image": "https://i.pinimg.com/564x/65/d6/cf/65d6cfcb2bb5193d6d160157b34b2bd0.jpg"
        },
        {
            "name": "adventures",
            "image": "https://i.pinimg.com/564x/65/d6/cf/65d6cfcb2bb5193d6d160157b34b2bd0.jpg"
        },
        {
            "name": "Animation",
            "image": "https://i.pinimg.com/564x/65/d6/cf/65d6cfcb2bb5193d6d160157b34b2bd0.jpg"
        },
        {
            "name": "Comedy",
            "image": "https://i.pinimg.com/564x/65/d6/cf/65d6cfcb2bb5193d6d160157b34b2bd0.jpg"
        },
        {
            "name": "Drama",
            "image": "https://i.pinimg.com/564x/65/d6/cf/65d6cfcb2bb5193d6d160157b34b2bd0.jpg"
        },
        {
            "name": "Documentary",
            "image": "https://i.pinimg.com/564x/65/d6/cf/65d6cfcb2bb5193d6d160157b34b2bd0.jpg"
        },
        {
            "name": "Horror",
            "image": "https://i.pinimg.com/564x/65/d6/cf/65d6cfcb2bb5193d6d160157b34b2bd0.jpg"
        },
        {
            "name": "Martial arts",
            "image": "https://i.pinimg.com/564x/65/d6/cf/65d6cfcb2bb5193d6d160157b34b2bd0.jpg"
        },
        {
            "name": "Musical",
            "image": "https://i.pinimg.com/564x/65/d6/cf/65d6cfcb2bb5193d6d160157b34b2bd0.jpg"
        } ,
        {
            "name": "Romance",
            "image": "https://i.pinimg.com/564x/65/d6/cf/65d6cfcb2bb5193d6d160157b34b2bd0.jpg"
        },
        {
            "name": "Thriller",
            "image": "https://i.pinimg.com/564x/65/d6/cf/65d6cfcb2bb5193d6d160157b34b2bd0.jpg"
        },
        {
            "name": "Science fiction",
            "image": "https://i.pinimg.com/564x/65/d6/cf/65d6cfcb2bb5193d6d160157b34b2bd0.jpg"
        },
        {
            "name": "Western",
            "image": "https://i.pinimg.com/564x/65/d6/cf/65d6cfcb2bb5193d6d160157b34b2bd0.jpg"
        }                 
]

const movies = [
    {
        "title": "Fantasia900",
        "image": "https://i.pinimg.com/564x/65/d6/cf/65d6cfcb2bb5193d6d160157b34b2bd0.jpg",
        "creationAge": "13/11/1940",
        "rated": "5",
        "genre": [
            {
                "name": "action",
                "image": "https://i.pinimg.com/564x/65/d6/cf/65d6cfcb2bb5193d6d160157b34b2bd0.jpg"
            },
            {
                "name": "adventures",
                "image": "https://i.pinimg.com/564x/65/d6/cf/65d6cfcb2bb5193d6d160157b34b2bd0.jpg"
            }
        ],
        "characters": [
            {
                "name": "Dog",
                "age": 50,
                "weight": 8.0,
                "story": "A funny dog",
                "image": "https://i.pinimg.com/564x/65/d6/cf/65d6cfcb2bb5193d6d160157b34b2bd0.jpg"
            },
            {
                "name": "Mickey",
                "age": 50,
                "weight": 8.0,
                "story": "A funny mouse",
                "image": "https://i.pinimg.com/564x/65/d6/cf/65d6cfcb2bb5193d6d160157b34b2bd0.jpg"
            }
        ]
    },
    {
        "title": "Pinocho",
        "image": "https://i.pinimg.com/564x/65/d6/cf/65d6cfcb2bb5193d6d160157b34b2bd0.jpg",
        "creationAge": "20/11/1940",
        "rated": "5",
        "genre": [
            {
                "name": "fantasy",
                "image": "https://i.pinimg.com/564x/65/d6/cf/65d6cfcb2bb5193d6d160157b34b2bd0.jpg"
            },
            {
                "name": "musical",
                "image": "https://i.pinimg.com/564x/65/d6/cf/65d6cfcb2bb5193d6d160157b34b2bd0.jpg"
            }
        ],
        "characters": [
            {
                "name": "Pinocho",
                "age": 10,
                "weight": 20.0,
                "story": "A boy",
                "image": "https://i.pinimg.com/564x/65/d6/cf/65d6cfcb2bb5193d6d160157b34b2bd0.jpg"
            },
            {
                "name": "Gepetto",
                "age": 50,
                "weight": 68.0,
                "story": "A carpinter senior",
                "image": "https://i.pinimg.com/564x/65/d6/cf/65d6cfcb2bb5193d6d160157b34b2bd0.jpg"
            },
            {
                "name": "Blue fairy",
                "age": 200,
                "weight": 58.0,
                "story": "A blue fairy",
                "image": "https://i.pinimg.com/564x/65/d6/cf/65d6cfcb2bb5193d6d160157b34b2bd0.jpg"
            },
            {
                "name": "Jiminy Cricket",
                "age": 40,
                "weight": 0.5,
                "story": "A funny cricket",
                "image": "https://i.pinimg.com/564x/65/d6/cf/65d6cfcb2bb5193d6d160157b34b2bd0.jpg"
            }
        ]
    },
    {
        "title": "The Fox and the Hound",
        "image": "https://i.pinimg.com/564x/65/d6/cf/65d6cfcb2bb5193d6d160157b34b2bd0.jpg",
        "creationAge": "20/11/1940",
        "rated": "5",
        "genre": [
            {
                "name": "infantil",
                "image": "https://i.pinimg.com/564x/65/d6/cf/65d6cfcb2bb5193d6d160157b34b2bd0.jpg"
            },
            {
                "name": "musical",
                "image": "https://i.pinimg.com/564x/65/d6/cf/65d6cfcb2bb5193d6d160157b34b2bd0.jpg"
            }
        ],
        "characters": [
            {
                "name": "Toby",
                "age": 10,
                "weight": 20.0,
                "story": "A dog",
                "image": "https://i.pinimg.com/564x/65/d6/cf/65d6cfcb2bb5193d6d160157b34b2bd0.jpg"
            },
            {
                "name": "Tod",
                "age": 10,
                "weight": 68.0,
                "story": "A fox",
                "image": "https://i.pinimg.com/564x/65/d6/cf/65d6cfcb2bb5193d6d160157b34b2bd0.jpg"
            },
            {
                "name": "Arnos Slade",
                "age": 55,
                "weight": 58.0,
                "story": "A master",
                "image": "https://i.pinimg.com/564x/65/d6/cf/65d6cfcb2bb5193d6d160157b34b2bd0.jpg"
            },
            {
                "name": "Widow Tweed",
                "age": 60,
                "weight": 0.5,
                "story": "A elderly woman",
                "image": "https://i.pinimg.com/564x/65/d6/cf/65d6cfcb2bb5193d6d160157b34b2bd0.jpg"
            }
        ]
    }                                    
]

module.exports = {
    characterData, 
    genres,
    movies 
  }