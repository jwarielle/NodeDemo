const express = require('express')
const cupcakeNames = require("@jwarielle/cupcakenames");
const app = express()
const port = 3000

const cupcakes = [
  birthdayCake = {
    name: 'Birthday Cake',
    cakeFlavor: "Vanilla with Sprinkles",
    frostingFlavor: 'Vanilla',
    favorite: true
  },
  chocolate = {
    name: 'Chocolate',
    cakeFlavor: "Chocolate Fudge",
    frostingFlavor: 'Chocolate',
    favorite: false
  },
  lemon = {
    name: 'Lemon Drop',
    cakeFlavor: "Lemon",
    frostingFlavor: 'Limoncello',
    favorite: false
  },
  Carrot = {
    name: 'Carrot Cake',
    cakeFlavor: "Carrot",
    frostingFlavor: 'Vanilla Cream Cheese',
    favorite: true
  },
  Strawberry = {
    name: 'Strawberry Cake',
    cakeFlavor: "Strawberry",
    frostingFlavor: 'Strawberry Cream Cheese',
    favorite: true
  }
]

let myCupcakeName = cupcakeNames(); //=> "Lemon Surprise"

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pages/index', {
      cupcakes,
      myCupcakeName
    })
})

app.get('/map', (req, res) => {
  res.render('pages/map')
})

app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})
