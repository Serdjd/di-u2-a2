function Card({children}) {
  return (
    <div className="card">
      <div className="card-content">
      {children}
      </div>
    </div>
  )
}

export default function Profile2() {
    return (
      <div>
        <Card>
          <h1>Foto</h1>
          <img
            className="avatar"
            src="https://i.imgur.com/OKS67lhm.jpg"
            alt="Aklilu Lemma"
            width={70}
            height={70}
          />
        </Card>
        <Card>
          <h1>Información</h1>
          <p>Aklilu Lemma fue un destacado científico etíope que descubrió un tratamiento natural para la esquistosomiasis.</p>
        </Card>
      </div>
    );
  }
  