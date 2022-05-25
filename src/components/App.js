import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import '../style/App.css'
import { Cards } from './Cards';
import { Favorites } from './Favorites';

function App() {
  const [cat, setCat] = useState()

  const url = 'https://api.thecatapi.com/v1/images/search'
  const getData = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    setCat(data[0])
    return data
  }
  console.log(cat)


  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="App">
      <Cards catData={cat}/>
      <Button variant="primary" className='m-auto d-flex' onClick={()=> getData()}>Next</Button>
      <hr></hr>
      <Favorites />
    </div>
  );
}

export default App;
