UPDATE public.products
SET featured = true
WHERE name IN (
  'Detergente Multiuso',
  'Sardina en Lata',
  'Carne Molida',
  'Jugo de Naranja',
  'Shampoo'
);
