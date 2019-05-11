import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it("has a greeting for UPC in the title", () => {
    const app = shallow(<App/>);

    const titleText = app.find("p#title").text();

    expect(titleText).toEqual("Hola UPC");
});
