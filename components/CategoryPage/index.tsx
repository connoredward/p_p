import GridLayout from '../GridLayout';

import styles from './styles.scss';

type Props = {
  data: {
    category: string;
    _id: string;
    title: string;
    img: string;
    video: string;
  }[];
  slug: string;
};

const CategoryPage: React.FC<any> = ({ data, slug }: Props) => {
  console.log(data);
  return (
    <GridLayout className={styles['card_styles']}>
      {data
        .filter(({ category }) => category === slug[0])
        .map(({ _id, img }, index) => (
          <a key={index} href={`/${slug[0]}/${_id}`}>
            <div style={{ backgroundImage: `url(${img})` }} />
            {/* <video width="100%" height="100" autoPlay muted>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
          </a>
        ))}
    </GridLayout>
  );
};

export default CategoryPage;
