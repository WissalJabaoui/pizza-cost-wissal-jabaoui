game.splash("what is the diameter of the pizza?")
let labour = 0.75
let rent = 1
let materials = 0.5
let diameter_of_the_pizza = game.askForNumber("what is the diameter of the pizza?")
let subtotal_of_the_pizza = labour + (rent + materials * diameter_of_the_pizza)
game.splash(subtotal_of_the_pizza)
let total_cost_of_the_pizza = subtotal_of_the_pizza * 1.13
game.splash(total_cost_of_the_pizza)
let rounded_total_cost = Math.round(total_cost_of_the_pizza)
game.splash(rounded_total_cost)
