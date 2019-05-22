import React, {Component} from "react";

class BidDetails extends Component {
    render(){
        return (
            <div>
              <p>
                <small>${this.props.value}</small>
                <br />
                <small> on {this.props.createdAt} </small>
              </p>
            </div>
          );
    };
};

// function BidDetails(props) {
//   return (
//     <div>
//       <p>
//         <small>${props.bid_value}</small>
//         <br />
//         <small> on {props.created_at}</small>
//       </p>
//     </div>
//   );
// }

export default BidDetails;

// export { BidDetails };
