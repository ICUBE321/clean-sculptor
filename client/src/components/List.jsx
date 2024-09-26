import React, { useState } from "react";
import { Link } from "react-router-dom";

const List = () => {
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

  let currentList = {
    id: 1,
    name: "Bulk List",
    calories: 2000,
  };

  const [isModifying, setIsModifying] = useState(false);

  return (
    <div className="my-20 w-3/5">
      <div className="flex justify-between">
        <Link
          to="/lists"
          type="button"
          className="self-start text-darkblue bg-transparent hover:bg-darkblue hover:text-darkbg focus:ring-4 focus:outline-none focus:ring-transparent font-medium rounded-full text-lg p-2.5 text-center inline-flex items-center me-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>
        </Link>
        <button
          type=""
          onClick={() =>
            isModifying ? setIsModifying(false) : setIsModifying(true)
          }
          className="self-end border font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border-lightblue text-gray hover:text-darkblue hover:bg-lightblue focus:ring-blue-800"
        >
          {isModifying ? "SAVE" : "MODIFY"}
        </button>
      </div>
      <div className="flex flex-col items-center mb-20">
        {isModifying ? (
          <input
            type="text"
            name=""
            id=""
            placeholder={currentList.name.toUpperCase()}
            className="grow text-5xl font-extrabold text-center text-lightblue bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0"
          />
        ) : (
          <h1 className="grow text-5xl font-extrabold text-center text-darkblue">
            {currentList.name.toUpperCase()}
          </h1>
        )}
        <form action="" className="w-full">
          <div className="flex mt-10 items-center justify-center">
            <label htmlFor="list_calories" className="text-gray mr-3">
              List Calories:
            </label>
            <input
              type="number"
              name=""
              id="list_calories"
              disabled={!isModifying}
              value={currentList.calories}
              className={`${
                isModifying ? "text-lightblue" : "text-darkblue"
              } text-sm p-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0`}
            />
          </div>
        </form>
      </div>
      <ul className="h-96 overflow-auto w-full divide-y divide-gray-200 dark:divide-gray-700">
        {tmpResponse1.hints.map((foodItem) => {
          return (
            <li
              className={`text-white p-4 ${
                isModifying ? "" : "hover:bg-darkgray"
              }`}
              key={foodItem.food.foodId}
            >
              {isModifying ? (
                <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={foodItem.food.image}
                      alt={`${foodItem.food.knownAs} image`}
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {foodItem.food.label}
                  </p>
                  <ul className="text-sm dark:text-gray flex-1 flex flex-wrap justify-end">
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
                  <button>
                    <svg
                      className="w-6 h-6 text-red-400 hover:text-red-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <Link
                  to={"/item/" + foodItem.food.foodId}
                  state={{ openMode: "list-item", listId: currentList.id }}
                  className="flex items-center justify-center space-x-4 rtl:space-x-reverse"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={foodItem.food.image}
                      alt={`${foodItem.food.knownAs} image`}
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {foodItem.food.label}
                  </p>
                  <ul className="text-sm dark:text-gray flex-1 flex flex-wrap justify-end">
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
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;