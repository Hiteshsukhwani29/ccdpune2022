import React from 'react'
import twitterIcon from '../../../Images/icons-twitter.svg'
import githubIcon from '../../../Images/icons-github.svg'
import linkedinIcon from '../../../Images/icons-linkedin.svg'
import facebookIcon from '../../../Images/icons-facebook.svg'
import sessionizeIcon from '../../../Images/icons-sessonize.svg'
import blogIcon from '../../../Images/icons-blog.svg'

interface IProps {
  twitterLink?: string
  githubLink?: string
  linkedinLink?: string
  facebookLink?: string
  links?: string[]
  className?: string
}
export const Socials = ({
  twitterLink = '',
  githubLink = '',
  linkedinLink = '',
  facebookLink = '',
  className = '',
  links = []
}: IProps) => {
  const getAptLinkComponent = (link: any) => {
    switch (link.title) {
      case 'Twitter':
        return <img src={twitterIcon} alt="twitter" />
      case 'LinkedIn':
        return <img src={linkedinIcon} alt="linkedin" />
      case 'Facebook':
        return <img src={facebookIcon} alt="facebook" />
      case 'Github':
        return <img src={githubIcon} alt="github" />
      case 'Sessionize':
        return <img src={sessionizeIcon} alt="sessionize" />
      case 'Blog':
        return <img src={blogIcon} alt="sessionize" />
      default:
        return (
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="#4285F4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 12C8 17.5228 9.79086 22 12 22C14.2091 22 16 17.5228 16 12C16 6.47715 14.2091 2 12 2C9.79086 2 8 6.47715 8 12Z"
              stroke="#4285F4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2 12H22"
              stroke="#4285F4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )
    }
  }

  return (
    <div className={`flex items-center flex-row gap-3 py-2 ${className}`}>
      {links.length > 0 ? (
        links.map((link: any) => {
          return (
            <a
              href={link.url}
              key={link.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              {getAptLinkComponent(link)}
            </a>
          )
        })
      ) : (
        <React.Fragment>
          <a href={twitterLink}>
            <img src={twitterIcon} alt="twitter" />
          </a>
          <a href={githubLink}>
            <img src={githubIcon} alt="github" />
          </a>
          <a href={linkedinLink}>
            <img src={linkedinIcon} alt="linkedin" />
          </a>
          <a href={facebookLink}>
            <img src={facebookIcon} alt="facebook" />
          </a>
        </React.Fragment>
      )}
    </div>
  )
}

export default Socials
