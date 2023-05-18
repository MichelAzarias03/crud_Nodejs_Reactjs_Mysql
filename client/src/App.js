import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
         <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            Accceuil
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
              Dossiers
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Ajouter
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<TutorialsList/>} />
            <Route path="/tutorials" element={<TutorialsList/>} />
            <Route path="/add" element={<AddTutorial/>} />
            <Route path="/tutorials/:id" element={<Tutorial/>} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
