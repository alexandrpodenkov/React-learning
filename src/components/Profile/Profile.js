import s from './Profile.module.css';
import Avatar from "../Avatar"
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts posts={props.state.posts}/>
    </div>
  )
}

export default Profile;