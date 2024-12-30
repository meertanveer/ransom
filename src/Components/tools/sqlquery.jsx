import { useState } from 'react';
import Swal from 'sweetalert2';

function QueryExecutor() {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState(null);

    // const handleSubmit = async () => {
    //     try {
    //         const response = await fetch('/api/execute-query', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({ query }),
    //         });
    //         const data = await response.json();
    //         setResult(data);
    //     } catch (error) {
    //         console.error('Error executing query:', error);
    //     }
    // };
const handleSubmit = () => {
    if (query === ''){
        Swal.fire("Write complete query first!");
        return
    }
    console.log('done...')
}
    return (
        <div className='flex flex-col items-center gap-4 w-full mx-2'>
            <textarea
                placeholder="Enter SQL query"
                className='w-full h-[200px] outline-none border border-red-500 px-2 py-2 text-blue-500 font-bold focus:bg-yellow-100'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSubmit} className='bg-red-500 px-2 w-[100px] text-white rounded-md py-1 hover:cursor-pointer hover:bg-red-600'>Execute</button>
            {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
        </div>
    );
}

export default QueryExecutor;
