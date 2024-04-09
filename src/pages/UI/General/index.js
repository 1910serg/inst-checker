import React from 'react';

import styles from './General.module.scss';
import stoneHedge from './stoneHedge.jpg';

export default function General() {
  return (
    <div>
      <h1>Inst-checker</h1>
      <div className={styles.test}>
        It's my first <b>real</b> project
      </div>
      <img src={stoneHedge} width={300} height={200} />
    </div>
  );
}
