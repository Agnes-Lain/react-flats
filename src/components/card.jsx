import React from 'react';

class Card extends React.Component {
  handelClick = () => {
    this.props.selectFlat(this.props.index);
  }

  render () {
    return (
      <div
        className={`card${this.props.selected ? ' active' : '' }`}
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.bg})`}}>
        <div className="card-category">{this.props.price} {this.props.currency}</div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handelClick} />
      </div>
    );
  }
}

export default Card;
