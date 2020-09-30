import { useRouter } from 'next/router';
import getConfig from 'next/config';
import fetch from 'unfetch';
import useSWR from 'swr';

import Navigation from '../components/Navigation';
import CategoryPage from '../components/CategoryPage';
import ProjectPage from '../components/ProjectPage';

const { publicRuntimeConfig: conf } = getConfig();
const fetcher = (url) => fetch(url).then((r) => r.json());

const Page: React.FC = () => {
  const router = useRouter();
  const slug = router.query.slug || [];
  const { data, error } = useSWR(`${conf.api.url}getProject`, fetcher);

  if (error || !data) return <div>Loading...</div>;
  return (
    <div>
      <Navigation />
      {slug.length === 1 ? <CategoryPage data={data} slug={slug} /> : <ProjectPage {...slug} />}
    </div>
  );
};

export default Page;
