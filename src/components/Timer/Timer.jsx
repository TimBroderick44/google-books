import React, { useContext } from 'react';
import { DelayContext } from '../../context/DelayContext.jsx';  
import style from './Timer.module.scss';

const Timer = () => {
  const { toggleDelay } = useContext(DelayContext);

  const handleChange = (event) => {
    toggleDelay(event.target.checked);
  };

  return (
    <div className={style.timer}>
      <label>
        <input type="checkbox" onChange={handleChange} />
        Add a 5-second delay to the API call
      </label>
    </div>
  );
};

export default Timer