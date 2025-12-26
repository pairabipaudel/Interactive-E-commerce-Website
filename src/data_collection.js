import { v4 as uuidv4 } from 'uuid'

import blue_men_coat from './cloth_collection/blue_men_coat.png'
import blue_men_pant from './cloth_collection/blue_men_pant.png'
import brown_girl_top from './cloth_collection/brown_girl_top.png'
import checkshirt_men from './cloth_collection/checkshirt_men.png'
import cozy_women_jacket from './cloth_collection/cozy_women_jacket.png'
import creamwhite_mean_pant from './cloth_collection/creamwhite_mean_pant.png'
import lightblue_men_shirt from './cloth_collection/lightblue_men_shirt.png'
import long_women_pant from './cloth_collection/long_women_pant.png'
import pink_women_bowtop from './cloth_collection/pink_women_bowtop.png'
import red_women_jacket from './cloth_collection/red_women_jacket.png'
import red_women_sweater from './cloth_collection/red_women_sweater.png'
import short_women_skirt from './cloth_collection/short_women_skirt.png'

const data_collection = [
  {
    id: uuidv4(),
    img: blue_men_coat,
    name: "Blue Men Coat",
    category: "men",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 1020,
  },
  {
    id: uuidv4(),
    img: blue_men_pant,
    name: "Blue Men Pant",
    category: "men",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 1360,
  },
  {
    id: uuidv4(),
    img: lightblue_men_shirt,
    name: "Light Blue Men Shirt",
    category: "men",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 980,
  },
  {
    id: uuidv4(),
    img: checkshirt_men,
    name: "Check Shirt Men",
    category: "men",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 1150,
  },
  {
    id: uuidv4(),
    img: creamwhite_mean_pant,
    name: "Cream White Men Pant",
    category: "men",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 1400,
  },
  {
    id: uuidv4(),
    img: brown_girl_top,
    name: "Brown Girl Top",
    category: "women",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 1560,
  },
  {
    id: uuidv4(),
    img: cozy_women_jacket,
    name: "Cozy Women Jacket",
    category: "women",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 2100,
  },
  {
    id: uuidv4(),
    img: red_women_jacket,
    name: "Red Women Jacket",
    category: "women",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 2300,
  },
  {
    id: uuidv4(),
    img: red_women_sweater,
    name: "Red Women Sweater",
    category: "women",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 1800,
  },
  {
    id: uuidv4(),
    img: long_women_pant,
    name: "Long Women Pant",
    category: "women",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 1650,
  },
  {
    id: uuidv4(),
    img: pink_women_bowtop,
    name: "Pink Women Bowtop",
    category: "women",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 1500,
  },
  {
    id: uuidv4(),
    img: short_women_skirt,
    name: "Short Women Skirt",
    category: "women",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 1200,
  },
]

export default data_collection
