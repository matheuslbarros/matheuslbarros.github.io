
const ProfileAboutSection = (props) => (
  <section id="about" className="profile-about animated slideInUp delay-1s">
    <h2>About</h2>
    <p className="profile-about__bio">{props.profile.bio}</p>
  </section>
)

export default ProfileAboutSection
