export default function Slides() {
    const slides = [
      "Welcome to Earth-01",
      "Make decisions for humanity",
      "Observe future predictions",
      "Save Earth before 2100",
    ];
  
    return (
      <div>
        <h2>Earth-01 Journey</h2>
  
        {slides.map((slide, index) => (
          <p key={index}>
            {slide}
          </p>
        ))}
      </div>
    );
  }