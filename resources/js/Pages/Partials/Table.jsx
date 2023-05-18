import {Link, useForm} from '@inertiajs/react';
import pluralize       from 'pluralize';

export default function Table({
    routesKey,
    routesParameters = {},
    rows,
    values,
}) {
    const {delete: destroy} = useForm();

    const handleDelete = async (value) => {
        destroy(route(`${routesKey}.destroy`, {
            ...routesParameters,
            [pluralize.singular(routesKey)]: value.id,
        }), {
            preserveScroll: true,
            onSuccess:      () => alert('Eliminado correctamente'),
            onError:        () => () => alert('Ha ocurrido un error'),
        });
    };

    const Td = ({children}) => (
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {children}
        </td>
    );

    const Th = ({children}) => (
        <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
            {children}
        </th>
    );

    return (
        <div className="mt-4 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    {Object.keys(rows).map((title, key) => <Th key={key}>{title}</Th>)}
                    <Th/>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {values.map(value => (
                    <tr key={value.id}>
                        {Object.keys(rows).map((rowKey, index) => (
                            <Td key={index}>{value[rowKey]}</Td>
                        ))}
                        <Td>
                            <Link
                                href={route(`${routesKey}.show`, {
                                    ...routesParameters,
                                    [pluralize.singular(routesKey)]: value.id,
                                })}
                                className="text-blue-600 hover:text-blue-900 mr-2"
                            >
                                Ver
                            </Link>
                            <Link
                                href={route(`${routesKey}.edit`, {
                                    ...routesParameters,
                                    [pluralize.singular(routesKey)]: value.id,
                                })}
                                className="text-green-600 hover:text-green-900 mr-2"
                            >
                                Editar
                            </Link>
                            <button
                                onClick={() => handleDelete(value)}
                                className="text-red-600 hover:text-red-900"
                            >
                                Eliminar
                            </button>
                        </Td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
