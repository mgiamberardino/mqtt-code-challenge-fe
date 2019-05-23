## IoT Full Stack Challenge

### Device Script

In order to run the device simulation script you need to have a mosquitto instance running and if it's different from `localhost` you need to set the `MQTT_HOST`env variable with the right host. To run the script use:
```
npm run start-devices
```

### React App

In order to run the React app jusr use:

```
npm start
```

## IoT: React app

Create a Web App that displays a list of vehicles with information updated real-time.
Vehicles have a tracking device that reports the following status data:

```ts
{
 id: number       // unique identifier, 0-based integer number
 name: string     // random string
 location: string // comma-separated coordinates as -34.573535,-58.447260
 speed: number    // in km/h
 power: 'on' | 'off'  // indicates engine power status
 locked: boolean      // indicates doors are locked
}
```

## Back-end

Setup a local broker using _mosquitto_. No authentication needed. Make sure clients can establish a connection using the MQTT client + Websockets.

Create a script that simulates 10 devices. Every device will be assigned a unique `id` and it will be used for MQTT topics. Eg: `device/{id}/{channel}`

After starting the script, the devices should start reporting random data every 5 seconds for fields `location` and `speed`. Publish to topic `device/{id}/status` with retained payload `{ id, name, location, speed, power, locked }`

Devices can also be controlled remotely, so they should subscribe to topic `device/{id}/cmd` and support the following commands:

- `POWER` - to power on/off the engine
- `LOCK` - to lock/unlock the doors

Commands toggle the last known status.

## Front-end

- Connect to the broker and subscribe to status topics for all devices. Eg: `device/1/status`.
- Display all the reported fields in a table-like layout.
- Update data in real-time.
- Add POWER and LOCK buttons so the user can control every vehicle.
- Highlight vehicles that are powered off

## You should stick to the following tech stack:

- Javascript (Typescript is considered a plus)
- Node.js
- React + JSX + Hooks

Any other language, technology, library, module, framework or persistence solution is _optional_.

Please share your code on Github with instructions on how to build and run the app. Deploy to Heroku if possible.
