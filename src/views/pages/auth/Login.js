import React from "react"
import {
  Button,
  Card,
  Row,
  Col,
  FormGroup,
  Label
} from "reactstrap"
import { history } from "../../../history"
import {connect} from "react-redux"
import { Link } from "react-router-dom"

import {login} from "../../../redux/actions/auth/loginActions"





class Login extends React.Component {
  state = {
    email : "",
    password: ""
  }
  componentDidMount(){
    if(this.props.isAuthenticated){
      history.push("/")
    }
  }
  handleSubmit=()=>{
      this.props.login(this.state)
  }

  render() {
    return (
        <>
  <Row className="m-0 justify-content-center">
        <Col
          sm="8"
          xl="4"
          lg="10"
          md="8"
          className="d-flex justify-content-center"
        >
          <Card className="bg-authentication mt-5 login-card rounded-0 mb-0 w-100">
            <Row className="m-0">
              <Col lg="12" md="12" className="p-3">
                
                        <h4 className="text-dark">Login</h4>
                    
                              
                                <FormGroup className="form-label-group position-relative has-icon-left">
                                <Label>Email</Label>
                                <input
                                    className={"form-control"}
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={e => this.setState({ email: e.target.value })}
                                  />
                            
                            
                                </FormGroup>
                                <FormGroup className="form-label-group position-relative has-icon-left">
                                <Label>Password</Label>
                                  <input
                                    className={"form-control"}
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={e => this.setState({ password: e.target.value })}
                                  />
                                </FormGroup>
                                <FormGroup className="d-flex justify-content-between align-items-center">
                                  {/* <Checkbox
                                    color="primary"
                                    icon={<Check className="vx-icon" size={16} />}
                                    label="Remember me"
                                  /> */}
                                  {/* <div className="float-right">
                                    <Link to="/forgot-password">Forgot Password?</Link>
                                  </div> */}
                                </FormGroup>
                                <div className="d-flex justify-content-between">
                                  <Button color="light" type="submit" onClick={this.handleSubmit}>
                                       Login                               </Button>

                                      <Link to="/register">Register</Link>
                                </div>

                              
                        
                    
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
   
        </>
    
   
   )
  }
}
const mapStateToProps =state=>{
    return {
        isAuthenticated:state.auth.login.isAuthenticated,
    }
}
export default connect(mapStateToProps,{login})(Login)