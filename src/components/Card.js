const titile = "Call Family";
const description = "is a term for someone living with depression on the inside while appearing perfectly happy or content on the outside"
const date = new Date();
const dateName = date.getDate();
const monthName= date.getMonth();
const currentYear = date.getFullYear();

function Card(props) {
  const{heading1, description} = props;
  return <div className='card'>
   
            <h3 className='heading1' >{heading1}</h3>
            <p className='description'>{description}</p>
            <p className='cardYear'>{dateName + "/" + monthName + "/" + currentYear}</p>
        </div>
}

export default Card;