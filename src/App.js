import styles from './App.module.css'
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Origamies from './components/Origamies/Origamies';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Aside />
        <Origamies />
      </div>
      <Footer />
    </div>
  );
}

export default App;
