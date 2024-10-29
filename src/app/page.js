import Image from "next/image";
import styles from "./page.module.css";
import Gallery from "./Gallery.js"
import Prof from "./Profile.js"
import Profile2 from "./Profile2.js"
export default function Home() {
  return (
  <>
    <h1>Ejercicio 1</h1>
    <Gallery />
    <br />
    <br />
    <br />
    <br />
    <h1>Ejercicio 2</h1>
    <Prof />
    <br />
    <br />
    <br />
    <br />
    <h1>Ejercicio 3</h1>
    <Profile2 />
  </>
  );
}
