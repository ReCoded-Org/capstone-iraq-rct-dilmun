import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter as  Router} from 'react-router-dom'
import LandingPageCard from '../../components/LandingPageCard';

it ("Footer renders correctly", () => {
  const tree = renderer.create(<Router> <LandingPageCard /> </Router>).toJSON();
  expect(tree).toMatchSnapshot();
});