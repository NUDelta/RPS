import React from 'react';
import styles from '../styles/Snapshot.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

class Section extends React.Component {
	constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id={"heading"+this.props.sectionData.section_number}>
                <h4 className="panel-title">
                  <a role="button" data-toggle="collapse" data-parent="#accordion" href={"#collapse"+this.props.sectionData.section_number} aria-expanded="true" aria-controls="collapseOne">
                    {this.props.sectionData.section_title}
                  </a>
                </h4>
              </div>
              <div id={"collapse"+this.props.sectionData.section_number} className="panel-collapse collapse in" role="tabpanel" aria-labelledby={"heading"+this.props.sectionData.section_number}>
                <div className="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
        );
    }
}

export default Section;