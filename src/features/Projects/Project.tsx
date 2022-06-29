import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* interface Props extends RouteComponentProps<
  { myParamProp?: string }, // this.props.match.params.myParamProp
  any, // history
  { myStateProp?: string }, // this.props.location.state.myStateProp
> {
  myNormalProp: boolean;
} */

interface StateType {
  data: {
    id: number;
    slug: string;
    name: string;
    description: string;
    thumbnail: string;
    link: string;
    github: string;
    school: any;
    functionalities: string[];
    language: { name: string }[];
  };
}

const Project = () => {
  const location = useLocation();
  const { data } = location.state as StateType;

  console.log('[data]', data);

  useEffect(() => {
    console.clear();
    console.log('[data]', data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>{data.name}</div>;
};

export default Project;
