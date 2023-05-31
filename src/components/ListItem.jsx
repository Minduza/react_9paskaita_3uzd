import "./style.css";
import PropTypes from "prop-types";

const ListItem = ({ text, deleteItem }) => {
  return (
    <div className="listItem">
      <li>{text}</li>
      <button className="deleteBtn" onClick={deleteItem}>
        x
      </button>
    </div>
  );
};

ListItem.propTypes = {
  text: PropTypes.string,
  deleteItem: PropTypes.func,
};

export default ListItem;
