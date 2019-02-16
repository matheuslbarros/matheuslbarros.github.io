
const ProfileEducationSection = (props) => (
  <section id="education" className="profile-education">
    <h2>Education</h2>
    <div className="profile-education__list">
      {props.education.sort(sortPeriod).map((education, key) => (
        <div key={key} className="profile-education__item">
          <div className="profile-education__image">
            <img className="profile-education__school-img" src={education.school.logo} />
          </div>
          <div className="profile-education__description">
            <div className="profile-education__school-name">{education.school.name}</div>
            <div className="profile-education__field-of-study">{education.field_of_study.name}</div>
          </div>
          <div className="profile-education__time">
            <span>{months[education.start_month]} {education.start_year}</span>
            <span> - </span>
            {education.is_current ? (<span>Present</span>) :
              (<span>{months[education.end_month]} {education.end_year}</span>)
            }
          </div>
        </div>
      ))}
    </div>
  </section>
)

const months = ['', 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const sortPeriod = (a, b) => {
  return (b.start_year + b.start_month) - (a.start_year + a.start_month);
}

export default ProfileEducationSection
