import { RiDeleteBin6Fill } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';

const MovieItem = ({ item, onDel, onEdit }) => {
    const { id, genre, title, actor, date } = item;
    return (
        <tr>
            <td>{genre}</td>
            <td>{title}</td>
            <td>{actor}</td>
            <td>{date}</td>
            <td>
                <button onClick={() => onEdit(id)}>
                    <FaEdit />
                </button>
                <button onClick={() => onDel(id)}>
                    <RiDeleteBin6Fill />
                </button>
            </td>
        </tr>
    );
};

export default MovieItem;
