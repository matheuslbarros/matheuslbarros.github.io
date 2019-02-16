
const ProfileUser = (props) => (
  <div className="profile-user">
    <div className="profile-user__picture">
      <img className="profile-user__avatar animated jackInTheBox delay-1s" src={props.user.avatar} />
    </div>
    <h1 className="profile-user__fullname animated swing delay-1s slow">{props.user.first_name} {props.user.last_name}</h1>
    <div className="profile-user__headline">{props.user.headline}</div>
    <div className="profile-user__from">{props.user.location.standardized}</div>
  </div>
)

export default ProfileUser
