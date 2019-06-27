//react-test-renderer allows us to render our components inside our regular javascript code. then we can assert something of what got rendered.
import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import {Header} from '../../components/Header';
//shallow rendering only renders given component.


test('should render header correctly',()=>{
  const wrapper = shallow(<Header startLogout={()=>{}}/>);
  expect(wrapper).toMatchSnapshot();
  //expect(wrapper.find('h1').text()).toBe('Expensify');
 //h1 in the find method is the selector
/**const renderer = new ReactShallowRenderer();
  renderer.render(<Header />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
  console.log(renderer.getRenderOutput());
*/
});

test('should call startLogout on button click',()=>{
  const startLogout=jest.fn();
  const wrapper=shallow(<Header startLogout={startLogout}/>);
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});

