'use strict';

module.exports = {
  presets: [
    require( 'babel-preset-es2015' )
  ],
  plugins: [
    require( 'babel-plugin-transform-exponentiation-operator' ),
    require( 'babel-plugin-transform-object-assign' )
  ]
};
