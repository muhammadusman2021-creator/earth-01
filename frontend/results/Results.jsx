export default function Results({ result }) {
    return (
      <div>
        <h2>Simulation Result</h2>
  
        {result ? (
          <>
            <h3>{result.status}</h3>
            <p>
              Humanity Score: {result.score}/100
            </p>
            <p>
              Year: {result.year}
            </p>
          </>
        ) : (
          <p>No prediction available yet.</p>
        )}
      </div>
    );
  }