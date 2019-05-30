//define what we want our mocked moment to look like

const moment = require.requireActual('moment');


export default (timestamp = 0) =>{
  return moment(timestamp);
};