import './App.css'
import { useFoodData } from "./hooks/useFoodData.ts";
import { Card } from "./components/card/card.tsx";
import { FormFood } from "./components/FormFood";


function App() {

  const { data } = useFoodData();

  return (
      <>
        <div className="container">
          <h1>Cardápio</h1>

          <div className="cardgrid">
            {data?.map(foodData => (
                <Card
                    key={foodData.id}
                    price={foodData.price}
                    title={foodData.title}
                    image={foodData.image}
                />
            ))}
          </div>
            <div className='button'>
              <FormFood/>
            </div>
        </div>
      </>
  )
}


export default App