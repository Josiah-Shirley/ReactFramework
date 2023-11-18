"use client"
import CountButton from "./CountButton"
import Store from "./Store"

export default function Page() {
  return <div>
    <CountButton name="Josiah" incriment="1"/>
    <CountButton name="Colette" incriment="2"/>
    <hr />
    <a href="https://github.com/Josiah-Shirley/ReactFramework">my GitHub</a>
    <hr />
    <p>Search Bar</p>
    <Store />

  </div>
}