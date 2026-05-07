let labour = 0.75
let rent = 1
let materials = 0.5
let HST = 1.13
let diameter_of_the_pizza = game.askForNumber("what is the diameter of the pizza?")
let subtotal_cost_of_the_pizza = labour + (rent + materials * diameter_of_the_pizza)
let rounded_subtotal_cost = Math.round(subtotal_cost_of_the_pizza)
game.splash("the rounded subtotal cost of the pizza is:" + rounded_subtotal_cost)
let total_cost_of_the_pizza = subtotal_cost_of_the_pizza * HST
let rounded_total_cost = Math.round(total_cost_of_the_pizza)
game.splash("the rounded total cost of the pizza is:" + rounded_total_cost)
