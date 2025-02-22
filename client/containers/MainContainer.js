/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders 
 *
 * ************************************
 */

 import React, {Component} from "react";
 import SearchBar from '/client/components/songSearchBar.js'
 import { connect } from 'react-redux';
 import * as actions from '../actions/actions.js';
 import AllReviews from '/client/containers/AllReviewsContainer.js'
 
const mapStateToProps = state => ({
    reviews : state.review.queriedReviews
});


const mapDispatchToProps = dispatch => ({
    queryReviews : (params) => dispatch(actions.queryReviewsActionDispatch(params))
   });

class MainContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
          <div>
             <SearchBar
             queryReviews = {this.props.queryReviews}
             state = {this.props.reviews}
             ></SearchBar>
             <AllReviews></AllReviews>
          </div>
        );
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
