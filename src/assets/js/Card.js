import '../css/card.css';

const Card = (props) => {
    const classes = 'card ' + props.className; // must place a white space after the css class, 
                                               // this is to append the second className to the css class

    return (
        <div className={classes}> {props.children} </div>
    )

}
export default Card;
