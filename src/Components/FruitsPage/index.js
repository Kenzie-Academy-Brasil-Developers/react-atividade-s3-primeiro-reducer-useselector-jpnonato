//importando useSelector do react-redux
import { useSelector } from "react-redux";
import banana from '../../img/banana.jpg'
import apple from '../../img/apple.jpg'
import morango from '../../img/morango.jpg'


const FruitsPage = () => {
	//acessando o estado global e pegando o state fruits
  const fruits = useSelector((state) => state.fruits);

  return (
    <div className="container">
      {fruits.map((fruit,index) => (
        <div>
          {
            fruit.name === 'Banana' ? <img  src={banana}/> :
            fruit.name === 'Maçã' ? <img  src={apple}/> :
            fruit.name === 'Morango' ? <img  src={morango}/> : <></>
          }
          
          <p key={index}> {fruit.name} </p>
        </div>
      ))}
    </div>
  );
}

export default FruitsPage;