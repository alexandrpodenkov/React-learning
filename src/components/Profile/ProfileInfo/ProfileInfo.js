import Avatar from "../../Avatar";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
          <img src="https://www.w3schools.com/css/img_5terre_wide.jpg" />
        </div>
            <div>
                <Avatar />
                <div className={s.descriptionblock}>
                    Description
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;