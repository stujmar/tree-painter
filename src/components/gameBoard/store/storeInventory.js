import { 
    barnWhiteSVG,
    barnColorSVG,
    wellWhiteSVG,
    wellColorSVG,
    siloWhiteSVG,
    siloColorSVG,
    starsWhiteSVG,
    starsColorSVG,
    scareCrowWhiteSVG,
    scareCrowColorSVG,
  } from "./storeSvgs";


export const inventory = [
    {
      name: "speed",
      alias: "Scarecrow",
      cost: [
        {
          amount: 1,
          resource: "acorns"
        }
      ],
      whiteSVG: scareCrowWhiteSVG(50),
      colorSVG: scareCrowColorSVG(50),
      description: "Scarecrow has watched the forest for eons, you now control the flow of time.",
    },
    {
      name: "water",
      alias: "Well",
      cost: [
        {
          amount: 5,
          resource: "acorns"
        }
      ],
      whiteSVG: wellWhiteSVG(125),
      colorSVG: wellColorSVG(125),
      description: "Water is used to grow crops and animals",
    },
    {
      name: "wood",
      alias: "Barn",
      cost: [
        {
          amount: 10,
          resource: "acorns"
        }
      ],
      whiteSVG: barnWhiteSVG(70),
      colorSVG: barnColorSVG(70),
      description: "A barn is needed to store animals",
    },
    {
      name: "seasons",
      alias: "Silo",
      cost: [
        {
          amount: 15,
          resource: "acorns"
        },
        {
          amount: 5,
          resource: "water"
        }
      ],
      whiteSVG: siloWhiteSVG(70),
      colorSVG: siloColorSVG(70),
      description: "A silo is needed to store crops",
    },
    {
      name: "stars",
      alias: "Observatory",
      cost: [
        {
          amount: 5,
          resource: "acorns"
        },
        {
          amount: 5,
          resource: "wood"
        }
      ],
      whiteSVG: starsWhiteSVG(70),
      colorSVG: starsColorSVG(70),
      description: "A star is needed to harvest crops",
    }
  ];