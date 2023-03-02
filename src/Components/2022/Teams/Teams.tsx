import Title from '../Title/Title'
import teamData from './teamData.json'
import {Socials} from '../Socials/Socials'

const Teams = () => {
  const imageBorderStyle = {
    backgroundImage: `url("https://www.linkpicture.com/q/favicon-1.svg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    margin: '0.8rem',
  }
  return (
    <>
      <Title heading="Teams" />
      <div className="grid sm:grid-cols-1 md:grid-cols-3 grid-flow-row place-items-center p-5">
        {teamData.map((team, id) => (
          <div
            key={id}
            className="flex md:w-3/5 sm:w-100 flex-col bg-lightPurple bg-opacity-25 rounded-2xl items-center mb-4"
          >
            <div style={imageBorderStyle}>
              <img
                src={team.image}
                alt="profile"
                className="rounded-full m-3 w-48 h-48 "
              />
            </div>
            <h3 className="text-xl font-bold">{team.name}</h3>
            <p className="text-sm text-lightGrey w-56 text-center py-4">
              {team.description}
            </p>
            <Socials
              twitterLink={team.twitterLink}
              githubLink={team.githubLink}
              linkedinLink={team.linkedinLink}
              facebookLink={team.facebookLink}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default Teams
