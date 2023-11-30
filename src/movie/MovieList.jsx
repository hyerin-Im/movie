import MovieItem from "./MovieItem";

const MovieList = ({ data, onDel, onEdit, align }) => {
    return (
        <div className="list">
            <select onChange={align}>
                <option>===정렬===</option>
                <option value="genre">장르</option>
                <option value="title">제목</option>
                <option value="actor">주인공</option>
                <option value="date">개봉일</option>
            </select>
            <table>
                <colgroup>
                    <col className="w1" />
                    <col className="w2" />
                    <col className="w3" />
                    <col className="w4" />
                    <col className="w5" />
                </colgroup>
                <thead>
                    <tr>
                        <th>장르</th>
                        <th>제목</th>
                        <th>주인공</th>
                        <th>개봉일</th>
                        <th>관리</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <MovieItem key={item.id} item={item} onDel={onDel} onEdit={onEdit} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MovieList;
