import ICategory from '../../model/interfaces/ICategory';
import './category-item.style.scss';

const CategoryItem = (category: ICategory) => {
  const { imageUrl, title } = category;

  return (
    <div className="category-container">
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="category-body-container">
        <h2>{ title }</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
}

export default CategoryItem;
