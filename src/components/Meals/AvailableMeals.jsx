import { Card } from '../UI/Card'
import classes from './AvailableMeals.module.css'
import { MealItem } from './MealItem/MealItem'

const BEERS = [
  {
    id: 'b1',
    name: '3 Fonteinen Druif Riesling',
    description:
      'For this Druif, we macerated Riesling grapes from Harth & Harth, Rheinhessen, Germany. Maceration took five months and we used two- and three-year old lambikken only. Afterwards, we blended with three-year old lambikken and very young lambikken for balance and bottle fermentation.In total, we used lambikken originating from four different barrels and ten different brews. The weighted average age of the blend is almost 22 months. The final fruit intensity is 500 grams of Riesling grapes per litre of finished Druif. 100% 3 Fonteinen brewed lambik.',
    price: 54.99,
  },
  {
    id: 'b2',
    name: '3 Fonteinen Druif Spätburgunder',
    description:
      'For this Druif, we macerated Spätburgunder (the German Pinot Noir) from Weingut Harth + Harth. Freshly picked in Rheinhessen. Maceration took almost four months. We only used two-and three-year old lambics, which brings the weighted average maceration upon bottling to almost 21 months. The final fruit intensity clocks at 500 grams of grapes per litre of finished Druif. Thank you Henning & family!',
    price: 50.99,
  },
  {
    id: 'b3',
    name: '3 Fonteinen Druif Muscaris',
    description:
      'For this Druif, we macerated muscaris grapes, picked at Hoenshof in the summer of 2021. We macerated the grape must on two- and three-year old lambikken. Maceration took almost four months before blending and bottling. This brings the weighted average age of the blend to more than 22 months. The final fruit proportion is 396 grams of muscaris grapes per litre of Druif. Of all brews, more than a quarter was brewed with Pajottenland grown cereals. 100% 3 Fonteinen-brewed lambic.',
    price: 59.99,
  },
  {
    id: 'b4',
    name: '3 Fonteinen Pruim Brusselse Datjes',
    description:
      'This Pruim features the Brusselse Datjes, an old plum varietal, hand-picked by our team in the summer of 2021 in the small plum orchards of Willy, a retired schoolteacher. With a yield of only 240 kilos, this is a small batch blend. The plums macerated on a single oak barrel for a good four months. We used two- and three-year old lambics for macerating and blending, originating from two barrels and two brews. The weighted average age of the blends upon bottling is almost 24 months, and the final fruit proportion is 400 grams of plums used per litre of finished Pruim.',
    price: 45.99,
  },
]

export const AvailableMeals = () => {
  const beersList = BEERS.map((beer) => (
    <MealItem
      key={beer.id}
      id={beer.id}
      name={beer.name}
      description={beer.description}
      price={beer.price}
    >
      {beer.name}
    </MealItem>
  ))

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{beersList}</ul>
      </Card>
    </section>
  )
}
