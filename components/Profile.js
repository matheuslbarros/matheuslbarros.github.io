
import ProfileUser from '../components/profile/ProfileUser'
import ProfileNavigation from '../components/profile/ProfileNavigation'
import ProfileAboutSection from '../components/profile/ProfileAboutSection'
import ProfileExperienceSection from '../components/profile/ProfileExperienceSection'
import ProfileEducationSection from '../components/profile/ProfileEducationSection'
import ProfileSkillSection from '../components/profile/ProfileSkillSection'

const Profile = (props) => (
  <div className="profile animated fadeInUp">
    <header id="header" className="profile__header">
      <ProfileUser user={props.user} />
      <ProfileNavigation />
    </header>
    <main className="profile__container">
      <div className="profile__content">
        <ProfileAboutSection profile={props.profile} />
        <ProfileExperienceSection experience={props.profile.experience} />
        <ProfileEducationSection education={props.profile.education} />
        <ProfileSkillSection skills={props.profile.skills} />
      </div>
    </main>
    <footer className="profile__footer">
      <a href="#header">^</a>
    </footer>
  </div>
)

export default Profile
