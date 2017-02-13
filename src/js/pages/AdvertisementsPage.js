import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import AdList from '../components/AdvertisementList';
import '../../css/styles.css';

export default class AdvertisementsPage extends Component {
  constructor(){
    super();
    this.state = {
      ads: [
        {
          'key': '1',
          'title': 'Literature for UNO class',
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
          'categories': [
            {'key': '1', 'name': 'Books'},
            {'key': '2', 'name': 'Notes'},
          ],
          'owner': 'Stefan',
          'time_published': 'April 01, 2016',
          'trade_item': 'Math II',
        },
        {
          'key': '2',
          'title': 'Outdoor clothes',
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
          'categories': [
            {'key': '1', 'name': 'Outdoor'},
          ],
          'owner': 'Parker',
          'time_published': 'September 23, 2014',
          'price': '$ 150.00',
        },
        {
          'key': '3',
          'title': 'Different kinds of tools',
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
          'categories': [
            {'key': '1', 'name': 'Tools'},
          ],
          'owner': 'Rachel',
          'time_published': 'January 31, 2017',
          'price': '$ 375.95',
        },
        {
          'key': '4',
          'title': 'Different kinds of tools',
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
          'categories': [
            {'key': '1', 'name': 'Tools'},
          ],
          'owner': 'Rachel',
          'time_published': 'January 31, 2017',
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <h1 className="uk-heading-divider uk-text-center">UNO-Shareboard</h1>
          <NavBar />
        </div>
        <div className="app-body uk-container">
            <AdList advertisements={this.state.ads}/>
        </div>
      </div>
    );
  }
}
