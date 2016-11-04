import Ember from 'ember';

const { Component } = Ember;

const styles = {
  avatar: `
    width: 32px;
    border: 1px solid gray;
  `,
  imageContainer: `
    display: inline-block;
    vertical-align: top;
    width: 32px;
  `,
  contentContainer: `
    display: inline-block;
    margin-left: 8px;
    max-width: 85%;
  `,
  title: `
    line-height: 32px;
    display: inline-block;
  `,
  text: `
    margin-bottom: 5px;
  `,
  timestamp: `
    display: inline-block;
    margin-left: 8px;
    color: #999;
    font-size: 14px;
  `
};

export default Component.extend({
  tagName: '',

  styles
});
