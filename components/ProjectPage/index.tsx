import getConfig from 'next/config';
import fetch from 'unfetch';
import useSWR from 'swr';

const { publicRuntimeConfig: conf } = getConfig();
const fetcher = (url) => fetch(url).then((r) => r.json());

type Props = {
  slug: string;
};

const ProjectPage: React.FC<any> = (slug: Props) => {
  const { data, error } = useSWR(`${conf.api.url}getProject/${slug[1]}`, fetcher);

  if (error || !data) return <div>Loading...</div>;
  return (
    <div>
      {data.title}
      <img src={data.img} />
    </div>
  );
};

export default ProjectPage;
