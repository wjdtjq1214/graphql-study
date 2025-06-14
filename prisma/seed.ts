import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const imzz = await prisma.user.upsert({
    where: { email: 'imzz@prisma.io' },
    update: {},
    create: {
      email: 'imzz@prisma.io',
      password: 'imzzpw',
      name: 'imzz',
      posts: {
        create: [
          {
            title: 'imzz_post',
            content: 'graphql_post',
            comments: {
              create: [
                {
                  content: 'imzz_post_comment',
                }, {
                  content: 'imzz_post_comment2',
                },
              ]
            }
          }, {
            title: 'imzz_post2',
            content: 'imzz_post2',
            comments: {
              create: [
                {
                  content: 'imzz_post2_comment',
                }, {
                  content: 'imzz_post2_comment2',
                },
              ],
            },
          },
        ],
      },
    },
  })

  const imzz2 = await prisma.user.upsert({
    where: { email: 'imzz2@prisma.io' },
    update: {},
    create: {
      email: 'imzz2@prisma.io',
      password: 'imzzpw2',
      name: 'imzz2',
      posts: {
        create: [
          {
            title: 'imzz2_post',
            content: 'graphql_post',
            comments: {
              create: [
                {
                  content: 'imzz2_post_comment',
                }, {
                  content: 'imzz2_post_comment2',
                },
              ]
            }
          }, {
            title: 'imzz2_post2',
            content: 'imzz2_post2',
            comments: {
              create: [
                {
                  content: 'imz2_post2_comment',
                }, {
                  content: 'imzz2_post2_comment2',
                },
              ],
            },
          },
        ],
      },
    },
  })

  console.log({ imzz, imzz2 })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })