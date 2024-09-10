import './CoreConcept.css'

export default function CoreConcept({image,title,description, count}){
    return <li>
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{count}</p>
  
    </li>
  }