import { S3 } from '@aws-sdk/client-s3';
import slugify from 'slugify';
import xss from 'xss';
import { prisma } from './prisma';

export interface MealForm {
  title: string;
  summary: string;
  instructions: string;
  image: File | string;
  creator: string;
  creator_email: string;
  slug?: string;
}

const s3 = new S3({
  region: 'us-east-1',
});

export async function getMeals() {
  return await prisma.meal.findMany();
}

export async function getMeal(slug: string) {
  return await prisma.meal.findUnique({
    where: { slug },
  });
}

export async function saveMeal(meal: MealForm) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  if (meal.image instanceof File) {
    const extension = meal.image.name.split('.').pop();

    if (!extension) {
      throw new Error('Invalid file extension');
    }

    const fileName = `${meal.slug}.${extension}`;

    const bufferedImage = await meal.image.arrayBuffer();

    await s3.putObject({
      Bucket: 'labattaria-nextjs-demo-users-image',
      Key: fileName,
      Body: Buffer.from(bufferedImage),
      ContentType: meal.image.type,
    });

    meal.image = fileName;
  }

    await prisma.meal.create({
    data: {
      title: meal.title,
      summary: meal.summary,
      instructions: meal.instructions,
      creator: meal.creator,
      creator_email: meal.creator_email,
      image: meal.image as string,
      slug: meal.slug,
    },
  });
}