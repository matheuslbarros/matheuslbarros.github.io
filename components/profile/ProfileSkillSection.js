
const levels = ['Beginner', 'Intermediate', 'Experienced', 'Expert']

const ProfileSkillSection = (props) => (
  <section id="skills" className="profile-skill">
    <h2>Skills</h2>
    <div className="profile-skill__row">
      {props.skills.map((skill, key) => (
        <div key={key} className="profile-skill__item">
          <div className="profile-skill__level">
            <div className="profile-skill__percent" style={{ width: (skill.level * 100 / 3) + '%' }}></div>
          </div>
          <div className="profile-skill__description">
            <div>{skill.name}</div>
            <div>{levels[skill.level]}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default ProfileSkillSection
