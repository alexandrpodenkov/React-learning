import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://tjzk.replicate.delivery/models_models_featured_image/504b1747-8c67-438b-b02f-a6ea9254589d/a_high_detail_shot_of_a_cat_we.png" />
            {props.message}
            <div>
                <span>Likes</span> {props.like}
            </div>
        </div>

    )
}

export default Post;