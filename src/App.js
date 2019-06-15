import React, {Component} from 'react';
import CommentsList from "./components/CommentsList";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <CommentsList/>
    );
  }
}