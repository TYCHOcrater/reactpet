import React from 'react';
import List from './components/List';
import listSvg from "/CODING/webshit/todo/todo/src/assets/img/list.svg";

function App() {
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <List 
        items={[
          {
            icon: <img src={listSvg} alt="List icon" />,
            name: 'Все Задачи',
            
          },
        ]} 
        />
        <List
          items={[
          {
            color: "green",
            name: "Покупки",
            active: true
          },
          {
            color: "blue",
            name: "Фронтенд"
          },
          {
            color: "pink",
            name: "Игры"
          }
          ]}
        />
      </div>
      <div className="todo__tasks">

      </div>     
    </div>
  );
}

export default App;
