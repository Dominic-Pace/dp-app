import React, { useState } from 'react';
import { withTheme } from 'styled-components';

import {
  GithubIcon,
  LinkedInIcon,
  ResumeIcon,
} from './vectors';

import { Link } from './styles';

const icons = color => ({
  github: <GithubIcon color={color} />,
  linkedIn: <LinkedInIcon color={color} />,
  resume: <ResumeIcon color={color} />,
});

const viewBoxes = {
  github: '0 0 50 50',
  linkedIn: '0 0 50 50',
  resume: '0 0 50 65',
};

export const Icon = ({ color, height, name, theme, to, width }) => {
  const [hoverColor, setHoverColor] = useState(color);

  if (to) {
    return (
      <Link
        href={to}
        onMouseEnter={() => setHoverColor(theme.colors.quaternary)}
        onMouseLeave={() => setHoverColor(color)}
        target="_blank"
      >
        <svg height={height} viewBox={viewBoxes[name]} width={width}>
          {icons(hoverColor)[name]}
        </svg>
      </Link>
    )
  }
  return (
    <svg height={height} viewBox={viewBoxes[name]} width={width}>
      {icons(color)[name]}
    </svg>
  );
};

Icon.defaultProps = {
  color: '#949494',
};

export default withTheme(Icon);
