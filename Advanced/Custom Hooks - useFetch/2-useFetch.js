import { useState, useEffect } from 'react';

// custom hook must have 'use'Fetch bcs it is not allowed to use hooks in a regular function

export const useFetch = (url) => {
const [loading, setLoading] = useState(true)
const [products, setProducts] = useState([])

const getProducts = async () => {
  const response = await fetch(url)
  const products = await response.json()
  setProducts(products)
  setLoading(false)
}

useEffect(() => {
  getProducts()
}, [url])
return (
    {loading, products}
)
}