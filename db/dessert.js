let dessert = require('../controllers/dessert')

let newDessert = [
    {
        dessertName: 'Chocolate Crunch Brownies',
        directions: [
            '1. In a large bowl, cream butter and sugar until light and fluffy. Beat in eggs and vanilla. Combine the flour, cocoa and salt; gradually add to creamed mixture until blended.',
            '2. Spread into a greased 13-in. x 9-in. baking pan. Bake at 350° for 24-28 minutes or until a toothpick inserted in the center comes out clean (do not overbake). Cool in pan on a wire rack. Spread marshmallow creme over cooled brownies.',
            '3. In a small saucepan, melt peanut butter and chocolate chips over low heat, stirring constantly until smooth. Remove from the heat; stir in cereal. Spread over top. Refrigerate until set. Cut into bars.'
    ],
        picture: 'homemademole.png',
        ingridents: [
            '1 cup butter, softened',
            '2 cups sugar',
            '4 large Eggland Best eggs',
            '1/2 cup baking cocoa',
            '1-1/2 cups all-purpose flour',
            '2 teaspoons vanilla extract',
            '1/2 teaspoon salt',
            '1 jar (7 ounces) marshmallow creme',
            '1 cup creamy peanut butter',
            '2 cups (12 ounces) semisweet chocolate chips',
            '3 cups crisp rice cereal'
        ],
        nutritionFacts: '1 brownie: 232 calories, 12g fat (6g saturated fat), 37mg cholesterol, 136mg sodium, 30g carbohydrate (21g sugars, 1g fiber), 4g protein.'
   
    }, {
        dessertName: 'Vegan Chocolate Chip Cookies',
        directions: [
            '1. In a large bowl, beat the first six ingredients until well blended. Combine the flour, baking soda and salt; gradually add to sugar mixture and mix well. Stir in chocolate chips and nuts. Cover and refrigerate for 1 hour.',
            '2. Drop by rounded tablespoonfuls 2 in. apart onto parchment paper-lined baking sheets. Bake at 375° for 10-12 minutes or until edges are lightly browned. Cool for 1 minute before removing from pans to wire racks.'
        ],
        picture: 'vegancookie.jpg',
        ingridents: [
            '1-1/4 cups packed dark brown sugar',
            '1/2 cup canola oil',
            '6 tablespoons vanilla soy milk',
            '1/4 cup sugar',
            '1/4 cup unsweetened applesauce',
            '2 teaspoons vanilla extract',
            '2-1/4 cups all-purpose flour',
            '1 teaspoon baking soda',
            '3/4 teaspoon salt',
            '1 cup dairy-free semisweet chocolate chips',
            '1/2 cup finely chopped walnuts'
        ],
        nutritionFacts:'1 cookie: 111 calories, 5g fat (1g saturated fat), 0 cholesterol, 76mg sodium, 16g carbohydrate (10g sugars, 1g fiber), 1g protein.'
    }, {
        dessertName: 'No-Fry Fried Ice Cream',
        directions: [
            '1. Preheat oven to 350°. Using a 1/2-cup ice cream scoop, place eight scoops of ice cream on a baking sheet. Freeze until firm, about 1 hour. Meanwhile, combine brown sugar, butter and cinnamon. Stir in cornflakes. Transfer to an ungreased 15x10x1-in. baking pan. Bake until lightly browned, 4-6 minutes. Cool completely.',
            '2. Roll ice cream balls in crumb mixture. Cover and freeze until firm, at least 1 hour. If desired, serve with toppings.'          
        ],
        picture: 'icecream.jpg',
        ingridents: [
            '1 quart vanilla ice cream',
            '1/4 cup packed brown sugar',
            '1 tablespoon butter, melted',
            '1 teaspoon ground cinnamon',
            '2 cups crushed cornflakes',
            'Whipped cream and caramel ice cream topping, optional'
        ],
        nutritionFacts:'1/2 cup: 216 calories, 8g fat (5g saturated fat), 32mg cholesterol, 168mg sodium, 33g carbohydrate (20g sugars, 1g fiber), 3g protein.'
    }
]

// dessert.deleteMany()
dessert.newDessert(newDessert)
    .then(dessert => {
        console.log('Saved Dessert', dessert)
    })