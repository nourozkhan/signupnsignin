import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
//import Action from '../store/actions/action';
import Middleware from '../store/middleware/middleware'
import { browserHistory } from 'react-router';
import * as firebase from 'firebase';

function mapStateToProps(state) {
    return {
        data: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
            signOut:(obj) =>dispatch(Middleware.signOut(obj))
        }
    };

class Home extends React.Component {
    //     setTimeout(() => {
    //           firebase.auth().onAuthStateChanged((user) => {

    //         if (user) {
    //            console.log("user is authenticate")
    //         } else {
    //             browserHistory.push('/');
    //         }
    //         console.log("is logged in", this.props.isLogged);
    //     });
    // }, 5);
    // }
    
      componentWillMount() {
    
              firebase.auth().onAuthStateChanged((user) => {

            if (user) {
               console.log("user is authenticate")
            } else {
                browserHistory.push('/');
            }
        });
      }

    signOut(){
        this.props.signOut()
    }

    render() {
        const sty = {
            margin: 12,
        };
        return (
            <div>
                <p>this is Home page</p>
        
                    <RaisedButton onClick={this.signOut.bind(this)} label="Sign out" primary={true} style={sty} />
                
            </div>
        );
    }
}

//export default Home;
export default connect(mapStateToProps,mapDispatchToProps)(Home);