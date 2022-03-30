import avatar from "./../../../media/avatar.jpg";
import "./Avatar.css";

const Avatar = ({ media, rounded }) => {
	return (
		<img
			src={media ? media : avatar}
			alt="user avatar"
			className={!!rounded && "rounded"}
		/>
	);
};

export default Avatar;
