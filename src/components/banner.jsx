import './Banner.css';

export default function Banner() {
  return (
    <header 
      className="banner"
      style={{
        /* 1. Change 'cover' to 'contain' so the whole poster fits */
        backgroundSize: "contain", 
        /* 2. Prevent the image from repeating itself */
        backgroundRepeat: "no-repeat", 
        /* 3. Push the poster to the right side of the screen */
        backgroundPosition: "right top",
        /* 4. Add a dark background color to fill the empty space on the left */
        backgroundColor: "#111", 
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/en/0/0b/Toxic-_A_Fairy_Tale_for_Grown-Ups_poster.jpg")`,
      }}
    >
      <div className="banner__contents">
        {/* You can also update the title and description to match the movie! */}
        <h1 className="banner__title">Toxic: A Fairy Tale for Grown-Ups</h1>
        
        <div className="banner__buttons">
          <button className="banner__button">▶ Play</button>
          <button className="banner__button banner__button--secondary">ℹ More Info</button>
        </div>
        
        <h1 className="banner__description">
          An upcoming Indian Kannada-language action thriller film directed by Geetu Mohandas and starring Yash.
        </h1>
      </div>
      
      <div className="banner--fadeBottom" />
    </header>
  );
}