/**
 * Created by deniztetik on 4/23/17.
 */
import Clarifai from 'clarifai';
import config from './config';

const app = new Clarifai.App(
  '{clientId}',
  '{clientSecret}'
);