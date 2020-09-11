const express = require('express');
const router = express.Router();

const restaurants = require('../data')
let currentRestaurantsID = 9

router.get('/', (req,res) => {
    res.json(restaurants)
})

router.post('/', (req,res) => {
    currentRestaurantsID += 1
    const newRestaurant = {
        currentRestaurantsID,
        ...req.body
    }
    restaurants.push(newRestaurant)
    res.json(newRestaurant)
})

router.get('/:id', (req,res) => {
   const restaurantsID =  Number.parseInt(req.params.id,10) 
   const restaurant =  restaurants.find((restaurant) => restaurant.id === restaurantsID )
    res.json(restaurant)
})


router.put('/:id', (req,res) => {
   const restaurantsID =  Number.parseInt(req.params.id,10) 
   const restaurantIndex =  restaurants.findIndex((restaurant) => restaurant.id === restaurantsID )
   const updatedRestaurant = {
       id : restaurantsID,
       ...req.body
   }
   restaurants[restaurantIndex] = updatedRestaurant
    res.json(updatedRestaurant)
})

router.delete('/:id', (req,res) => {
    const restaurantsID =  Number.parseInt(req.params.id,10) 
    const restaurantIndex =  restaurants.findIndex((restaurant) => restaurant.id === restaurantsID )
    restaurants.splice(restaurantIndex, 1 )
    res.sendStatus(204)
    res.send('Delete API')
})


module.exports  = router;
