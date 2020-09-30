import { ReactNode } from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

type Props = {
  children?: ReactNode;
  className: string;
};

const GridLayout: React.FC<any> = ({ children, className }: Props) => (
  <div className={classnames(styles['grid_wrapper'], className)}>{children}</div>
);

export default GridLayout;
