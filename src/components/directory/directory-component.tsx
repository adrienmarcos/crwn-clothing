import './directory.styles.scss';

import CategoryItem from "../category-item/category-item.component";
import ICategory from '../../model/interfaces/ICategory';

interface IDirectoryProps {
  categories: ICategory[];
}

const Directory: React.FC<IDirectoryProps> = ({categories}) => {
  return (
    <div className="directory-container">
      {
        categories.map(({ id, title, imageUrl }) => (
          <CategoryItem key={id} id={id} title={title} imageUrl={imageUrl} />
        ))
      }
    </div>
  );
};

export default Directory;
