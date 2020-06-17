import React from "react"
import Layout from '../components/Layout'
import HomeSlider from "../components/HomeSlider"
import PopularCategories from "../components/PopularCategories"

export default function Home() {
  return <Layout>
    <HomeSlider />
    <PopularCategories />
  </Layout>
}
