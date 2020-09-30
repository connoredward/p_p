import getConfig from 'next/config';
import fetch from 'unfetch';
import useSWR from 'swr';

import styles from './styles.scss';

const { publicRuntimeConfig: conf } = getConfig();
const fetcher = (url) => fetch(url).then((r) => r.json());

const Navigation: React.FC<any> = () => {
  const { data, error } = useSWR(`${conf.api.url}getCategory`, fetcher);
  if (error || !data) return <div></div>;
  return (
    <div className={styles['navigation_wrapper']}>
      {data.map(({ title, slug }, index) => {
        return (
          <a key={index} href={`/${slug}`}>
            {title}
          </a>
        );
      })}
    </div>
  );
};

export default Navigation;
