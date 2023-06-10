const HomeData = () => {

    const arr = [
        { id: 1, name: "Frank", age: 35 },
        { id: 2, name: "Simon", age: 25 },
        { id: 3, name: "Kevin", age: 15 },
    ]

    const lowestAge = arr.filter((el) => el.age < 25);
    return (
        <>
            {/* {lowestAge.map((el) => (
                <div className="age" key={el.id}>
                    {el.age}
                </div>
            ))} */}
            {arr.map((el) => (
                <div className="name" key={el.id}>
                    {el.age * el.age}
                </div>
            ))}
        </>
    );
}

export default HomeData;