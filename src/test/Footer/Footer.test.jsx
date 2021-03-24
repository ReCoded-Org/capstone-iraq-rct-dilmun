import React from "react";
import renderer from "react-test-renderer";
import Footer from '../../components/Footer'
import {BrowserRouter as  Router} from 'react-router-dom'

it ("Footer renders correctly", () => {
  const tree = renderer.create(<Router> <Footer/> </Router>).toJSON();
  expect(tree).toMatchSnapshot();
});