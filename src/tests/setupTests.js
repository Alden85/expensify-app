import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter:new Adapter()
});

require('dotenv').config({path:'.env.test'});

//this is adding support for enzyme for v16 of react.