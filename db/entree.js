let entree = require('../controllers/entree')

let newEntree = [
    {
        entreeName: 'Convenient Vegetarian Lasagna',
        directions: [
            '1. Bring a large pot of lightly salted water to a boil. Add pasta and cook for 8 to 10 minutes or until al dente; drain and set aside.',
            '2. In a large bowl, combine ricotta cheese, eggs, Parmesan cheese, parsley, basil and ground black pepper. Stir to blend; set aside.',
            '3. Heat oil in a large saucepan over high heat. Saute onions for about 5 minutes, stirring occasionally; add carrot slices and saute about 2 minutes, then stir in green bell pepper and broccoli. Stir all together, reduce heat to medium and cook until tender, about 5 minutes. Scrape veggies into ricotta mix and mix well.',
            '4. Preheat oven to 350 degrees F (175 degrees C).',
            '5. Ladle 1 cup of spaghetti sauce into a 9x13 inch baking dish and spread evenly over the bottom. Place 2 strips of lasagna lengthwise in the dish, then spread about 4 cups of the filling over the pasta. Sprinkle 1 cup of the mozzarella cheese over the filling; repeat layers.',
            '6. Bake at 350 degrees F (175 degrees C) for 1 hour; let stand about 15 to 20 minutes, to firm up, before serving.'
    ],
        picture: 'lasagna.jpeg',
        ingridents: [
            '2 (12 ounce) packages lasagna noodles',
            '2 pounds ricotta cheese',
            '4 eggs',
            '1 cup grated Parmesan cheese',
            '1/3 cup chopped fresh parsley',
            '2 teaspoons dried basil',
            'ground black pepper to taste',
            '1/2 cup olive oil',
            '1 1/2 cups chopped onion',
            '1 cup sliced carrots',
            '1 1/4 cups chopped green bell pepper',
            '1 (16 ounce) package chopped frozen broccoli, thawed and drained',
            '3 cups chunky-style spaghetti sauce',
            '2 cups shredded mozzarella cheese, divided'
        ],
        nutritionFacts: 'Per Serving: 581 calories; 28.9 g fat; 55.3 g carbohydrates; 27.4 g protein; 121 mg cholesterol; 605 mg sodium.'
   
    }, {
        entreeName: 'Jollof Rice',
        directions: [
            '1. In a blender, combine tomatoes, scotch bonnet pepper and onions; purée. Pour out half the purée into a bowl; set aside. Add the bell peppers to the purée remaining in the blender and pulse until smooth. Add to the mixture that was set aside and stir to combine.',
            '2. Heat vegetable oil in a large pot over medium heat. Add blended vegetables along with the salt, curry powder, ground chile pepper, garlic powder, onion powder, bay leaves, ginger and thyme. Bring mixture to a boil.',
            '3. Stir in the rice until well mixed, then reduce the heat to low.',
            '4. Cover pot and let cook until rice is al dente, about 45 minutes. Check after 30 minutes; if rice is sauce-logged, remove the lid to cook off the excess sauce. If rice seems dry, stir in 1 to 2 cups water. Allow the rice at the bottom of the pot to char a bit to infuse it with a smoky flavor.'
        ],
        picture: 'jollof.jpg',
        ingridents: [
            '2  medium tomatoes, roughly chopped (about 5 ounces each)',
            '½  medium Scotch bonnet pepper (or use a habanero pepper), stem removed',
            '½  medium onion, roughly chopped',
            '3  small red bell peppers, roughly chopped (about 5 ounces each)',
            '½  cup vegetable oil',
            '1 ½  teaspoons salt',
            '1  teaspoon curry powder',
            '1 ½  teaspoons hot ground chile pepper, such as African dried chile or cayenne',
            '3/4 teaspoon salt1 ½  teaspoons garlic powder',
            '1  tablespoon plus 1 heaping teaspoon onion powder',
            '2  bay leaves',
            '½  teaspoon ground ginger',
            '1  tablespoon dried thyme',
            '2 ½  cups medium-grain rice'
        ],
        nutritionFacts:'Servings Per Recipe: 1 Amount Per Serving: Calories: 443.5; Total Fat: 14.8g; Cholesterol: 6.2mg; Sodium: 5,093.1mg; Total Carbs: 69.1g; Dietary Fiber: 3.6g; Protein: 9.8g.' 
    }, {
        entreeName: 'Goat pepper soup',
        directions: [
            '1. Place all the spices in the blender or food processor. Pulse until everything is puree',
            '2. Add to the pot of goat, add water about 7-8 cups of water. Bring to a boil and simmer until goat is tender. Discard bay leaf, add water if necessary. Add plantains , cook for about 20 more minutes or more',
            '3. Adjust for seasonings and thickness. Serve warm.'          
        ],
        picture: 'goatmeat.jpeg',
        ingridents: [
            '3 pound goat meat cut in pieces',
            '1 chopped medium onion',
            '4-5- garlic clove',
            '2 tablespoon chopped ginger',
            '1 bay leaf',
            '1 Tablespoon paprika',
            '1- tablespoon Maggi or bouillon granules',
            '2 green onion chopped whites and green parts',
            '¼ cup basil',
            '¼ cup parsley',
            '0-3 Scotch bonnet or habanera pepper'
        ],
        nutritionFacts:'1 Amount Per Serving: Calories 192%; Sodium 311mg 13%; Potassium 813mg 23%; Total Carbohydrates 48g 16%; Dietary Fiber 4g 16%; Sugars 21g; Protein 3g 6%; Vitamin A 56.6%; Vitamin C 41.3%; Calcium 3.2%; Iron 9.2.'
    }
]

// entree.deleteMany()
entree.newEntree(newEntree)
    .then(entree => {
        console.log('Saved Entree', entree)
    })