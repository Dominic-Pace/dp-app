import React from 'react'

import GithubIcon from '../../assets/icons/github.svg';
import LinkedInIcon from '../../assets/icons/linked-in.svg';
import ResumeIcon from '../../assets/icons/resume.svg';

import './styles.css'

const types = {
  githubFill: GithubIcon,
  linkedInFill: LinkedInIcon,
  resume: ResumeIcon,
};

const Icon = ({ onClick, size, style, to, type }) => {
  if (to) {
    return (
      <a
        href={to}
        target="_blank"
      >
        <img
          alt='type'
          onClick={onClick}
          src={types[type]}
          style={{
            ...{
              cursor: 'pointer',
            },
            ...style,
          }}
          width={size}
        />
      </a>
    )
  }
  return (
    <img
      alt='type'
      onClick={onClick}
      src={types[type]}
      style={style}
      width={size}
    />
  );
};

export default Icon;
