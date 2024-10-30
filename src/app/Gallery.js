import { getImageUrl } from './utils.js';
const curie = {
  url:'szV5sdG',
  name: "Maria Skłodowska-Curie",
  profesion: {
    name: "física y química",
    premios: [
      "Premio Nobel de Física",
      "Premio Nobel de Química",
      "Medalla Davy",
      "Medalla Matteucci"
    ],
    descubrimientos: "polonio (elemento químico)"
  }
}
const katsuko = {
  url:'YfeOqp2',
  name: "Katsuko Saruhashi",
  profesion: {
    name: "geoquímica",
    premios: [
      "Premio Miyake de geoquímica",
      " Premio Tanaka"
    ],
    descubrimientos: "un método para medir el dióxido de carbono en el agua de mar"
  }
}

function Profile({persona}) {
  return (
    <section className="profile">
      <h2>{persona.name}</h2>
      <img
        className="avatar"
        src={getImageUrl(persona.url)}
        alt={persona.name}
        width={70}
        height={70}
      />
      <Work profesion = {persona.profesion} />
    </section>
  )

}
function Work({profesion}) {
  return (
    <ul>
      <li>
        <b>Profesión: </b> 
        {profesion.name}
      </li>
      <li>
        <b>Premios: {profesion.premios.length} </b>
        ({profesion.premios.join(", ")})
      </li>
      <li>
        <b>Descubrió: </b>
        {profesion.descubrimientos}
      </li>
    </ul>
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Científicos Notables</h1>
      <Profile persona = {curie} />
      <Profile persona = {katsuko} />
    </div>
  );
}