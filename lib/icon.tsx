import React from 'react';
import './importIcons'
import './icon.scss'
import classes from './helpers/classes';
interface IconProps extends React.SVGAttributes<SVGSVGElement>{
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  const {className, ...restProps} = props
  return (
    <span>
      <svg className={classes('icon',className)}
      {...restProps}
      >
        <use xlinkHref={`#${props.name}`}/>
      </svg>
    </span>
  );
};

export default Icon;
