def min_steps(coordinates):
    # Inicia un contador de pasos en 0.
    steps = 0
    # Itera sobre la lista de coordenadas hasta el penúltimo elemento.
    for i in range(len(coordinates) - 1):
        # Obtiene las coordenadas del punto actual (x1, y1) y del siguiente (x2, y2).
        x1, y1 = coordinates[i]
        x2, y2 = coordinates[i + 1]
        # Suma al contador de pasos el mayor desplazamiento entre x o y.
        steps += max(abs(x2 - x1), abs(y2 - y1))
    # Retorna el total de pasos necesarios para recorrer todas las coordenadas.
    return steps

# Ejemplo de uso:
coordinates = [(0, 0), (1, 2), (1, 3)]
print(min_steps(coordinates))  # Salida esperada: 3
