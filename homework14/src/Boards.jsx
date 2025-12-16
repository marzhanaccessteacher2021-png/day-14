import { useState } from 'react';
function Boards() {
    const [boards, setBoards] = useState([
            { id: 1, 
            title: 'Board 1',
            description: 'This is the first board',
            createdAt: '2024-01-01',
        },
        {
            id: 2,
            title: 'Board 2',
            description: 'This is the second board',
            createdAt: '2024-01-02',
        },
        { id: 3, 
            title: 'Board 3',
            description: 'This is the third board',
            createdAt: '2024-01-03',
        }
        ]);
 
        
        const handleAddBoard = () => {
            const NewBoard = {
                id: boards.length + 1,
                title: `Board title`,
                description: `Add board description`,
                createdAt: Date(),
            };

            console.log(NewBoard);
            setBoards(prevBoards => [...prevBoards, NewBoard]);
        };

        const deleteBoard = (id) => {
            setBoards(boards.filter(board => board.id !== id));
    

        document.querySelector("#title").value = "";
        document.querySelector("#description").value = "";
        document.querySelector("#createdAt").value = ""; 
        };   

    return (
        <div>
            <h1>Boards</h1>
            <ul>
                {boards.map(board => (
                    <li key={board.id}>
                        <h2>{board.title}</h2>
                        <p>{board.description}</p>
                        <p>{board.createdAt}</p>
                        <button onClick={() => deleteBoard(board.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <input type="text" id="title" placeholder="Title" />
            <input type="text" id="description" placeholder="Description" />
            <input type="date" id="createdAt" placeholder="Created At" />
            <button onClick={handleAddBoard}>Add Board</button>
        </div>
    );
}   



export default Boards;
