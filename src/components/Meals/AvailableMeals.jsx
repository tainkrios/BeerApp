import { useState, useEffect, useCallback } from 'react'
import { Card } from '../UI/Card'
import classes from './AvailableMeals.module.css'
import { MealItem } from './MealItem/MealItem'

export const AvailableMeals = () => {
  const [beers, setBeers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [httpError, setHttpError] = useState()

  const fetchBeersHandler = async () => {
    const response = await fetch(
      'https://react-http-c9f0c-default-rtdb.europe-west1.firebasedatabase.app/Beers.json'
    )

    if (!response.ok) {
      throw new Error('Something went wrong!')
    }

    const data = await response.json()

    const loadedBeers = []

    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        loadedBeers.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        })
      }
    }

    setBeers(loadedBeers)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchBeersHandler().catch((error) => {
      setIsLoading(false)
      setHttpError(error.message)
    })
  }, [])

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    )
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    )
  }

  const beersList = beers.map((beer) => (
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
