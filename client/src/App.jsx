import { Container } from 'react-bootstrap';
import { Route } from 'react-router-dom';

import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Route exact path='/' component={HomePage} />
          <Route path='/product/:id' component={ProductPage} />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
