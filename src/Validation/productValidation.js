import { object, string, number, url, minLength, custom, value } from 'valibot';

export const productSchema = object({
  title: string([minLength(1, 'Title is required')]),
  price: number('Price must be a number'),
  description: string([minLength(1, 'Description is required')]),
  category: string([minLength(1, 'Category is required')]),
  image: custom(
    (value) => (typeof value === 'string' && value.trim() !== '') || value instanceof File,
    'Image must be a file or a valid URL'),
});
