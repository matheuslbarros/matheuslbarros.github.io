
const ProfileExperienceSection = (props) => (
  <section id="experience" className="profile-experience">
    <h2>Experience</h2>
    {props.experience.sort(sortPeriod).map((experience, key) => (
      <div key={key} className="profile-experience__item">
        <div className="profile-experience__row">
          <div className="profile-experience__image">
            <img className="profile-experience__company-logo" src={experience.company.logo} />
          </div>
          <div className="profile-experience__description">
            <div className="profile-experience__occupation-name">{experience.occupation.name}</div>
            <div className="profile-experience__company-name">{experience.company.name}</div>
          </div>
          <div className="profile-experience__time">
            <span>{months[experience.start_month]} {experience.start_year}</span>
            <span> - </span>
            {experience.is_current ? (<span>Present</span>) : (<span>{months[experience.end_month]} {experience.end_year}</span>)}
            <div>({countExperience(experience)})</div>
          </div>
        </div>
        <div className="profile-experience__row">
          <p className="profile-experience__bio">{experience.description}</p>
        </div>
      </div>
    ))}
  </section>
)

const months = ['', 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const sortPeriod = (a, b) => {
  return (b.start_year + b.start_month) - (a.start_year + a.start_month);
}

const countExperience = ({ start_month, start_year, end_month, end_year }) => {
  const date = new Date();
  const end_year_or_today = (end_year || date.getFullYear());
  const end_month_or_today = (end_month || (date.getMonth() + 1));

  let years = end_year_or_today - start_year;
  let months = end_month_or_today - start_month;

  if (start_month > end_month_or_today) {
    years = years - 1;
    months = (12 - start_month) + end_month_or_today;
  }

  return `${years ? (years + ' years ') : ''}${months ? (months + ' months') : ''}`;
}

export default ProfileExperienceSection
