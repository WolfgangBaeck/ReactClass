import './Card.css';

// This is an alternate way of defining any javascript function 
const Card = (props) => {
    const classes = 'card ' + props.className;

    return <div className={classes}>{props.children}</div>;

}

export default Card;