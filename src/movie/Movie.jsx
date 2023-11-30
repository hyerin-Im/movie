import { useEffect, useRef, useState } from "react";
import MovieInput from "./MovieInput";
import MovieList from "./MovieList";
import "./movie.scss";

const Movie = () => {
    const [data, setData] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [mov, setMov] = useState({
        genre: "",
        title: "",
        actor: "",
        date: "",
    });

    const genRef = useRef();

    const { genre, title, actor, date } = mov;

    const changeInput = (e) => {
        const { name, value } = e.target;
        setMov({
            ...mov,
            [name]: value,
        });
    };

    const align = (e) => {
        const { value } = e.target;
        setData(
            [...data].sort((a, b) => {
                return a[value] > b[value] ? 1 : -1;
            })
        );
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!genre || !date) return;

        if (isEdit) {
            setData(data.map((item) => (item.id === mov.id ? mov : item)));
            // 수정
            setMov({
                genre: "",
                title: "",
                actor: "",
                date: "",
            });
            setIsEdit(false);
            genRef.current.focus();
        } else {
            setData([...data, mov]);
            setMov({
                genre: "",
                title: "",
                actor: "",
                date: "",
            });
            genRef.current.focus();
        }
    };

    useEffect(() => {
        genRef.current.focus();
    }, [isEdit]);

    const onEdit = (id) => {
        setIsEdit(true);
        setMov(data.find((item) => item.id === id));
    };

    const onDel = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
    return (
        <div className="inner">
            <h2>영화관리 리스트</h2>
            <MovieInput mov={mov} changeInput={changeInput} onSubmit={onSubmit} genRef={genRef} />
            <MovieList data={data} onDel={onDel} onEdit={onEdit} align={align} />
        </div>
    );
};

export default Movie;
