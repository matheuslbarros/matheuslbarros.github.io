import Head from 'next/head'
import Profile from '../components/Profile'
import fetch from 'isomorphic-unfetch'

import '../assets/scss/resume.scss';

const Resume = (props) => (
  <div>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>Resume - {props.user.first_name} {props.user.last_name} - {props.user.headline}</title>
    </Head>
    <Profile user={props.user} profile={props.profile} />
  </div>
)

const fetchJson = async (url) => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

Resume.getInitialProps = async ({ req }) => {
  const props = {}

  try {
    props.user = await fetchJson('https://matheuslbarros.github.io/assets/json/user.json')
    props.profile = await fetchJson('https://matheuslbarros.github.io/assets/json/profile.json')
  } catch (e) {
    console.error(e)
  }

  return props
}

export default Resume
