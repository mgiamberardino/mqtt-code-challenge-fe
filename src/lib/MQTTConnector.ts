import { connect } from 'mqtt';

const MQTT_HOST = 'ws://localhost:1884';

export default connect(MQTT_HOST);