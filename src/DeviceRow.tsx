import React, { useState, useEffect } from 'react';
import mqttConnector from './lib/MQTTConnector';

const DeviceRow = ({ id }: { id: number }) => {
  const {
    name,
    location,
    speed,
    timestamp,
  } = useDevice(id);
  return(
    <React.Fragment>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{speed}</td>
        <td>{location}</td>
      </tr>
    </React.Fragment>
  )
}

interface Device {
  id: number;
  location: string;
  locked: boolean;
  name: string;
  power: 'on' | 'off';
  speed: number;
  timestamp?: Date;
}
const initialValues: Device = {
  id: 0,
  location: 'No Data',
  locked: false,
  name: 'No Data',
  power: 'off',
  speed: 0,
}

function useDevice(id: number): Device {
  const [device, setDevice] = useState(initialValues);
  const topic = `device/${id}/status`;
  useEffect(() => {
    mqttConnector.subscribe(topic);
    function handleMessage(messageTopic: string, message: Buffer) {
      console.log(message.toString());
      if (messageTopic === topic) {
        setDevice(JSON.parse(message.toString()));
      }
    }
    mqttConnector.on('message', handleMessage);
    return () => {
      mqttConnector.unsubscribe(topic);
      mqttConnector.removeListener('message', handleMessage);
    };
  }, [topic])
  return device;
}

export default DeviceRow;
