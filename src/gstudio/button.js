import React from 'react';
import './button.css';


export default class Button extends React.Component {
  render() {
    return (
      <div className="pd-onhover-parent button">
          <div className="pd-onhover button-_hover-6">
              <div className="button-0-0">
                  <div className="button-rectangle-9">
                      <div className="button-0-0-0-0">
                          <img src="https://gstudio-hosting.s3.amazonaws.com/GV97G9GJUsMuU7ZCeDdWa2HfiCG3/undefined/ff25671d-806b-4001-b517-f0fd8522b7f1/mdi_map.png" className="button-image_3" /> 
                          <div className="button-0-0-0-0-1">
                              <div className="button-0-0-0-0-1-0">
                                  <div className="button-ver_mapa_-7">Ver Mapa</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          { (this.props.state === "default") ?
              <div className="button-default-6">
                  <div className="button-1-0-0">
                      <div className="button-rectangle-4">
                          <div className="button-1-0-0-0-0">
                              <img src="https://gstudio-hosting.s3.amazonaws.com/GV97G9GJUsMuU7ZCeDdWa2HfiCG3/undefined/ff25671d-806b-4001-b517-f0fd8522b7f1/mdi_map.png" className="button-image_3-2" /> 
                              <div className="button-1-0-0-0-0-1">
                                  <div className="button-1-0-0-0-0-1-0">
                                      <div className="button-ver_mapa_-1">Ver Mapa</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          : null}
      </div>
    );
  }
};
