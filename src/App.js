import styles from './App.module.css'
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Origamies from './components/Origamies/Origamies';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Aside />
        <Origamies />
      </div>
    </div>
  );
}

export default App;
