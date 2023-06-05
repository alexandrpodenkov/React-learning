import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'
import Avatar from '../../Avatar';

const DialogItem = (props) => {
    let path = 'dialogs' + props.id;
    
    return (
    <div className={s.dialog}>
            <img src={props.avatar}/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
        }



export default DialogItem;