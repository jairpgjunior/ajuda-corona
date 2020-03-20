import React from 'react';
import './card1.css';


export default class Card1 extends React.Component {
  render() {
    return (
      <div className="pd-onhover-parent card1">
          { (this.props.state === "default") ?
              <div className="card1-default-3">
                  <div className="card1-0-0-0">
                      <div className="card1-r1">
                          <div className="card1-0-0-0-0-0" /> 
                          <div className="card1-0-0-0-0-1">
                              <div className="card1-0-0-0-0-1-0" /> 
                              <div className="card1-rectangle_4">
                                  <div className="card1-0-0-0-0-1-1-0">
                                      <div className="card1-0-0-0-0-1-1-0-0" /> 
                                      <img src={this.props.img_src} className="card1-image-6" /> 
                                      <div className="card1-0-0-0-0-1-1-0-2" /> 
                                  </div>
                                  <div className="card1-0-0-0-0-1-1-1">
                                      <div className="card1-0-0-0-0-1-1-1-0" /> 
                                      <div className="card1-fazer_compras_-9">
                                          { this.props.text }
                                      </div>
                                      <div className="card1-0-0-0-0-1-1-1-2" /> 
                                  </div>
                              </div>
                              <div className="card1-0-0-0-0-1-2" /> 
                          </div>
                          <div className="card1-0-0-0-0-2" /> 
                      </div>
                  </div>
              </div>
          : null}
          <div className="pd-onhover card1-_hover-8">
              <div className="card1-1-0">
                  <div className="card1-r19">
                      <div className="card1-1-0-0-0" /> 
                      <div className="card1-1-0-0-1">
                          <div className="card1-1-0-0-1-0" /> 
                          <div className="card1-rectangle_8">
                              <div className="card1-1-0-0-1-1-0">
                                  <div className="card1-1-0-0-1-1-0-0" /> 
                                  <img src={this.props.img_src} className="card1-image-8" /> 
                                  <div className="card1-1-0-0-1-1-0-2" /> 
                              </div>
                              <div className="card1-1-0-0-1-1-1">
                                  <div className="card1-1-0-0-1-1-1-0" /> 
                                  <div className="card1-fazer_compras_-3">
                                      { this.props.text }
                                  </div>
                                  <div className="card1-1-0-0-1-1-1-2" /> 
                              </div>
                          </div>
                          <div className="card1-1-0-0-1-2" /> 
                      </div>
                      <div className="card1-1-0-0-2" /> 
                  </div>
              </div>
          </div>
      </div>
    );
  }
};
