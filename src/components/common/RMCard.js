import React from 'react';
import {Button} from "antd";

const RmCard = ({title, icon, count, sign}) => {
  return (
    <div style={{backgroundColor: '#ffffff', padding: '10px 20px'}}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <p>{title}</p>
        </div>
        <div>
          <Button style={{color: 'skyblue', borderRadius: '2px', border: 'none', backgroundColor: '#F0F2F5'}}>{icon}
            <span
              style={{marginLeft: '3px'}}></span></Button>
        </div>
      </div>
      <h2 style={{marginTop: '5px'}}>{sign} {count}</h2>
    </div>
  );
};

export default RmCard;