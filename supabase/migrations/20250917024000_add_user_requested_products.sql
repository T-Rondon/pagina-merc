-- Insertar los 5 productos solicitados por el usuario
INSERT INTO public.products (name, description, price, category_id, unit, stock, featured) VALUES
  ('Detergente Multiuso', 'Detergente líquido para todo tipo de superficies', 5.50, (SELECT id FROM categories WHERE name = 'Limpieza'), 'litro', 70, false),
  ('Sardina en Lata', 'Sardinas en salsa de tomate, 155g', 2.10, (SELECT id FROM categories WHERE name = 'Enlatados'), 'unidad', 150, false),
  ('Carne Molida', 'Carne de res molida de primera', 12.00, (SELECT id FROM categories WHERE name = 'Carnes'), 'kg', 25, false),
  ('Jugo de Naranja', 'Jugo de naranja 100% natural, 1 litro', 3.80, (SELECT id FROM categories WHERE name = 'Bebidas'), 'litro', 55, true),
  ('Shampoo', 'Shampoo para todo tipo de cabello, 400ml', 7.00, (SELECT id FROM categories WHERE name = 'Cuidado Personal'), 'unidad', 90, false);
