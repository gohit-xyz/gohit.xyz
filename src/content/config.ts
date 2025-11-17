import { defineCollection, z } from 'astro:content';

const articlesCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.date().or(z.string()),
		author: z.string().optional(),
		image: z.string().optional(),
		banner: z.string().optional(),
		profile: z.string().optional(),
		tags: z.array(z.string()).optional(),
		draft: z.boolean().optional(),
	}),
});

export const collections = {
	articles: articlesCollection,
};
