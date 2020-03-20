import React from 'react';
import './card2.css';


export default class Card2 extends React.Component {
  render() {
    return (
      <div className="pd-onhover-parent card2">
          <div className="pd-onhover card2-_hover-2">
              <div className="card2-0-0">
                  <div className="card2-r1">
                      <div className="card2-0-0-0-0">
                          <div className="card2-0-0-0-0-0" /> 
                          <img src={this.props.img_src} className="card2-image-9" /> 
                          <div className="card2-0-0-0-0-2" /> 
                      </div>
                      <div className="card2-0-0-0-1">
                          <div className="card2-0-0-0-1-0" /> 
                          <div className="card2-fazer_compras_-3">
                              { this.props.text }
                          </div>
                          <div className="card2-0-0-0-1-2" /> 
                      </div>
                      <div className="card2-0-0-0-2" /> 
                  </div>
              </div>
          </div>
          { (this.props.state === "default") ?
              <div className="card2-default-3">
                  <div className="card2-1-0-0">
                      <div className="card2-r19">
                          <div className="card2-1-0-0-0-0">
                              <div className="card2-1-0-0-0-0-0" /> 
                              <img src={this.props.img_src} className="card2-image-2" /> 
                              <div className="card2-1-0-0-0-0-2" /> 
                          </div>
                          <div className="card2-1-0-0-0-1">
                              <div className="card2-1-0-0-0-1-0" /> 
                              <div className="card2-fazer_compras_-6">
                                  { this.props.text }
                              </div>
                              <div className="card2-1-0-0-0-1-2" /> 
                          </div>
                          <div className="card2-1-0-0-0-2" /> 
                      </div>
                  </div>
              </div>
          : null}
      </div>
    );
  }
};
