<table>
    <thead>
    <tr>
        <th>Nombre</th>
        <th>Cantidad</th>
        <th>Descripción</th>
    </tr>
    </thead>
    <tbody>
    @foreach ($products as $product)
        <tr>
            <td>{{ $product->name }}</td>
            <td>{{ $product->quantity }}</td>
            <td>{{ $product->description }}</td>
        </tr>
    @endforeach
    </tbody>
</table>