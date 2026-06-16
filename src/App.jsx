
import Navbar from './components/navbar';
import Banner from './components/banner';
import Row from './components/row';
import { categories } from './mockdata';
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      
      {/* Map through our mock data to create the rows */}
      <div style={{ marginTop: "-50px", position: "relative", zIndex: 5 }}>
        {categories.map((category, index) => (
          <Row 
            key={index} 
            title={category.title} 
            movies={category.movies} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;