const meals = {
  breakfast: [
    {
      id: 1,
      mealName: 'Super Fluffy Omelet',
      image: 'breakfast-1.jpg',
      mealRecipe:
        'Separate the egg whites and the egg yolks in two separate bowls. You’ll only need 3 yolks, so discard the other 2 or reserve for another use. Whisk the egg yolks until they become homogenous and pale in color. Set aside. Transfer the egg whites to a large bowl and whisk until they triple in size and become white with medium peaks. Carefully fold the egg yolks into the egg whites until fully incorporated. Pour the egg mixture into a medium nonstick frying pan with a lid. Cook over medium-low heat until bottom of omelet has set, about 5 minutes. Lift up each side of the omelette and drop a tablespoon of butter underneath. Cover the pan and cook for another 5 minutes, or until the top of the omelet has set. Remove the lid and season the omelet with salt and pepper. Remove the pan from the heat. Fold the omelette onto a plate and sprinkle with chives.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    },
    {
      id: 2,
      mealName: 'Fluffy Pancakes',
      image: 'breakfast-2.jpg',
      mealRecipe:
        'Whisk together the flour and baking powder in a large bowl. In a separate bowl, add the butter, milk, and egg yolks, stirring to combine. In a third bowl, use a hand mixer to beat the egg whites until soft peaks form. Pour the milk mixture into the flour mixture and stir with rubber spatula until just combined. Add the beaten egg whites and gently fold to combine. Heat an 8-inch (20cm) nonstick skillet over low heat. Pour 1 ½ cups of pancake batter into the skillet, smooth out the top, then cover with a lid. Cook until golden brown on the bottom and a toothpick inserted into the center comes out clean, about 20 minutes. Transfer the pancake to a plate and repeat, making 3 more pancakes with the remaining batter. Serve with maple syrup.',
      ingredients:
        '4 cups flour (500 g) (sifted), 4 tablespoons baking powder, 4 cups milk (960 mL) (warm to the touch), ¾ cup butter (170 g) (melted), 3 egg yolks, 4 egg whites, maple syrup (to serve)'
    },
    {
      id: 3,
      mealName: 'Breakfast Bombs',
      image: 'breakfast-3.jpg',
      mealRecipe:
        'In a large skillet over medium-high heat, cook the bacon until crispy, 4-6 minutes. Remove the bacon from the pan and drain on a paper towel-lined plate. In the same pan, add the garlic. Cook over low heat for about 30 seconds, or until it starts to brown. In a medium bowl, beat 8 eggs and add to the pan, along with the scallions, salt, and pepper. Scramble the eggs until mostly set but still a little wet, about 3 minutes. Remove the pan from the heat. Peel the potatoes and grate on the large holes of a box grater onto a clean kitchen towel set over a bowl. Wring out any excess liquid. Transfer the shredded potatoes to a clean, large bowl and add the remaining egg, the flour, and ½ cup (50 g) cheddar cheese, and season with salt and pepper. Mix to combine. Line a 4-inch (10 cm) diameter bowl with plastic wrap. Place ½ cup (75 g) of the grated potato mixture in the bowl. Use the back of a spoon to smooth the potatoes against the sides of the bowl in an even layer, creating a divot in the center. Fill the well with a bit of cheddar cheese, a spoonful of scrambled eggs, a bit of bacon, and top with another sprinkle of cheese. Pick up the sides of the plastic wrap, twisting to create a sealed ball. Repeat with the remaining ingredients. Chill the potato balls for 20 minutes. Preheat the oven to 375°F (190°C). Line a baking sheet with parchment paper or foil and grease with nonstick cooking spray. Unwrap the balls, place them on the prepared baking sheet, and brush with egg wash. Bake for 35-45 minutes, or until the potatoes are crispy and brown. Sprinkle with parsley and serve with ketchup on the side.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    },
    {
      id: 4,
      mealName: 'Crunchy Churro French Toast Sticks',
      image: 'breakfast-4.jpg',
      mealRecipe:
        'Remove crust from bread. Cut bread into large square pieces. Crush cornflakes in a baggie, pour into shallow dish, and set aside. Mix eggs, milks, brown sugar, cinnamon, and vanilla in a bowl. Heat skillet with about 1 tablespoon of butter. Dip bread into egg mixture on all sides. Coat in crushed cornflakes. Grill on all sides until golden brown in skillet. Immediately roll in cinnamon sugar mixture. Serve with syrup or chocolate sauce for dipping.',
      ingredients:
        '1 loaf brioche bread, 3 eggs, 3 tablespoons milk, 2 teaspoons brown sugar, 2 teaspoons cinnamon, 1 teaspoon vanilla, 2 cups cornflake (50 g), 2 tablespoons butter, 1 ½ cups cinnamon sugar (300 g)'
    },
    {
      id: 5,
      mealName: 'Loaded Breakfast Egg Roll',
      image: 'breakfast-5.jpg',
      mealRecipe:
        'Preheat oven to 350°F (180°C). In a bowl, whisk the eggs, milk, salt, and pepper until smooth. Pour the batter into greased baking sheet. Bake for 20 minutes. Place a layer of spinach on top of egg sheet until covered, leaving 2 inches (5 cm) free at the top. Place a layer of mozzarella on the spinach until covered, leaving 1 inch (2 cm) free at the bottom. Place a layer of ham on top of mozzarella until covered, leaving 1 inch (2 cm) free at the bottom. Place a layer of bacon on top of ham until covered, leaving 1 inch (2 cm) free at the bottom. Gently roll the egg roll up. Place the breakfast roll onto parchment paper and roll until fully covered. Bake for 10 minutes. Remove the parchment paper. Slice the breakfast roll and serve warm.',
      ingredients:
        '24 eggs, ½ cup whole milk (120 mL), 1 teaspoon salt, 1 teaspoon black pepper, 2 cups spinach (80 g), 20 slices mozzarella cheese, 16 slices smoked ham, 24 strips bacon'
    },
    {
      id: 6,
      mealName: 'Fluffy Pancakes',
      image: 'breakfast-6.jpg',
      mealRecipe:
        'Whisk together the flour and baking powder in a large bowl. In a separate bowl, add the butter, milk, and egg yolks, stirring to combine. In a third bowl, use a hand mixer to beat the egg whites until soft peaks form. Pour the milk mixture into the flour mixture and stir with rubber spatula until just combined. Add the beaten egg whites and gently fold to combine. Heat an 8-inch (20cm) nonstick skillet over low heat. Pour 1 ½ cups of pancake batter into the skillet, smooth out the top, then cover with a lid. Cook until golden brown on the bottom and a toothpick inserted into the center comes out clean, about 20 minutes. Transfer the pancake to a plate and repeat, making 3 more pancakes with the remaining batter. Serve with maple syrup.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    },
    {
      id: 7,
      mealName: 'Fluffy Pancakes',
      image: 'breakfast-7.jpg',
      mealRecipe:
        'Whisk together the flour and baking powder in a large bowl. In a separate bowl, add the butter, milk, and egg yolks, stirring to combine. In a third bowl, use a hand mixer to beat the egg whites until soft peaks form. Pour the milk mixture into the flour mixture and stir with rubber spatula until just combined. Add the beaten egg whites and gently fold to combine. Heat an 8-inch (20cm) nonstick skillet over low heat. Pour 1 ½ cups of pancake batter into the skillet, smooth out the top, then cover with a lid. Cook until golden brown on the bottom and a toothpick inserted into the center comes out clean, about 20 minutes. Transfer the pancake to a plate and repeat, making 3 more pancakes with the remaining batter. Serve with maple syrup.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    },
    {
      id: 8,
      mealName: 'Fluffy Pancakes',
      image: 'breakfast-8.jpg',
      mealRecipe:
        'Whisk together the flour and baking powder in a large bowl. In a separate bowl, add the butter, milk, and egg yolks, stirring to combine. In a third bowl, use a hand mixer to beat the egg whites until soft peaks form. Pour the milk mixture into the flour mixture and stir with rubber spatula until just combined. Add the beaten egg whites and gently fold to combine. Heat an 8-inch (20cm) nonstick skillet over low heat. Pour 1 ½ cups of pancake batter into the skillet, smooth out the top, then cover with a lid. Cook until golden brown on the bottom and a toothpick inserted into the center comes out clean, about 20 minutes. Transfer the pancake to a plate and repeat, making 3 more pancakes with the remaining batter. Serve with maple syrup.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    },
    {
      id: 9,
      mealName: 'Fluffy Pancakes',
      image: 'breakfast-9.jpg',
      mealRecipe:
        'Whisk together the flour and baking powder in a large bowl. In a separate bowl, add the butter, milk, and egg yolks, stirring to combine. In a third bowl, use a hand mixer to beat the egg whites until soft peaks form. Pour the milk mixture into the flour mixture and stir with rubber spatula until just combined. Add the beaten egg whites and gently fold to combine. Heat an 8-inch (20cm) nonstick skillet over low heat. Pour 1 ½ cups of pancake batter into the skillet, smooth out the top, then cover with a lid. Cook until golden brown on the bottom and a toothpick inserted into the center comes out clean, about 20 minutes. Transfer the pancake to a plate and repeat, making 3 more pancakes with the remaining batter. Serve with maple syrup.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    },
    {
      id: 10,
      mealName: 'Fluffy Pancakes',
      image: 'breakfast-10.jpg',
      mealRecipe:
        'Whisk together the flour and baking powder in a large bowl. In a separate bowl, add the butter, milk, and egg yolks, stirring to combine. In a third bowl, use a hand mixer to beat the egg whites until soft peaks form. Pour the milk mixture into the flour mixture and stir with rubber spatula until just combined. Add the beaten egg whites and gently fold to combine. Heat an 8-inch (20cm) nonstick skillet over low heat. Pour 1 ½ cups of pancake batter into the skillet, smooth out the top, then cover with a lid. Cook until golden brown on the bottom and a toothpick inserted into the center comes out clean, about 20 minutes. Transfer the pancake to a plate and repeat, making 3 more pancakes with the remaining batter. Serve with maple syrup.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    },
    {
      id: 11,
      mealName: 'Fluffy Pancakes',
      image: 'breakfast-11.jpg',
      mealRecipe:
        'Whisk together the flour and baking powder in a large bowl. In a separate bowl, add the butter, milk, and egg yolks, stirring to combine. In a third bowl, use a hand mixer to beat the egg whites until soft peaks form. Pour the milk mixture into the flour mixture and stir with rubber spatula until just combined. Add the beaten egg whites and gently fold to combine. Heat an 8-inch (20cm) nonstick skillet over low heat. Pour 1 ½ cups of pancake batter into the skillet, smooth out the top, then cover with a lid. Cook until golden brown on the bottom and a toothpick inserted into the center comes out clean, about 20 minutes. Transfer the pancake to a plate and repeat, making 3 more pancakes with the remaining batter. Serve with maple syrup.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    },
    {
      id: 12,
      mealName: 'Fluffy Pancakes',
      image: 'breakfast-12.jpg',
      mealRecipe:
        'Whisk together the flour and baking powder in a large bowl. In a separate bowl, add the butter, milk, and egg yolks, stirring to combine. In a third bowl, use a hand mixer to beat the egg whites until soft peaks form. Pour the milk mixture into the flour mixture and stir with rubber spatula until just combined. Add the beaten egg whites and gently fold to combine. Heat an 8-inch (20cm) nonstick skillet over low heat. Pour 1 ½ cups of pancake batter into the skillet, smooth out the top, then cover with a lid. Cook until golden brown on the bottom and a toothpick inserted into the center comes out clean, about 20 minutes. Transfer the pancake to a plate and repeat, making 3 more pancakes with the remaining batter. Serve with maple syrup.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    },
    {
      id: 13,
      mealName: 'Fluffy Pancakes',
      image: 'breakfast-13.jpg',
      mealRecipe:
        'Whisk together the flour and baking powder in a large bowl. In a separate bowl, add the butter, milk, and egg yolks, stirring to combine. In a third bowl, use a hand mixer to beat the egg whites until soft peaks form. Pour the milk mixture into the flour mixture and stir with rubber spatula until just combined. Add the beaten egg whites and gently fold to combine. Heat an 8-inch (20cm) nonstick skillet over low heat. Pour 1 ½ cups of pancake batter into the skillet, smooth out the top, then cover with a lid. Cook until golden brown on the bottom and a toothpick inserted into the center comes out clean, about 20 minutes. Transfer the pancake to a plate and repeat, making 3 more pancakes with the remaining batter. Serve with maple syrup.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    },
    {
      id: 14,
      mealName: 'Fluffy Pancakes',
      image: 'breakfast-14.jpg',
      mealRecipe:
        'Whisk together the flour and baking powder in a large bowl. In a separate bowl, add the butter, milk, and egg yolks, stirring to combine. In a third bowl, use a hand mixer to beat the egg whites until soft peaks form. Pour the milk mixture into the flour mixture and stir with rubber spatula until just combined. Add the beaten egg whites and gently fold to combine. Heat an 8-inch (20cm) nonstick skillet over low heat. Pour 1 ½ cups of pancake batter into the skillet, smooth out the top, then cover with a lid. Cook until golden brown on the bottom and a toothpick inserted into the center comes out clean, about 20 minutes. Transfer the pancake to a plate and repeat, making 3 more pancakes with the remaining batter. Serve with maple syrup.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    }
  ],
  lunch: [
    {
      id: 15,
      mealName: 'Super Fluffy Omelet',
      image: 'lunch-1.jpg',
      mealRecipe:
        'Separate the egg whites and the egg yolks in two separate bowls. You’ll only need 3 yolks, so discard the other 2 or reserve for another use. Whisk the egg yolks until they become homogenous and pale in color. Set aside. Transfer the egg whites to a large bowl and whisk until they triple in size and become white with medium peaks. Carefully fold the egg yolks into the egg whites until fully incorporated. Pour the egg mixture into a medium nonstick frying pan with a lid. Cook over medium-low heat until bottom of omelet has set, about 5 minutes. Lift up each side of the omelette and drop a tablespoon of butter underneath. Cover the pan and cook for another 5 minutes, or until the top of the omelet has set. Remove the lid and season the omelet with salt and pepper. Remove the pan from the heat. Fold the omelette onto a plate and sprinkle with chives.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    },
    {
      id: 16,
      mealName: 'Fluffy Pancakes',
      image: 'lunch-2.jpg',
      mealRecipe:
        'Whisk together the flour and baking powder in a large bowl. In a separate bowl, add the butter, milk, and egg yolks, stirring to combine. In a third bowl, use a hand mixer to beat the egg whites until soft peaks form. Pour the milk mixture into the flour mixture and stir with rubber spatula until just combined. Add the beaten egg whites and gently fold to combine. Heat an 8-inch (20cm) nonstick skillet over low heat. Pour 1 ½ cups of pancake batter into the skillet, smooth out the top, then cover with a lid. Cook until golden brown on the bottom and a toothpick inserted into the center comes out clean, about 20 minutes. Transfer the pancake to a plate and repeat, making 3 more pancakes with the remaining batter. Serve with maple syrup.',
      ingredients:
        '4 cups flour (500 g) (sifted), 4 tablespoons baking powder, 4 cups milk (960 mL) (warm to the touch), ¾ cup butter (170 g) (melted), 3 egg yolks, 4 egg whites, maple syrup (to serve)'
    },
    {
      id: 17,
      mealName: 'Breakfast Bombs',
      image: 'lunch-3.jpg',
      mealRecipe:
        'In a large skillet over medium-high heat, cook the bacon until crispy, 4-6 minutes. Remove the bacon from the pan and drain on a paper towel-lined plate. In the same pan, add the garlic. Cook over low heat for about 30 seconds, or until it starts to brown. In a medium bowl, beat 8 eggs and add to the pan, along with the scallions, salt, and pepper. Scramble the eggs until mostly set but still a little wet, about 3 minutes. Remove the pan from the heat. Peel the potatoes and grate on the large holes of a box grater onto a clean kitchen towel set over a bowl. Wring out any excess liquid. Transfer the shredded potatoes to a clean, large bowl and add the remaining egg, the flour, and ½ cup (50 g) cheddar cheese, and season with salt and pepper. Mix to combine. Line a 4-inch (10 cm) diameter bowl with plastic wrap. Place ½ cup (75 g) of the grated potato mixture in the bowl. Use the back of a spoon to smooth the potatoes against the sides of the bowl in an even layer, creating a divot in the center. Fill the well with a bit of cheddar cheese, a spoonful of scrambled eggs, a bit of bacon, and top with another sprinkle of cheese. Pick up the sides of the plastic wrap, twisting to create a sealed ball. Repeat with the remaining ingredients. Chill the potato balls for 20 minutes. Preheat the oven to 375°F (190°C). Line a baking sheet with parchment paper or foil and grease with nonstick cooking spray. Unwrap the balls, place them on the prepared baking sheet, and brush with egg wash. Bake for 35-45 minutes, or until the potatoes are crispy and brown. Sprinkle with parsley and serve with ketchup on the side.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    },
    {
      id: 18,
      mealName: 'Fluffy Pancakes',
      image: 'lunch-4.jpg',
      mealRecipe:
        'Whisk together the flour and baking powder in a large bowl. In a separate bowl, add the butter, milk, and egg yolks, stirring to combine. In a third bowl, use a hand mixer to beat the egg whites until soft peaks form. Pour the milk mixture into the flour mixture and stir with rubber spatula until just combined. Add the beaten egg whites and gently fold to combine. Heat an 8-inch (20cm) nonstick skillet over low heat. Pour 1 ½ cups of pancake batter into the skillet, smooth out the top, then cover with a lid. Cook until golden brown on the bottom and a toothpick inserted into the center comes out clean, about 20 minutes. Transfer the pancake to a plate and repeat, making 3 more pancakes with the remaining batter. Serve with maple syrup.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    },
    {
      id: 19,
      mealName: 'Fluffy Pancakes',
      image: 'lunch-5.jpg',
      mealRecipe:
        'Whisk together the flour and baking powder in a large bowl. In a separate bowl, add the butter, milk, and egg yolks, stirring to combine. In a third bowl, use a hand mixer to beat the egg whites until soft peaks form. Pour the milk mixture into the flour mixture and stir with rubber spatula until just combined. Add the beaten egg whites and gently fold to combine. Heat an 8-inch (20cm) nonstick skillet over low heat. Pour 1 ½ cups of pancake batter into the skillet, smooth out the top, then cover with a lid. Cook until golden brown on the bottom and a toothpick inserted into the center comes out clean, about 20 minutes. Transfer the pancake to a plate and repeat, making 3 more pancakes with the remaining batter. Serve with maple syrup.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    },
    {
      id: 20,
      mealName: 'Fluffy Pancakes',
      image: 'lunch-6.jpg',
      mealRecipe:
        'Whisk together the flour and baking powder in a large bowl. In a separate bowl, add the butter, milk, and egg yolks, stirring to combine. In a third bowl, use a hand mixer to beat the egg whites until soft peaks form. Pour the milk mixture into the flour mixture and stir with rubber spatula until just combined. Add the beaten egg whites and gently fold to combine. Heat an 8-inch (20cm) nonstick skillet over low heat. Pour 1 ½ cups of pancake batter into the skillet, smooth out the top, then cover with a lid. Cook until golden brown on the bottom and a toothpick inserted into the center comes out clean, about 20 minutes. Transfer the pancake to a plate and repeat, making 3 more pancakes with the remaining batter. Serve with maple syrup.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    },
    {
      id: 21,
      mealName: 'Fluffy Pancakes',
      image: 'lunch-7.jpg',
      mealRecipe:
        'Whisk together the flour and baking powder in a large bowl. In a separate bowl, add the butter, milk, and egg yolks, stirring to combine. In a third bowl, use a hand mixer to beat the egg whites until soft peaks form. Pour the milk mixture into the flour mixture and stir with rubber spatula until just combined. Add the beaten egg whites and gently fold to combine. Heat an 8-inch (20cm) nonstick skillet over low heat. Pour 1 ½ cups of pancake batter into the skillet, smooth out the top, then cover with a lid. Cook until golden brown on the bottom and a toothpick inserted into the center comes out clean, about 20 minutes. Transfer the pancake to a plate and repeat, making 3 more pancakes with the remaining batter. Serve with maple syrup.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    },
    {
      id: 22,
      mealName: 'Fluffy Pancakes',
      image: 'lunch-8.jpg',
      mealRecipe:
        'Whisk together the flour and baking powder in a large bowl. In a separate bowl, add the butter, milk, and egg yolks, stirring to combine. In a third bowl, use a hand mixer to beat the egg whites until soft peaks form. Pour the milk mixture into the flour mixture and stir with rubber spatula until just combined. Add the beaten egg whites and gently fold to combine. Heat an 8-inch (20cm) nonstick skillet over low heat. Pour 1 ½ cups of pancake batter into the skillet, smooth out the top, then cover with a lid. Cook until golden brown on the bottom and a toothpick inserted into the center comes out clean, about 20 minutes. Transfer the pancake to a plate and repeat, making 3 more pancakes with the remaining batter. Serve with maple syrup.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    },
    {
      id: 23,
      mealName: 'Fluffy Pancakes',
      image: 'lunch-9.jpg',
      mealRecipe:
        'Whisk together the flour and baking powder in a large bowl. In a separate bowl, add the butter, milk, and egg yolks, stirring to combine. In a third bowl, use a hand mixer to beat the egg whites until soft peaks form. Pour the milk mixture into the flour mixture and stir with rubber spatula until just combined. Add the beaten egg whites and gently fold to combine. Heat an 8-inch (20cm) nonstick skillet over low heat. Pour 1 ½ cups of pancake batter into the skillet, smooth out the top, then cover with a lid. Cook until golden brown on the bottom and a toothpick inserted into the center comes out clean, about 20 minutes. Transfer the pancake to a plate and repeat, making 3 more pancakes with the remaining batter. Serve with maple syrup.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    },
    {
      id: 24,
      mealName: 'Fluffy Pancakes',
      image: 'lunch-10.jpg',
      mealRecipe:
        'Whisk together the flour and baking powder in a large bowl. In a separate bowl, add the butter, milk, and egg yolks, stirring to combine. In a third bowl, use a hand mixer to beat the egg whites until soft peaks form. Pour the milk mixture into the flour mixture and stir with rubber spatula until just combined. Add the beaten egg whites and gently fold to combine. Heat an 8-inch (20cm) nonstick skillet over low heat. Pour 1 ½ cups of pancake batter into the skillet, smooth out the top, then cover with a lid. Cook until golden brown on the bottom and a toothpick inserted into the center comes out clean, about 20 minutes. Transfer the pancake to a plate and repeat, making 3 more pancakes with the remaining batter. Serve with maple syrup.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    },
    {
      id: 25,
      mealName: 'Fluffy Pancakes',
      image: 'lunch-11.jpg',
      mealRecipe:
        'Whisk together the flour and baking powder in a large bowl. In a separate bowl, add the butter, milk, and egg yolks, stirring to combine. In a third bowl, use a hand mixer to beat the egg whites until soft peaks form. Pour the milk mixture into the flour mixture and stir with rubber spatula until just combined. Add the beaten egg whites and gently fold to combine. Heat an 8-inch (20cm) nonstick skillet over low heat. Pour 1 ½ cups of pancake batter into the skillet, smooth out the top, then cover with a lid. Cook until golden brown on the bottom and a toothpick inserted into the center comes out clean, about 20 minutes. Transfer the pancake to a plate and repeat, making 3 more pancakes with the remaining batter. Serve with maple syrup.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    },
    {
      id: 26,
      mealName: 'Fluffy Pancakes',
      image: 'lunch-12.jpg',
      mealRecipe:
        'Whisk together the flour and baking powder in a large bowl. In a separate bowl, add the butter, milk, and egg yolks, stirring to combine. In a third bowl, use a hand mixer to beat the egg whites until soft peaks form. Pour the milk mixture into the flour mixture and stir with rubber spatula until just combined. Add the beaten egg whites and gently fold to combine. Heat an 8-inch (20cm) nonstick skillet over low heat. Pour 1 ½ cups of pancake batter into the skillet, smooth out the top, then cover with a lid. Cook until golden brown on the bottom and a toothpick inserted into the center comes out clean, about 20 minutes. Transfer the pancake to a plate and repeat, making 3 more pancakes with the remaining batter. Serve with maple syrup.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    },
    {
      id: 27,
      mealName: 'Fluffy Pancakes',
      image: 'lunch-13.jpg',
      mealRecipe:
        'Whisk together the flour and baking powder in a large bowl. In a separate bowl, add the butter, milk, and egg yolks, stirring to combine. In a third bowl, use a hand mixer to beat the egg whites until soft peaks form. Pour the milk mixture into the flour mixture and stir with rubber spatula until just combined. Add the beaten egg whites and gently fold to combine. Heat an 8-inch (20cm) nonstick skillet over low heat. Pour 1 ½ cups of pancake batter into the skillet, smooth out the top, then cover with a lid. Cook until golden brown on the bottom and a toothpick inserted into the center comes out clean, about 20 minutes. Transfer the pancake to a plate and repeat, making 3 more pancakes with the remaining batter. Serve with maple syrup.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    },
    {
      id: 28,
      mealName: 'Fluffy Pancakes',
      image: 'lunch-14.jpg',
      mealRecipe:
        'Whisk together the flour and baking powder in a large bowl. In a separate bowl, add the butter, milk, and egg yolks, stirring to combine. In a third bowl, use a hand mixer to beat the egg whites until soft peaks form. Pour the milk mixture into the flour mixture and stir with rubber spatula until just combined. Add the beaten egg whites and gently fold to combine. Heat an 8-inch (20cm) nonstick skillet over low heat. Pour 1 ½ cups of pancake batter into the skillet, smooth out the top, then cover with a lid. Cook until golden brown on the bottom and a toothpick inserted into the center comes out clean, about 20 minutes. Transfer the pancake to a plate and repeat, making 3 more pancakes with the remaining batter. Serve with maple syrup.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    }
  ],
  dinner: [
    {
      id: 29,
      mealName: 'Super Fluffy Omelet',
      image: 'dinner-1.jpg',
      mealRecipe:
        'Separate the egg whites and the egg yolks in two separate bowls. You’ll only need 3 yolks, so discard the other 2 or reserve for another use. Whisk the egg yolks until they become homogenous and pale in color. Set aside. Transfer the egg whites to a large bowl and whisk until they triple in size and become white with medium peaks. Carefully fold the egg yolks into the egg whites until fully incorporated. Pour the egg mixture into a medium nonstick frying pan with a lid. Cook over medium-low heat until bottom of omelet has set, about 5 minutes. Lift up each side of the omelette and drop a tablespoon of butter underneath. Cover the pan and cook for another 5 minutes, or until the top of the omelet has set. Remove the lid and season the omelet with salt and pepper. Remove the pan from the heat. Fold the omelette onto a plate and sprinkle with chives.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    },
    {
      id: 30,
      mealName: 'Fluffy Pancakes',
      image: 'dinner-2.jpg',
      mealRecipe:
        'Whisk together the flour and baking powder in a large bowl. In a separate bowl, add the butter, milk, and egg yolks, stirring to combine. In a third bowl, use a hand mixer to beat the egg whites until soft peaks form. Pour the milk mixture into the flour mixture and stir with rubber spatula until just combined. Add the beaten egg whites and gently fold to combine. Heat an 8-inch (20cm) nonstick skillet over low heat. Pour 1 ½ cups of pancake batter into the skillet, smooth out the top, then cover with a lid. Cook until golden brown on the bottom and a toothpick inserted into the center comes out clean, about 20 minutes. Transfer the pancake to a plate and repeat, making 3 more pancakes with the remaining batter. Serve with maple syrup.',
      ingredients:
        '4 cups flour (500 g) (sifted), 4 tablespoons baking powder, 4 cups milk (960 mL) (warm to the touch), ¾ cup butter (170 g) (melted), 3 egg yolks, 4 egg whites, maple syrup (to serve)'
    },
    {
      id: 31,
      mealName: 'Breakfast Bombs',
      image: 'dinner-3.jpg',
      mealRecipe:
        'In a large skillet over medium-high heat, cook the bacon until crispy, 4-6 minutes. Remove the bacon from the pan and drain on a paper towel-lined plate. In the same pan, add the garlic. Cook over low heat for about 30 seconds, or until it starts to brown. In a medium bowl, beat 8 eggs and add to the pan, along with the scallions, salt, and pepper. Scramble the eggs until mostly set but still a little wet, about 3 minutes. Remove the pan from the heat. Peel the potatoes and grate on the large holes of a box grater onto a clean kitchen towel set over a bowl. Wring out any excess liquid. Transfer the shredded potatoes to a clean, large bowl and add the remaining egg, the flour, and ½ cup (50 g) cheddar cheese, and season with salt and pepper. Mix to combine. Line a 4-inch (10 cm) diameter bowl with plastic wrap. Place ½ cup (75 g) of the grated potato mixture in the bowl. Use the back of a spoon to smooth the potatoes against the sides of the bowl in an even layer, creating a divot in the center. Fill the well with a bit of cheddar cheese, a spoonful of scrambled eggs, a bit of bacon, and top with another sprinkle of cheese. Pick up the sides of the plastic wrap, twisting to create a sealed ball. Repeat with the remaining ingredients. Chill the potato balls for 20 minutes. Preheat the oven to 375°F (190°C). Line a baking sheet with parchment paper or foil and grease with nonstick cooking spray. Unwrap the balls, place them on the prepared baking sheet, and brush with egg wash. Bake for 35-45 minutes, or until the potatoes are crispy and brown. Sprinkle with parsley and serve with ketchup on the side.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    },
    {
      id: 32,
      mealName: 'Fluffy Pancakes',
      image: 'dinner-4.jpg',
      mealRecipe:
        'Whisk together the flour and baking powder in a large bowl. In a separate bowl, add the butter, milk, and egg yolks, stirring to combine. In a third bowl, use a hand mixer to beat the egg whites until soft peaks form. Pour the milk mixture into the flour mixture and stir with rubber spatula until just combined. Add the beaten egg whites and gently fold to combine. Heat an 8-inch (20cm) nonstick skillet over low heat. Pour 1 ½ cups of pancake batter into the skillet, smooth out the top, then cover with a lid. Cook until golden brown on the bottom and a toothpick inserted into the center comes out clean, about 20 minutes. Transfer the pancake to a plate and repeat, making 3 more pancakes with the remaining batter. Serve with maple syrup.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    },
    {
      id: 33,
      mealName: 'Fluffy Pancakes',
      image: 'dinner-5.jpg',
      mealRecipe:
        'Whisk together the flour and baking powder in a large bowl. In a separate bowl, add the butter, milk, and egg yolks, stirring to combine. In a third bowl, use a hand mixer to beat the egg whites until soft peaks form. Pour the milk mixture into the flour mixture and stir with rubber spatula until just combined. Add the beaten egg whites and gently fold to combine. Heat an 8-inch (20cm) nonstick skillet over low heat. Pour 1 ½ cups of pancake batter into the skillet, smooth out the top, then cover with a lid. Cook until golden brown on the bottom and a toothpick inserted into the center comes out clean, about 20 minutes. Transfer the pancake to a plate and repeat, making 3 more pancakes with the remaining batter. Serve with maple syrup.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    },
    {
      id: 34,
      mealName: 'Fluffy Pancakes',
      image: 'dinner-6.jpg',
      mealRecipe:
        'Whisk together the flour and baking powder in a large bowl. In a separate bowl, add the butter, milk, and egg yolks, stirring to combine. In a third bowl, use a hand mixer to beat the egg whites until soft peaks form. Pour the milk mixture into the flour mixture and stir with rubber spatula until just combined. Add the beaten egg whites and gently fold to combine. Heat an 8-inch (20cm) nonstick skillet over low heat. Pour 1 ½ cups of pancake batter into the skillet, smooth out the top, then cover with a lid. Cook until golden brown on the bottom and a toothpick inserted into the center comes out clean, about 20 minutes. Transfer the pancake to a plate and repeat, making 3 more pancakes with the remaining batter. Serve with maple syrup.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    },
    {
      id: 35,
      mealName: 'Fluffy Pancakes',
      image: 'dinner-7.jpg',
      mealRecipe:
        'Whisk together the flour and baking powder in a large bowl. In a separate bowl, add the butter, milk, and egg yolks, stirring to combine. In a third bowl, use a hand mixer to beat the egg whites until soft peaks form. Pour the milk mixture into the flour mixture and stir with rubber spatula until just combined. Add the beaten egg whites and gently fold to combine. Heat an 8-inch (20cm) nonstick skillet over low heat. Pour 1 ½ cups of pancake batter into the skillet, smooth out the top, then cover with a lid. Cook until golden brown on the bottom and a toothpick inserted into the center comes out clean, about 20 minutes. Transfer the pancake to a plate and repeat, making 3 more pancakes with the remaining batter. Serve with maple syrup.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    },
    {
      id: 36,
      mealName: 'Fluffy Pancakes',
      image: 'dinner-8.jpg',
      mealRecipe:
        'Whisk together the flour and baking powder in a large bowl. In a separate bowl, add the butter, milk, and egg yolks, stirring to combine. In a third bowl, use a hand mixer to beat the egg whites until soft peaks form. Pour the milk mixture into the flour mixture and stir with rubber spatula until just combined. Add the beaten egg whites and gently fold to combine. Heat an 8-inch (20cm) nonstick skillet over low heat. Pour 1 ½ cups of pancake batter into the skillet, smooth out the top, then cover with a lid. Cook until golden brown on the bottom and a toothpick inserted into the center comes out clean, about 20 minutes. Transfer the pancake to a plate and repeat, making 3 more pancakes with the remaining batter. Serve with maple syrup.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    },
    {
      id: 37,
      mealName: 'Fluffy Pancakes',
      image: 'dinner-9.jpg',
      mealRecipe:
        'Whisk together the flour and baking powder in a large bowl. In a separate bowl, add the butter, milk, and egg yolks, stirring to combine. In a third bowl, use a hand mixer to beat the egg whites until soft peaks form. Pour the milk mixture into the flour mixture and stir with rubber spatula until just combined. Add the beaten egg whites and gently fold to combine. Heat an 8-inch (20cm) nonstick skillet over low heat. Pour 1 ½ cups of pancake batter into the skillet, smooth out the top, then cover with a lid. Cook until golden brown on the bottom and a toothpick inserted into the center comes out clean, about 20 minutes. Transfer the pancake to a plate and repeat, making 3 more pancakes with the remaining batter. Serve with maple syrup.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    },
    {
      id: 38,
      mealName: 'Fluffy Pancakes',
      image: 'dinner-10.jpg',
      mealRecipe:
        'Whisk together the flour and baking powder in a large bowl. In a separate bowl, add the butter, milk, and egg yolks, stirring to combine. In a third bowl, use a hand mixer to beat the egg whites until soft peaks form. Pour the milk mixture into the flour mixture and stir with rubber spatula until just combined. Add the beaten egg whites and gently fold to combine. Heat an 8-inch (20cm) nonstick skillet over low heat. Pour 1 ½ cups of pancake batter into the skillet, smooth out the top, then cover with a lid. Cook until golden brown on the bottom and a toothpick inserted into the center comes out clean, about 20 minutes. Transfer the pancake to a plate and repeat, making 3 more pancakes with the remaining batter. Serve with maple syrup.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    },
    {
      id: 39,
      mealName: 'Fluffy Pancakes',
      image: 'dinner-11.jpg',
      mealRecipe:
        'Whisk together the flour and baking powder in a large bowl. In a separate bowl, add the butter, milk, and egg yolks, stirring to combine. In a third bowl, use a hand mixer to beat the egg whites until soft peaks form. Pour the milk mixture into the flour mixture and stir with rubber spatula until just combined. Add the beaten egg whites and gently fold to combine. Heat an 8-inch (20cm) nonstick skillet over low heat. Pour 1 ½ cups of pancake batter into the skillet, smooth out the top, then cover with a lid. Cook until golden brown on the bottom and a toothpick inserted into the center comes out clean, about 20 minutes. Transfer the pancake to a plate and repeat, making 3 more pancakes with the remaining batter. Serve with maple syrup.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    },
    {
      id: 40,
      mealName: 'Fluffy Pancakes',
      image: 'dinner-12.jpg',
      mealRecipe:
        'Whisk together the flour and baking powder in a large bowl. In a separate bowl, add the butter, milk, and egg yolks, stirring to combine. In a third bowl, use a hand mixer to beat the egg whites until soft peaks form. Pour the milk mixture into the flour mixture and stir with rubber spatula until just combined. Add the beaten egg whites and gently fold to combine. Heat an 8-inch (20cm) nonstick skillet over low heat. Pour 1 ½ cups of pancake batter into the skillet, smooth out the top, then cover with a lid. Cook until golden brown on the bottom and a toothpick inserted into the center comes out clean, about 20 minutes. Transfer the pancake to a plate and repeat, making 3 more pancakes with the remaining batter. Serve with maple syrup.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    },
    {
      id: 41,
      mealName: 'Fluffy Pancakes',
      image: 'dinner-13.jpg',
      mealRecipe:
        'Whisk together the flour and baking powder in a large bowl. In a separate bowl, add the butter, milk, and egg yolks, stirring to combine. In a third bowl, use a hand mixer to beat the egg whites until soft peaks form. Pour the milk mixture into the flour mixture and stir with rubber spatula until just combined. Add the beaten egg whites and gently fold to combine. Heat an 8-inch (20cm) nonstick skillet over low heat. Pour 1 ½ cups of pancake batter into the skillet, smooth out the top, then cover with a lid. Cook until golden brown on the bottom and a toothpick inserted into the center comes out clean, about 20 minutes. Transfer the pancake to a plate and repeat, making 3 more pancakes with the remaining batter. Serve with maple syrup.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    },
    {
      id: 42,
      mealName: 'Fluffy Pancakes',
      image: 'dinner-14.jpg',
      mealRecipe:
        'Whisk together the flour and baking powder in a large bowl. In a separate bowl, add the butter, milk, and egg yolks, stirring to combine. In a third bowl, use a hand mixer to beat the egg whites until soft peaks form. Pour the milk mixture into the flour mixture and stir with rubber spatula until just combined. Add the beaten egg whites and gently fold to combine. Heat an 8-inch (20cm) nonstick skillet over low heat. Pour 1 ½ cups of pancake batter into the skillet, smooth out the top, then cover with a lid. Cook until golden brown on the bottom and a toothpick inserted into the center comes out clean, about 20 minutes. Transfer the pancake to a plate and repeat, making 3 more pancakes with the remaining batter. Serve with maple syrup.',
      ingredients:
        '5 large egg whites, 3 large egg yolks, 2 tablespoons unsalted butter (halved), salt (to taste), pepper (to taste), fresh chive (chopped, for garnish)'
    }
  ]
};

//Grab Elements
const breakfastDiv = document.querySelector('#breakfast');
const lunchDiv = document.querySelector('#lunch');
const dinnerDiv = document.querySelector('#dinner');

const generateMeals = document.querySelector('#generate-meals');
const clearMeals = document.querySelector('#clear-meals');

const paintUi = () => {
  const randomBreakfast = Math.floor(Math.random() * 13);
  const randomLunch = Math.floor(Math.random() * 13);
  const randomDinner = Math.floor(Math.random() * 13);

  const currentBreakfast = meals.breakfast[randomBreakfast];
  const currentLunch = meals.lunch[randomLunch];
  const currentDinner = meals.dinner[randomDinner];

  console.log(currentBreakfast, currentLunch, currentDinner);

  breakfastDiv.innerHTML = `
    <img src="./img/breakfast/${currentBreakfast.image}" alt="${currentBreakfast.mealName}">
    <h5>${currentBreakfast.mealName}</h5>
    <p>${currentBreakfast.ingredients}</p>
    <p>${currentBreakfast.mealRecipe}</p>
    `;
  lunchDiv.innerHTML = `
    <img src="./img/lunch/${currentLunch.image}" alt="${currentLunch.mealName}">
    <h5>${currentLunch.mealName}</h5>
    <p>${currentLunch.ingredients}</p>
    <p>${currentLunch.mealRecipe}</p>
    `;
  dinnerDiv.innerHTML = `
    <img src="./img/dinner/${currentDinner.image}" alt="${currentDinner.mealName}">
    <h5>${currentDinner.mealName}</h5>
    <p>${currentDinner.ingredients}</p>
    <p>${currentDinner.mealRecipe}</p>
    `;
};

const clearUi = () => {
  breakfastDiv.innerHTML = '';
  lunchDiv.innerHTML = '';
  dinnerDiv.innerHTML = '';
};

generateMeals.addEventListener('click', paintUi);
clearMeals.addEventListener('click', clearUi);
