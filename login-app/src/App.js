import { useState } from 'react';
import './App.css';
import { Card } from './components/Card';
import { AdminFlagContext } from './components/providers/AdminFlagProvider';

function App() {

  const [isAdmin, setIsAdmin] = useState(AdminFlagContext);
  console.log(isAdmin);

  const onClickSwitch = () => {
    setIsAdmin(!isAdmin);
  }

  return (
    <>
    {isAdmin ? <span>管理者です</span> : <span>管理者ではないです</span>}
    <button onClick={onClickSwitch}>切り替え</button>
    <Card />
    </>
  );
}

export default App;
