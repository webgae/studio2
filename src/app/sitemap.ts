import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blogger';
import { createPostSlug } from '@/lib/utils';

const URL = 'https://www.expertowordpress.org/'; // Reemplaza con tu dominio final

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Añadir las rutas estáticas
  const staticRoutes = [
    {
      url: `${URL}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${URL}blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${URL}services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${URL}precios`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${URL}proyectos`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${URL}contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ];
  
  // 2. Añadir las rutas de los servicios
  const servicesRoutes = [
    'desarrollo-web',
    'optimizacion-wpo',
    'reparacion-errores',
    'mantenimiento-wordpress',
    'consultoria-seo',
    'consultoria-formacion'
  ].map((service) => ({
    url: `${URL}services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // 3. Añadir las rutas dinámicas de los posts del blog
  let allBlogPosts = [];
  try {
    // Fetch a large number of posts to include as many as possible.
    // Blogger API maxResults is 500. This should cover most blogs.
    const postData = await getAllPosts(500); 
    if (postData && postData.items) {
      allBlogPosts = postData.items;
    }
  } catch (error) {
    console.error('Error fetching posts for sitemap:', error);
    // Continue with static routes even if fetching posts fails
  }

  const postRoutes = allBlogPosts.map((post) => ({
    url: `${URL}posts/${createPostSlug(post.title, post.id)}`,
    lastModified: new Date(post.updated),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // 4. Combinar todas las rutas
  return [...staticRoutes, ...servicesRoutes, ...postRoutes];
}
