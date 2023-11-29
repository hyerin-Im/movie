const MovieInput = ({ mov, changeInput, onSubmit, genRef }) => {
    const { genre, title, actor, date } = mov;

    return (
        <div className="inp">
            <form onSubmit={onSubmit}>
                <p>
                    <label htmlFor="genre">장르</label>
                    <input type="text" value={genre} name="genre" onChange={changeInput} ref={genRef} />
                </p>
                <p>
                    <label htmlFor="">제목</label>
                    <input type="text" value={title} name="title" onChange={changeInput} />
                </p>
                <p>
                    <label htmlFor="">주인공</label>
                    <input type="text" value={actor} name="actor" onChange={changeInput} />
                </p>
                <p>
                    <label htmlFor="">개봉일</label>
                    <input type="text" value={date} name="date" onChange={changeInput} />
                </p>
                <p>
                    <button type="submit">입력</button>
                </p>
            </form>
        </div>
    );
};

export default MovieInput;
