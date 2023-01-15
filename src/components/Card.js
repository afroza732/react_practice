
const date  = new Date();
const fullDate = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
export default function Card(props){
    const {titleText,titleDesc} = props;
    return  <div className='card'>
            <h2 className='card-title'>{titleText}</h2>
            <p className='card-desc'>{titleDesc}</p>
            <p className='card-date'>{fullDate}</p>
          </div>
}
