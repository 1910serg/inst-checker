import React, { useState } from 'react';

import styles from './index.scss';
import stoneHedge from './stoneHedge.jpg';

export default function General() {
  const [name, setName] = useState('Клик на меня');

  const onClick = () => {
    console.log('click');
    setName('Курва бобэр!');
  };

  return (
    <div>
      <h1>Inst-checker</h1>
      <div className={styles.test}>
        It's my first <b>real</b> project
      </div>
      <img src={stoneHedge} width={300} height={200} />
      <button onClick={onClick}>{name}</button>
    </div>
  );
}
