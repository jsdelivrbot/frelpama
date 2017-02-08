import React, { Component } from 'react';
import {connect} from 'react-redux';
import PartHeader from './part_header';
import PartialList from './partial_list';
import SectionList from './section_list';

let id = 0;

class PartsList extends Component {
    renderParts() {

        return this.props.parts.map(function(part) {
            id++;
            return (
                <div key={id} className="part">
                    <PartHeader  part={part}/>
                    <SectionList sections={part.sections}/>
                    <PartialList  part={part}/>
                </div>
            )
        })
    }
    render() {
        return (
            <div>
                {this.renderParts()}
            </div>
        );
    }
}

function mapStateToProps({parts}) {
    return {
        parts: parts
    }
}

export default connect(mapStateToProps)(PartsList);
