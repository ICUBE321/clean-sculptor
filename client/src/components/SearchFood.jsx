import React, { useState } from "react";
import axios from "axios";
import FoodList from "./FoodList";
import Item from "./Item";
import SearchForm from "./SearchForm";

// foodData elements format:
//id: foodItem.food.foodId,
// name: foodItem.food.label,
// alias: foodItem.food.knownAs,
// image: foodItem.food.image,
// ingredients: new Array({
//   quantity: foodItem.measures[0].weight,
//   measureURI: foodItem.measures[0].uri,
//   qualifiers: qualifiers,
//   foodId: foodItem.food.foodId,

const SearchFood = () => {
  let tmpResponse1 = {
    text: "chicken",
    parsed: [
      {
        food: {
          foodId: "food_bmyxrshbfao9s1amjrvhoauob6mo",
          label: "Chicken",
          knownAs: "chicken",
          nutrients: {
            ENERC_KCAL: 215.0,
            PROCNT: 18.6,
            FAT: 15.1,
            CHOCDF: 0.0,
            FIBTG: 0.0,
          },
          category: "Generic foods",
          categoryLabel: "food",
          image:
            "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg",
        },
      },
    ],
    hints: [
      {
        food: {
          foodId: "food_bmyxrshbfao9s1amjrvhoauob6mo",
          label: "Chicken",
          knownAs: "chicken",
          nutrients: {
            ENERC_KCAL: 215.0,
            PROCNT: 18.6,
            FAT: 15.1,
            CHOCDF: 0.0,
            FIBTG: 0.0,
          },
          category: "Generic foods",
          categoryLabel: "food",
          image:
            "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg",
        },
        measures: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
            label: "Serving",
            weight: 250.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
            label: "Whole",
            weight: 1200.0,
            qualified: [
              {
                qualifiers: [
                  {
                    uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_small",
                    label: "small",
                  },
                ],
                weight: 1000.0,
              },
              {
                qualifiers: [
                  {
                    uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_boneless",
                    label: "boneless",
                  },
                ],
                weight: 920.0,
              },
            ],
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_chicken",
            label: "Chicken",
            weight: 1200.0,
            qualified: [
              {
                qualifiers: [
                  {
                    uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_boneless",
                    label: "boneless",
                  },
                ],
                weight: 920.0,
              },
            ],
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_breast",
            label: "Breast",
            weight: 196.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_piece",
            label: "Piece",
            weight: 89.4,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_slice",
            label: "Slice",
            weight: 28.3,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            weight: 1.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
            label: "Ounce",
            weight: 28.349523125,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
            label: "Pound",
            weight: 453.59237,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
            label: "Kilogram",
            weight: 1000.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
            label: "Cup",
            weight: 140.0,
          },
        ],
      },
      {
        food: {
          foodId: "food_bmyxrshbfao9s1amjrvhoauob6mo",
          label: "Fryer Chicken",
          knownAs: "chicken",
          nutrients: {
            ENERC_KCAL: 215.0,
            PROCNT: 18.6,
            FAT: 15.1,
            CHOCDF: 0.0,
            FIBTG: 0.0,
          },
          category: "Generic foods",
          categoryLabel: "food",
          image:
            "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg",
        },
        measures: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
            label: "Serving",
            weight: 250.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
            label: "Whole",
            weight: 1200.0,
            qualified: [
              {
                qualifiers: [
                  {
                    uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_small",
                    label: "small",
                  },
                ],
                weight: 1000.0,
              },
              {
                qualifiers: [
                  {
                    uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_boneless",
                    label: "boneless",
                  },
                ],
                weight: 920.0,
              },
            ],
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_chicken",
            label: "Chicken",
            weight: 1200.0,
            qualified: [
              {
                qualifiers: [
                  {
                    uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_boneless",
                    label: "boneless",
                  },
                ],
                weight: 920.0,
              },
            ],
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_breast",
            label: "Breast",
            weight: 196.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_piece",
            label: "Piece",
            weight: 89.4,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_slice",
            label: "Slice",
            weight: 28.3,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            weight: 1.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
            label: "Ounce",
            weight: 28.349523125,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
            label: "Pound",
            weight: 453.59237,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
            label: "Kilogram",
            weight: 1000.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
            label: "Cup",
            weight: 140.0,
          },
        ],
      },
      {
        food: {
          foodId: "food_bmyxrshbfao9s1amjrvhoauob6mo",
          label: "Broiler Chicken",
          knownAs: "chicken",
          nutrients: {
            ENERC_KCAL: 215.0,
            PROCNT: 18.6,
            FAT: 15.1,
            CHOCDF: 0.0,
            FIBTG: 0.0,
          },
          category: "Generic foods",
          categoryLabel: "food",
          image:
            "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg",
        },
        measures: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
            label: "Serving",
            weight: 250.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
            label: "Whole",
            weight: 1200.0,
            qualified: [
              {
                qualifiers: [
                  {
                    uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_small",
                    label: "small",
                  },
                ],
                weight: 1000.0,
              },
              {
                qualifiers: [
                  {
                    uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_boneless",
                    label: "boneless",
                  },
                ],
                weight: 920.0,
              },
            ],
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_chicken",
            label: "Chicken",
            weight: 1200.0,
            qualified: [
              {
                qualifiers: [
                  {
                    uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_boneless",
                    label: "boneless",
                  },
                ],
                weight: 920.0,
              },
            ],
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_breast",
            label: "Breast",
            weight: 196.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_piece",
            label: "Piece",
            weight: 89.4,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_slice",
            label: "Slice",
            weight: 28.3,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            weight: 1.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
            label: "Ounce",
            weight: 28.349523125,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
            label: "Pound",
            weight: 453.59237,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
            label: "Kilogram",
            weight: 1000.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
            label: "Cup",
            weight: 140.0,
          },
        ],
      },
      {
        food: {
          foodId: "food_b8ggvjya2427xoaegmj51bu1o22g",
          label: "Chicken Drummette",
          knownAs: "chicken drumette",
          nutrients: {
            ENERC_KCAL: 191.0,
            PROCNT: 17.5,
            FAT: 12.8,
            CHOCDF: 0.0,
            FIBTG: 0.0,
          },
          category: "Generic foods",
          categoryLabel: "food",
          image:
            "https://www.edamam.com/food-img/f92/f928682fc890edded472c5d8baeffed5.jpg",
        },
        measures: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
            label: "Whole",
            weight: 25.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_piece",
            label: "Piece",
            weight: 107.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_wing",
            label: "Wing",
            weight: 49.0,
            qualified: [
              {
                qualifiers: [
                  {
                    uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_boneless",
                    label: "boneless",
                  },
                ],
                weight: 49.0,
              },
            ],
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_drummette",
            label: "Drummette",
            weight: 25.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_wingette",
            label: "Wingette",
            weight: 25.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
            label: "Package",
            weight: 1150.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            weight: 1.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
            label: "Ounce",
            weight: 28.349523125,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
            label: "Pound",
            weight: 453.59237,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
            label: "Kilogram",
            weight: 1000.0,
          },
        ],
      },
      {
        food: {
          foodId: "food_agzvc6lbxg03stab195szars32lx",
          label: "Chicken Drumstick",
          knownAs: "chicken drumstick",
          nutrients: {
            ENERC_KCAL: 161.0,
            PROCNT: 18.1,
            FAT: 9.2,
            CHOCDF: 0.11,
            FIBTG: 0.0,
          },
          category: "Generic foods",
          categoryLabel: "food",
          image:
            "https://www.edamam.com/food-img/491/4916353c22bd1ac381ac81d55597ddbe.jpg",
        },
        measures: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
            label: "Whole",
            weight: 130.0,
            qualified: [
              {
                qualifiers: [
                  {
                    uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_skinless",
                    label: "skinless",
                  },
                ],
                weight: 122.0,
              },
            ],
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_chicken",
            label: "Chicken",
            weight: 245.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_drumstick",
            label: "Drumstick",
            weight: 130.0,
            qualified: [
              {
                qualifiers: [
                  {
                    uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_skinless",
                    label: "skinless",
                  },
                ],
                weight: 122.0,
              },
            ],
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            weight: 1.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
            label: "Ounce",
            weight: 28.349523125,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
            label: "Pound",
            weight: 453.59237,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
            label: "Kilogram",
            weight: 1000.0,
          },
        ],
      },
      {
        food: {
          foodId: "food_aqnly5xaq6rsv2bv0oi81bugldyr",
          label: "Chicken Giblet",
          knownAs: "chicken giblet",
          nutrients: {
            ENERC_KCAL: 127.0,
            PROCNT: 18.1,
            FAT: 5.04,
            CHOCDF: 1.14,
            FIBTG: 0.0,
          },
          category: "Generic foods",
          categoryLabel: "food",
          image:
            "https://www.edamam.com/food-img/fd0/fd0b7c759d9ce103e852430fca17f04b.jpg",
        },
        measures: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
            label: "Whole",
            weight: 25.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_giblet",
            label: "Giblet",
            weight: 113.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            weight: 1.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
            label: "Ounce",
            weight: 28.349523125,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
            label: "Pound",
            weight: 453.59237,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
            label: "Kilogram",
            weight: 1000.0,
          },
        ],
      },
      {
        food: {
          foodId: "food_a3ssteza84mhb2alnunwga2n6yt8",
          label: "Chicken Heart",
          knownAs: "chicken heart",
          nutrients: {
            ENERC_KCAL: 153.0,
            PROCNT: 15.6,
            FAT: 9.33,
            CHOCDF: 0.71,
            FIBTG: 0.0,
          },
          category: "Generic foods",
          categoryLabel: "food",
          image:
            "https://www.edamam.com/food-img/5aa/5aa4ff691b0918bf29d61b181cd662eb.jpg",
        },
        measures: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
            label: "Whole",
            weight: 1.8,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_heart",
            label: "Heart",
            weight: 6.1,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            weight: 1.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
            label: "Ounce",
            weight: 28.349523125,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
            label: "Pound",
            weight: 453.59237,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
            label: "Kilogram",
            weight: 1000.0,
          },
        ],
      },
      {
        food: {
          foodId: "food_a9xs7abb632dn3aozv3w4a9351fh",
          label: "Chicken Liver",
          knownAs: "chicken liver",
          nutrients: {
            ENERC_KCAL: 119.0,
            PROCNT: 16.9,
            FAT: 4.83,
            CHOCDF: 0.73,
            FIBTG: 0.0,
          },
          category: "Generic foods",
          categoryLabel: "food",
          image:
            "https://www.edamam.com/food-img/9aa/9aa4760ac12b682555a37a1cdc91150b.jpg",
        },
        measures: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
            label: "Whole",
            weight: 44.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_liver",
            label: "Liver",
            weight: 44.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            weight: 1.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
            label: "Ounce",
            weight: 28.349523125,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
            label: "Pound",
            weight: 453.59237,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
            label: "Kilogram",
            weight: 1000.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
            label: "Cup",
            weight: 226.0,
          },
        ],
      },
      {
        food: {
          foodId: "food_brxyh8lb5bvzopa0by54fbecw55p",
          label: "Chicken Neck",
          knownAs: "chicken neck",
          nutrients: {
            ENERC_KCAL: 297.0,
            PROCNT: 14.1,
            FAT: 26.2,
            CHOCDF: 0.0,
            FIBTG: 0.0,
          },
          category: "Generic foods",
          categoryLabel: "food",
          image:
            "https://www.edamam.com/food-img/c88/c8895a600cde7d68d0ec78da8a5513f6.jpg",
        },
        measures: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
            label: "Whole",
            weight: 15.0,
            qualified: [
              {
                qualifiers: [
                  {
                    uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_boneless",
                    label: "boneless",
                  },
                ],
                weight: 50.0,
              },
            ],
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_neck",
            label: "Neck",
            weight: 50.0,
            qualified: [
              {
                qualifiers: [
                  {
                    uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_boneless",
                    label: "boneless",
                  },
                ],
                weight: 50.0,
              },
            ],
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            weight: 1.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
            label: "Ounce",
            weight: 28.349523125,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
            label: "Pound",
            weight: 453.59237,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
            label: "Kilogram",
            weight: 1000.0,
          },
        ],
      },
      {
        food: {
          foodId: "food_bp1b7enbhl4sw5a9uwvq5amv00a5",
          label: "Chicken, Roaster",
          knownAs: "roasting chicken",
          nutrients: {
            ENERC_KCAL: 213.0,
            PROCNT: 17.1,
            FAT: 15.5,
            CHOCDF: 0.09,
            FIBTG: 0.0,
          },
          category: "Generic foods",
          categoryLabel: "food",
          image:
            "https://www.edamam.com/food-img/9c4/9c4d61e12803924814a35c9043d8b33a.jpg",
        },
        measures: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
            label: "Whole",
            weight: 1509.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_chicken",
            label: "Chicken",
            weight: 1509.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            weight: 1.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
            label: "Ounce",
            weight: 28.349523125,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
            label: "Pound",
            weight: 453.59237,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
            label: "Kilogram",
            weight: 1000.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
            label: "Cup",
            weight: 140.0,
          },
        ],
      },
      {
        food: {
          foodId: "food_a6bp4f1bgu015waerzbg6bnbmjjk",
          label: "Chicken Carcass",
          knownAs: "chicken back",
          nutrients: {
            ENERC_KCAL: 319.0,
            PROCNT: 14.0,
            FAT: 28.7,
            CHOCDF: 0.0,
            FIBTG: 0.0,
          },
          category: "Generic foods",
          categoryLabel: "food",
        },
        measures: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
            label: "Whole",
            weight: 500.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_back",
            label: "Back",
            weight: 198.0,
            qualified: [
              {
                qualifiers: [
                  {
                    uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_boneless",
                    label: "boneless",
                  },
                ],
                weight: 198.0,
              },
            ],
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            weight: 1.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
            label: "Ounce",
            weight: 28.349523125,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
            label: "Pound",
            weight: 453.59237,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
            label: "Kilogram",
            weight: 1000.0,
          },
        ],
      },
      {
        food: {
          foodId: "food_bdrxu94aj3x2djbpur8dhagfhkcn",
          label: "Chicken Breast",
          knownAs: "chicken breast",
          nutrients: {
            ENERC_KCAL: 120.0,
            PROCNT: 22.5,
            FAT: 2.62,
            CHOCDF: 0.0,
            FIBTG: 0.0,
          },
          category: "Generic foods",
          categoryLabel: "food",
          image:
            "https://www.edamam.com/food-img/da5/da510379d3650787338ca16fb69f4c94.jpg",
        },
        measures: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_breast",
            label: "Breast",
            weight: 174.0,
            qualified: [
              {
                qualifiers: [
                  {
                    uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_boneless_and_skinless",
                    label: "boneless and skinless",
                  },
                ],
                weight: 174.0,
              },
            ],
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
            label: "Serving",
            weight: 174.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
            label: "Whole",
            weight: 272.0,
            qualified: [
              {
                qualifiers: [
                  {
                    uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_whole",
                    label: "whole",
                  },
                ],
                weight: 174.0,
              },
            ],
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_piece",
            label: "Piece",
            weight: 272.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_cutlet",
            label: "Cutlet",
            weight: 113.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_half",
            label: "Half",
            weight: 87.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_slice",
            label: "Slice",
            weight: 87.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
            label: "Package",
            weight: 926.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            weight: 1.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
            label: "Ounce",
            weight: 28.349523125,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
            label: "Pound",
            weight: 453.59237,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
            label: "Kilogram",
            weight: 1000.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
            label: "Cup",
            weight: 226.0,
          },
        ],
      },
      {
        food: {
          foodId: "food_bozv00zb0zmd5oa7f0tvlah4apam",
          label: "Chicken Feet",
          knownAs: "chicken feet",
          nutrients: {
            ENERC_KCAL: 215.0,
            PROCNT: 19.4,
            FAT: 14.6,
            CHOCDF: 0.2,
            FIBTG: 0.0,
          },
          category: "Generic foods",
          categoryLabel: "food",
          image:
            "https://www.edamam.com/food-img/99d/99d766d1734a6f8e7ee99d942b085594.jpg",
        },
        measures: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_foot",
            label: "Foot",
            weight: 56.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
            label: "Serving",
            weight: 56.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            weight: 1.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
            label: "Ounce",
            weight: 28.349523125,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
            label: "Pound",
            weight: 453.59237,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
            label: "Kilogram",
            weight: 1000.0,
          },
        ],
      },
      {
        food: {
          foodId: "food_bpt4b3hbf9b8vraz3g0ifbbcexmm",
          label: "Chicken Gizzard",
          knownAs: "chicken gizzard",
          nutrients: {
            ENERC_KCAL: 94.0,
            PROCNT: 17.7,
            FAT: 2.06,
            CHOCDF: 0.0,
            FIBTG: 0.0,
          },
          category: "Generic foods",
          categoryLabel: "food",
          image:
            "https://www.edamam.com/food-img/e96/e967b0d9bd88d441dda89b1cc41447dc.jpg",
        },
        measures: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
            label: "Whole",
            weight: 85.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gizzard",
            label: "Gizzard",
            weight: 85.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            weight: 1.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
            label: "Ounce",
            weight: 28.349523125,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
            label: "Pound",
            weight: 453.59237,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
            label: "Kilogram",
            weight: 1000.0,
          },
        ],
      },
      {
        food: {
          foodId: "food_ane1uw5amh8okda3qqu88bow58ul",
          label: "Chicken Leg",
          knownAs: "chicken leg",
          nutrients: {
            ENERC_KCAL: 214.0,
            PROCNT: 16.4,
            FAT: 16.0,
            CHOCDF: 0.17,
            FIBTG: 0.0,
          },
          category: "Generic foods",
          categoryLabel: "food",
          image:
            "https://www.edamam.com/food-img/f53/f53de7dd1054370cdfd98e18ccf77dbe.jpg",
        },
        measures: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
            label: "Whole",
            weight: 344.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_leg",
            label: "Leg",
            weight: 344.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_thigh",
            label: "Thigh",
            weight: 185.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_drumstick",
            label: "Drumstick",
            weight: 111.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_back",
            label: "Back",
            weight: 49.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            weight: 1.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
            label: "Ounce",
            weight: 28.349523125,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
            label: "Pound",
            weight: 453.59237,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
            label: "Kilogram",
            weight: 1000.0,
          },
        ],
      },
      {
        food: {
          foodId: "food_bm8j53kbu73enhamxkr92a7x5nq6",
          label: "Chicken Meat",
          knownAs: "chicken meat",
          nutrients: {
            ENERC_KCAL: 119.0,
            PROCNT: 21.4,
            FAT: 3.08,
            CHOCDF: 0.0,
            FIBTG: 0.0,
          },
          category: "Generic foods",
          categoryLabel: "food",
          image:
            "https://www.edamam.com/food-img/e54/e546d27ffc3d338f99031ce1423cd331.jpg",
        },
        measures: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
            label: "Whole",
            weight: 197.0,
            qualified: [
              {
                qualifiers: [
                  {
                    uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_boneless_and_skinless",
                    label: "boneless and skinless",
                  },
                ],
                weight: 658.0,
              },
            ],
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_chicken",
            label: "Chicken",
            weight: 658.0,
            qualified: [
              {
                qualifiers: [
                  {
                    uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_boneless_and_skinless",
                    label: "boneless and skinless",
                  },
                ],
                weight: 658.0,
              },
            ],
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            weight: 1.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
            label: "Ounce",
            weight: 28.349523125,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
            label: "Pound",
            weight: 453.59237,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
            label: "Kilogram",
            weight: 1000.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
            label: "Cup",
            weight: 226.0,
          },
        ],
      },
      {
        food: {
          foodId: "food_aw629ydan8k1d6amflzaubmwx5rl",
          label: "Chicken Skin",
          knownAs: "chicken skin",
          nutrients: {
            ENERC_KCAL: 440.0,
            PROCNT: 9.58,
            FAT: 44.2,
            CHOCDF: 0.79,
            FIBTG: 0.0,
          },
          category: "Generic foods",
          categoryLabel: "food",
          image:
            "https://www.edamam.com/food-img/ffd/ffdd1d0b789e99381a9ae963469b0a8d.jpg",
        },
        measures: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            weight: 1.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
            label: "Ounce",
            weight: 28.349523125,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
            label: "Pound",
            weight: 453.59237,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
            label: "Kilogram",
            weight: 1000.0,
          },
        ],
      },
      {
        food: {
          foodId: "food_bsarl08be0gwarb34bpviafna9d4",
          label: "Chicken Thigh",
          knownAs: "chicken thigh",
          nutrients: {
            ENERC_KCAL: 221.0,
            PROCNT: 16.5,
            FAT: 16.6,
            CHOCDF: 0.25,
            FIBTG: 0.0,
          },
          category: "Generic foods",
          categoryLabel: "food",
          image:
            "https://www.edamam.com/food-img/007/00792642367e1f55de680762f85cfb3b.jpg",
        },
        measures: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
            label: "Whole",
            weight: 193.0,
            qualified: [
              {
                qualifiers: [
                  {
                    uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_skinless",
                    label: "skinless",
                  },
                ],
                weight: 149.0,
              },
            ],
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_thigh",
            label: "Thigh",
            weight: 193.0,
            qualified: [
              {
                qualifiers: [
                  {
                    uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_skinless",
                    label: "skinless",
                  },
                ],
                weight: 149.0,
              },
            ],
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_piece",
            label: "Piece",
            weight: 85.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            weight: 1.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
            label: "Ounce",
            weight: 28.349523125,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
            label: "Pound",
            weight: 453.59237,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
            label: "Kilogram",
            weight: 1000.0,
          },
        ],
      },
      {
        food: {
          foodId: "food_aftnyj9ap60fc6av2a9nfbju90c1",
          label: "Chicken Wing",
          knownAs: "chicken wing",
          nutrients: {
            ENERC_KCAL: 191.0,
            PROCNT: 17.5,
            FAT: 12.8,
            CHOCDF: 0.0,
            FIBTG: 0.0,
          },
          category: "Generic foods",
          categoryLabel: "food",
          image:
            "https://www.edamam.com/food-img/f92/f928682fc890edded472c5d8baeffed5.jpg",
        },
        measures: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
            label: "Whole",
            weight: 25.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_piece",
            label: "Piece",
            weight: 107.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_wing",
            label: "Wing",
            weight: 49.0,
            qualified: [
              {
                qualifiers: [
                  {
                    uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_boneless",
                    label: "boneless",
                  },
                ],
                weight: 49.0,
              },
            ],
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_drummette",
            label: "Drummette",
            weight: 25.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_wingette",
            label: "Wingette",
            weight: 25.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
            label: "Package",
            weight: 1150.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            weight: 1.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
            label: "Ounce",
            weight: 28.349523125,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
            label: "Pound",
            weight: 453.59237,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
            label: "Kilogram",
            weight: 1000.0,
          },
        ],
      },
      {
        food: {
          foodId: "food_b4430z5avkliqsbzns6gpbhdn07c",
          label: "Chicken Mince",
          knownAs: "ground chicken",
          nutrients: {
            ENERC_KCAL: 143.0,
            PROCNT: 17.4,
            FAT: 8.1,
            CHOCDF: 0.04,
            FIBTG: 0.0,
          },
          category: "Generic foods",
          categoryLabel: "food",
          image:
            "https://www.edamam.com/food-img/d67/d673152269f59d682d27b0a8446354b3.jpg",
        },
        measures: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
            label: "Whole",
            weight: 114.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_burger",
            label: "Burger",
            weight: 114.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_hamburger",
            label: "Hamburger",
            weight: 114.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pattie",
            label: "Pattie",
            weight: 114.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            weight: 1.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
            label: "Ounce",
            weight: 28.349523125,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
            label: "Pound",
            weight: 453.59237,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
            label: "Kilogram",
            weight: 1000.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_tablespoon",
            label: "Tablespoon",
            weight: 14.1249999997612,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
            label: "Cup",
            weight: 226.0,
          },
        ],
      },
      {
        food: {
          foodId: "food_a14vpadag4ngf5a56ukeubb688pp",
          label: "Chicken Feet Boiled",
          knownAs: "chicken feet boiled",
          nutrients: {
            ENERC_KCAL: 215.0,
            PROCNT: 19.4,
            FAT: 14.6,
            CHOCDF: 0.2,
            FIBTG: 0.0,
          },
          category: "Generic foods",
          categoryLabel: "food",
          image:
            "https://www.edamam.com/food-img/99d/99d766d1734a6f8e7ee99d942b085594.jpg",
        },
        measures: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_foot",
            label: "Foot",
            weight: 56.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
            label: "Serving",
            weight: 56.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            weight: 1.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
            label: "Ounce",
            weight: 28.349523125,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
            label: "Pound",
            weight: 453.59237,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
            label: "Kilogram",
            weight: 1000.0,
          },
        ],
      },
      {
        food: {
          foodId: "food_b5gn1oebj7rluzaj7ypcdbgz882f",
          label: "Chicken Drumstick Meat",
          knownAs: "chicken leg meat",
          nutrients: {
            ENERC_KCAL: 120.0,
            PROCNT: 19.2,
            FAT: 4.22,
            CHOCDF: 0.0,
            FIBTG: 0.0,
          },
          category: "Generic foods",
          categoryLabel: "food",
          image:
            "https://www.edamam.com/food-img/567/567cfd8c18ed1a1395f54029801698be.jpg",
        },
        measures: [
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
            label: "Whole",
            weight: 88.0,
            qualified: [
              {
                qualifiers: [
                  {
                    uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_boneless_and_skinless",
                    label: "boneless and skinless",
                  },
                ],
                weight: 88.0,
              },
            ],
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_leg",
            label: "Leg",
            weight: 88.0,
            qualified: [
              {
                qualifiers: [
                  {
                    uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_boneless_and_skinless",
                    label: "boneless and skinless",
                  },
                ],
                weight: 265.0,
              },
            ],
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_thigh",
            label: "Thigh",
            weight: 147.0,
            qualified: [
              {
                qualifiers: [
                  {
                    uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_boneless_and_skinless",
                    label: "boneless and skinless",
                  },
                ],
                weight: 147.0,
              },
            ],
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_drumstick",
            label: "Drumstick",
            weight: 88.0,
            qualified: [
              {
                qualifiers: [
                  {
                    uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_boneless_and_skinless",
                    label: "boneless and skinless",
                  },
                ],
                weight: 88.0,
              },
            ],
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_back",
            label: "Back",
            weight: 30.0,
            qualified: [
              {
                qualifiers: [
                  {
                    uri: "http://www.edamam.com/ontologies/edamam.owl#Qualifier_boneless_and_skinless",
                    label: "boneless and skinless",
                  },
                ],
                weight: 30.0,
              },
            ],
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
            label: "Gram",
            weight: 1.0,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
            label: "Ounce",
            weight: 28.349523125,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
            label: "Pound",
            weight: 453.59237,
          },
          {
            uri: "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
            label: "Kilogram",
            weight: 1000.0,
          },
        ],
      },
    ],
    _links: {
      next: {
        title: "Next page",
        href: "https://api.edamam.com/api/food-database/v2/parser?session=44&app_id=0ac97a9d&app_key=37ae6336466c5bf7c4328965b8cab27d&ingr=chicken",
      },
    },
  };

  let tmpResponse2 = {
    uri: "http://www.edamam.com/ontologies/edamam.owl#b60480d9-2e1d-4f4f-8b5e-d716d99ef4e1",
    calories: 668,
    totalWeight: 225.0,
    dietLabels: [],
    healthLabels: [
      "PALEO",
      "SPECIFIC_CARBS",
      "DAIRY_FREE",
      "GLUTEN_FREE",
      "WHEAT_FREE",
      "EGG_FREE",
      "MILK_FREE",
      "PEANUT_FREE",
      "TREE_NUT_FREE",
      "SOY_FREE",
      "FISH_FREE",
      "SHELLFISH_FREE",
      "PORK_FREE",
      "RED_MEAT_FREE",
      "CRUSTACEAN_FREE",
      "CELERY_FREE",
      "MUSTARD_FREE",
      "SESAME_FREE",
      "LUPINE_FREE",
      "MOLLUSK_FREE",
      "ALCOHOL_FREE",
      "NO_OIL_ADDED",
      "NO_SUGAR_ADDED",
      "KOSHER",
    ],
    cautions: [],
    totalNutrients: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 668.25,
        unit: "kcal",
      },
      FAT: {
        label: "Total lipid (fat)",
        quantity: 58.949999999999996,
        unit: "g",
      },
      FASAT: {
        label: "Fatty acids, total saturated",
        quantity: 16.357499999999998,
        unit: "g",
      },
      FAMS: {
        label: "Fatty acids, total monounsaturated",
        quantity: 23.849999999999998,
        unit: "g",
      },
      FAPU: {
        label: "Fatty acids, total polyunsaturated",
        quantity: 12.78,
        unit: "g",
      },
      CHOCDF: {
        label: "Carbohydrate, by difference",
        quantity: 0.0,
        unit: "g",
      },
      FIBTG: {
        label: "Fiber, total dietary",
        quantity: 0.0,
        unit: "g",
      },
      PROCNT: {
        label: "Protein",
        quantity: 31.724999999999998,
        unit: "g",
      },
      CHOLE: {
        label: "Cholesterol",
        quantity: 222.75,
        unit: "mg",
      },
      NA: {
        label: "Sodium, Na",
        quantity: 144.0,
        unit: "mg",
      },
      CA: {
        label: "Calcium, Ca",
        quantity: 40.5,
        unit: "mg",
      },
      MG: {
        label: "Magnesium, Mg",
        quantity: 29.25,
        unit: "mg",
      },
      K: {
        label: "Potassium, K",
        quantity: 308.25,
        unit: "mg",
      },
      FE: {
        label: "Iron, Fe",
        quantity: 4.2749999999999995,
        unit: "mg",
      },
      ZN: {
        label: "Zinc, Zn",
        quantity: 4.1850000000000005,
        unit: "mg",
      },
      P: {
        label: "Phosphorus, P",
        quantity: 252.0,
        unit: "mg",
      },
      VITA_RAE: {
        label: "Vitamin A, RAE",
        quantity: 146.25,
        unit: "µg",
      },
      VITC: {
        label: "Vitamin C, total ascorbic acid",
        quantity: 0.0,
        unit: "mg",
      },
      THIA: {
        label: "Thiamin",
        quantity: 0.10575,
        unit: "mg",
      },
      RIBF: {
        label: "Riboflavin",
        quantity: 0.42975,
        unit: "mg",
      },
      NIA: {
        label: "Niacin",
        quantity: 8.1225,
        unit: "mg",
      },
      VITB6A: {
        label: "Vitamin B-6",
        quantity: 0.3825,
        unit: "mg",
      },
      FOLDFE: {
        label: "Folate, DFE",
        quantity: 11.25,
        unit: "µg",
      },
      FOLFD: {
        label: "Folate, food",
        quantity: 11.25,
        unit: "µg",
      },
      FOLAC: {
        label: "Folic acid",
        quantity: 0.0,
        unit: "µg",
      },
      VITB12: {
        label: "Vitamin B-12",
        quantity: 0.585,
        unit: "µg",
      },
      TOCPHA: {
        label: "Vitamin E (alpha-tocopherol)",
        quantity: 0.6749999999999999,
        unit: "mg",
      },
      WATER: {
        label: "Water",
        quantity: 135.0,
        unit: "g",
      },
    },
    totalDaily: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 33.4125,
        unit: "%",
      },
      FAT: {
        label: "Fat",
        quantity: 90.6923076923077,
        unit: "%",
      },
      FASAT: {
        label: "Saturated",
        quantity: 81.7875,
        unit: "%",
      },
      CHOCDF: {
        label: "Carbs",
        quantity: 0.0,
        unit: "%",
      },
      FIBTG: {
        label: "Fiber",
        quantity: 0.0,
        unit: "%",
      },
      PROCNT: {
        label: "Protein",
        quantity: 63.45,
        unit: "%",
      },
      CHOLE: {
        label: "Cholesterol",
        quantity: 74.25,
        unit: "%",
      },
      NA: {
        label: "Sodium",
        quantity: 6.0,
        unit: "%",
      },
      CA: {
        label: "Calcium",
        quantity: 4.05,
        unit: "%",
      },
      MG: {
        label: "Magnesium",
        quantity: 6.964285714285714,
        unit: "%",
      },
      K: {
        label: "Potassium",
        quantity: 6.558510638297872,
        unit: "%",
      },
      FE: {
        label: "Iron",
        quantity: 23.749999999999996,
        unit: "%",
      },
      ZN: {
        label: "Zinc",
        quantity: 38.045454545454554,
        unit: "%",
      },
      P: {
        label: "Phosphorus",
        quantity: 36.0,
        unit: "%",
      },
      VITA_RAE: {
        label: "Vitamin A",
        quantity: 16.25,
        unit: "%",
      },
      VITC: {
        label: "Vitamin C",
        quantity: 0.0,
        unit: "%",
      },
      THIA: {
        label: "Thiamin (B1)",
        quantity: 8.8125,
        unit: "%",
      },
      RIBF: {
        label: "Riboflavin (B2)",
        quantity: 33.05769230769231,
        unit: "%",
      },
      NIA: {
        label: "Niacin (B3)",
        quantity: 50.765625,
        unit: "%",
      },
      VITB6A: {
        label: "Vitamin B6",
        quantity: 29.423076923076923,
        unit: "%",
      },
      FOLDFE: {
        label: "Folate equivalent (total)",
        quantity: 2.8125,
        unit: "%",
      },
      VITB12: {
        label: "Vitamin B12",
        quantity: 24.375,
        unit: "%",
      },
      TOCPHA: {
        label: "Vitamin E",
        quantity: 4.5,
        unit: "%",
      },
    },
    ingredients: [
      {
        parsed: [
          {
            quantity: 15.0,
            measure: "whole",
            food: "chicken neck",
            foodId: "food_brxyh8lb5bvzopa0by54fbecw55p",
            weight: 225.0,
            retainedWeight: 225.0,
            measureURI:
              "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
            status: "OK",
          },
        ],
      },
    ],
  };

  // State variables to store user input and validation status
  // const [queriedFood, setQueriedFood] = useState(""); // user selected fod item
  // const [foodData, setFoodData] = useState(); // returned list of food items
  // const [selectedFood, setSelectedFood] = useState({
  //   id: "",
  //   name: "",
  //   alias: "",
  //   image: "",
  //   calories: "",
  //   unit: "",
  //   protein: "",
  //   carbs: "",
  //   fats: "",
  // }); //to store the currently selected food data (ingredients object)

  // // Function to handle food search form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Here you can perform api call to get the meals info
  //   console.log("Food:", queriedFood);
  //   edamamApiCallFoodList();
  //   // You can also send the data to your backend server for authentication
  // };

  // // To get the list of related foods using edamam api
  // function edamamApiCallFoodList() {
  //   // let url = `https://api.edamam.com/api/food-database/v2/parser?app_id=0ac97a9d&app_key=37ae6336466c5bf7c4328965b8cab27d&ingr=${queriedFood}`;
  //   // axios
  //   //   .get(url)
  //   //   .then((response) => {
  //   //     parseFoodListResponse(response.data);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error(error);
  //   //   });

  //   parseFoodListResponse(tmpResponse1);
  // }

  // // For parsing returned list of food gotten in response
  // function parseFoodListResponse(foodResponse) {
  //   let parsedFoodList = foodResponse.hints.map((foodItem) => {
  //     console.log(foodItem);
  //     let qualifiers = "";
  //     for (const qualified in foodItem.measures[0]) {
  //       if (qualified === "qualified") {
  //         qualifiers = new Array(
  //           foodItem.measures[0].qualified[0].qualifiers[0].uri
  //         );
  //       }
  //     }
  //     return {
  //       key: foodItem.food.foodId,
  //       id: foodItem.food.foodId,
  //       name: foodItem.food.label,
  //       alias: foodItem.food.knownAs,
  //       image: foodItem.food.image,
  //       ingredients: new Array({
  //         quantity: foodItem.measures[0].weight,
  //         measureURI: foodItem.measures[0].uri,
  //         qualifiers: qualifiers,
  //         foodId: foodItem.food.foodId,
  //       }),
  //     };
  //   });
  //   console.log(parsedFoodList);
  //   setFoodData(parsedFoodList);
  // }

  // function handleItemSelected(foodId) {
  //   console.log(`item with id: ${foodId} selected!`);
  //   // use id to find the ingredients value in
  //   //the foodData and use to populate the selectedFood variable
  //   const pickedItem = foodData.find((item) => {
  //     if (item.id == foodId) {
  //       console.log(`item details: id-${item.id} and name-${item.name}`);
  //       return item;
  //     }
  //   });
  //   // navigate to Item component or use it as the displayed component
  //   edamamApiCallFoodData(pickedItem);
  // }

  // // To get data on specific user-selected food
  // function edamamApiCallFoodData(item) {
  //   let url =
  //     "https://api.edamam.com/api/food-database/v2/nutrients?app_id=0ac97a9d&app_key=37ae6336466c5bf7c4328965b8cab27d";
  //   //console.log(item);
  //   let ingredientsObj = item.ingredients[0];
  //   //console.log(ingredientsObj);
  //   // ensure quaifiers is passed into the api call as an array
  //   if (ingredientsObj.qualifiers == null || ingredientsObj.qualifiers == "")
  //     ingredientsObj.qualifiers = [];
  //   //console.log(ingredientsObj.qualifiers);
  //   // axios
  //   //   .post(url, {
  //   //     ingredients: [
  //   //       {
  //   //         quantity: ingredientsObj.quantity,
  //   //         measureURI: ingredientsObj.measureURI,
  //   //         qualifiers: ingredientsObj.qualifiers,
  //   //         foodId: ingredientsObj.foodId,
  //   //       },
  //   //     ],
  //   //   })
  //   //   .then((response) => {
  //   //     console.log(response.data);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log(error);
  //   //   });

  //   //temp response for testing
  //   parseNutritionalResponse(item, tmpResponse2);
  // }

  // function parseNutritionalResponse(foodItem, nutriResp) {
  //   console.log(nutriResp);
  //   setSelectedFood({
  //     id: foodItem.id,
  //     name: foodItem.name,
  //     alias: foodItem.alias,
  //     image: foodItem.image,
  //     calories: nutriResp.calories,
  //     unit: "g",
  //     protein: nutriResp.totalNutrients.PROCNT.quantity,
  //     carbs: nutriResp.totalNutrients.CHOCDF.quantity,
  //     fats: nutriResp.totalNutrients.FAT.quantity,
  //   });

  //   console.log(selectedFood);
  // }

  return (
    <div className="my-20">
      <h1
        htmlFor="default-search"
        className="text-5xl font-extrabold text-center dark:text-lightblue mb-20"
      >
        WHAT'S THE NEXT MEAL?
      </h1>
      <form action="" className="mb-12">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-darkgray dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search food item"
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-lightblue font-medium rounded-lg text-sm px-4 py-2 dark:bg-darkbg dark:border-lightblue dark:text-gray dark:hover:text-darkblue dark:hover:bg-lightblue dark:focus:ring-lightblue"
          >
            Find
          </button>
        </div>
      </form>
      <ul className="h-96 overflow-auto max-w-lg divide-y divide-gray-200 dark:divide-gray-700 mx-auto">
        {tmpResponse1.hints.map((foodItem) => {
          return (
            <li
              className="text-white p-3 sm:p-4 hover:bg-darkgray"
              key={foodItem.food.foodId}
              onClick={() => {
                itemModal(foodItem);
              }}
            >
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={foodItem.food.image}
                    alt={`${foodItem.food.knownAs} image`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {foodItem.food.label}
                  </p>
                  <ul className="text-sm dark:text-gray flex flex-wrap">
                    <li className="mr-2">
                      Protein: {foodItem.food.nutrients.PROCNT}g
                    </li>
                    <li className="mr-2">
                      Carbs: {foodItem.food.nutrients.CHOCDF}g
                    </li>
                    <li className="mr-2">
                      Fats: {foodItem.food.nutrients.FAT}g
                    </li>
                  </ul>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-lightblue font-medium rounded-lg text-sm px-4 py-2 dark:bg-darkbg dark:border-lightblue dark:text-gray dark:hover:text-darkblue dark:hover:bg-lightblue dark:focus:ring-lightblue">
                    ADD
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchFood;
