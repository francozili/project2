let appetizer = require('../controllers/appetizer')

let newAppetizer = [
    {
        appetizerName: 'Homemade Guacamole',
        directions: ['1. Mash avocados with garlic and salt. Stir in remaining ingredients.'],
        picture: 'homemademole.png',
        ingridents: [
            '3 medium ripe avocados, peeled and cubed',
            '1 garlic clove, minced',
            '1/4 to 1/2 teaspoon salt',
            '2 medium tomatoes, seeded and chopped, optional',
            '1 small onion, finely chopped',
            '1/4 cup mayonnaise, optional',
            '1 to 2 tablespoons lime juice',
            '1 tablespoon minced fresh cilantro'
        ],
        nutritionFacts: '1/4 cup: 90 calories, 8g fat (1g saturated fat), 0 cholesterol, 78mg sodium, 6g carbohydrate (1g sugars, 4g fiber), 1g protein. Diabetic Exchanges: 1-1/2 fat.'
   
    }, {
        appetizerName: 'Glazed Chicken Wings',
        directions: ['1. Cut chicken wings into three sections; discard wing tip section. Place in a greased 13x9-in. baking dish. Combine barbecue sauce, honey and soy sauce; pour over wings. Bake, uncovered, at 350° for 50-60 minutes or until chicken juices run clear.'],
        picture: 'wings.jpg',
        ingridents: [
            '2-1/2 pounds chicken wings',
            '1/2 cup barbecue sauce',
            '1/2 cup honey',
            '1/2 cup soy sauce'
        ],
        nutritionFacts:'1 chicken wing: 86 calories, 4g fat (1g saturated fat), 15mg cholesterol, 380mg sodium, 8g carbohydrate (8g sugars, 0 fiber), 6g protein.'
    }, {
        appetizerName: 'Sesame Chicken Dip',
        directions: [
            '1. Mix soy sauce, sesame oil and garlic; toss with chicken. Refrigerate, covered, at least 1 hour.',
            '2. Spread cream cheese onto a large serving plate; top with sweet-and-sour-sauce, spinach and chicken. Sprinkle with green onions and peanuts. Refrigerate, covered, at least 2 hours. Serve with crackers.'          
        ],
        picture: 'chickendip.jpg',
        ingridents: [
            '2 tablespoons reduced-sodium soy sauce',
            '4 teaspoons sesame oil',
            '2 garlic cloves, minced',
            '4 cups shredded cooked chicken breast',
            '3 packages (8 ounces each) reduced-fat cream cheese',
            '1 jar (10 ounces) sweet-and-sour sauce',
            '2 cups chopped fresh baby spinach',
            '1 cup thinly sliced green onions (about 8)',
            '1/2 cup chopped salted peanuts',
            'Sesame rice crackers'
        ],
        nutritionFacts:'1/4 cup dip: 97 calories, 6g fat (3g saturated fat), 25mg cholesterol, 176mg sodium, 4g carbohydrate (2g sugars, 0 fiber), 7g protein.'
    }
]

// appetizer.deleteMany()
appetizer.newAppetizer(newAppetizer)
    .then(appetizer => {
        console.log('Saved Appetizer', appetizer)
    })