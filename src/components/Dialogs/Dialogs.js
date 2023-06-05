import { NavLink } from 'react-router-dom'
import DialogItem from './DialogItem/Dialog';
import Message from './Message/Message';
import s from './Dialogs.module.css'      
import Avatar from '../Avatar';

const Dialogs = (props) => {
   

    const dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);
    const messagesElements = props.state.messages.map(m => <Message id={m.id} message={m.message}/>);



    return (
                
            <div className={s.dialogs}>
            
                <div className={s.dialogsItems}>
                  <img src={props.state.avatar}/>      
                   {dialogsElements}
                   
                </div>
                 <div className={s.messages}>
                   {messagesElements}
                  
                 </div>   
            </div>
    )
}

export default Dialogs;