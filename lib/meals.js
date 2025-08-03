import { S3 } from '@aws-sdk/client-s3';
import slugify from 'slugify';
import xss from 'xss';
import { prisma } from './prisma';

const s3 = new S3({
  region: 'us-east-1',
});

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return await prisma.meal.findMany();
}

export async function getMeal(slug) {
  console.log('Looking for slug:', slug);
  return await prisma.meal.findUnique({
    where: { slug },
  });
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;

  const bufferedImage = await meal.image.arrayBuffer();

  await s3.putObject({
    Bucket: 'labattaria-nextjs-demo-users-image',
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: meal.image.type,
  });

  meal.image = fileName;

  await prisma.meal.create({
    data: {
      title: meal.title,
      summary: meal.summary,
      instructions: meal.instructions,
      creator: meal.creator,
      creator_email: meal.creator_email,
      image: meal.image,
      slug: meal.slug,
    },
  });
}