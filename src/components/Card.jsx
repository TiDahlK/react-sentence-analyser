import "./Card.css"

function Card({ analysis }) {
  return (
    <div className="card">
      <div className="card-symbol">
        <h2>Analysis {analysis.emoji}</h2>
      </div>
      <div>
        <h3>Undertone:</h3>
        <p>{analysis.undertone}</p>
      </div>
      <div>
        <h3>Explanation:</h3>
        <p>{analysis.explanation}</p>
      </div>
    </div>
  );
}

export default Card;
