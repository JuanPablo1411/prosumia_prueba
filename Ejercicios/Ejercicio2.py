def trapped_water(heights):
    # Inicializa punteros para el inicio y el fin del arreglo, así como variables para las máximas alturas encontradas a la izquierda y a la derecha.
    left, right = 0, len(heights) - 1
    left_max, right_max = 0, 0
    # Variable para acumular la cantidad de agua atrapada.
    water = 0

    # Itera mientras el puntero izquierdo sea menor que el derecho.
    while left < right:
        # Si la altura a la izquierda es menor que a la derecha, procesa desde la izquierda.
        if heights[left] < heights[right]:
            # Si la altura actual es mayor o igual que la máxima encontrada a la izquierda, actualiza left_max.
            if heights[left] >= left_max:
                left_max = heights[left]
            # Si no, acumula agua atrapada entre left_max y la altura actual.
            else:
                water += left_max - heights[left]
            # Mueve el puntero izquierdo hacia la derecha.
            left += 1
        # Procesamiento similar para el lado derecho.
        else:
            if heights[right] >= right_max:
                right_max = heights[right]
            else:
                water += right_max - heights[right]
            # Mueve el puntero derecho hacia la izquierda.
            right -= 1

    # Retorna la cantidad total de agua atrapada.
    return water


# Ejemplo de uso:
heights = [5, 3, 1, 1, 3, 1]
print(trapped_water(heights)) 
