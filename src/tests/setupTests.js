import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter:new Adapter()
});

//this is adding support for enzyme for v16 of react.