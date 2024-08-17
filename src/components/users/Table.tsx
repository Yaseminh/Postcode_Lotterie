import React from 'react';
import bg from '../../assets/bg.jpg';

interface TableProps {
    list: Array<{ [key: string]: any }>;
    headers?: string[];
    rows?: number;
}

const Table: React.FC<TableProps> = ({ list, headers, rows = Infinity }) => {
    const keys = headers || (list[0] ? Object.keys(list[0]) : []);
    const limitedList = list.slice(0, rows);

    return (
        <main
            className="flex h-screen justify-center bg-white" // Arka plan rengini beyaz yapıyoruz
            style={{ paddingTop: '10vh' }} // Yukarıdan biraz boşluk bırakır
        >
            <section className="lg:w-6/12 md:w-[90%] sm:w-[90%] bg-white p-5 rounded-xl shadow-lg">
                <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg">
                    <thead>
                    <tr className="bg-gray-100 dark:bg-blue-900/40">
                        {keys.map((key) => (
                            <th
                                key={key}
                                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700" // Beyaz yazı rengi yerine koyu gri
                            >
                                {key}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody
                        style={{
                            backgroundImage: `url(${bg})`,
                            backgroundRepeat: 'repeat',
                            backgroundSize: 'auto',
                            backgroundPosition: 'center',
                        }}
                        className="bg-transparent"
                    >
                    {limitedList.length > 0 ? (
                        limitedList.map((item, index) => (
                            <tr
                                key={index}
                                className="hover:bg-blue-300 hover:font-semibold hover:scale-110 transition-all ease-in-out dark:hover:bg-blue-800 dark:hover:text-black"
                            >
                                {keys.map((key) => (
                                    <td
                                        key={key}
                                        className="px-6 py-4 text-sm text-white"
                                    >
                                        {item[key]}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={keys.length} className="text-center font-bold text-white">
                                No data available
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </section>
        </main>
    );
};

export default Table;
