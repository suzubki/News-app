import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { MainLayout, DocumentSection } from '../../components'

import { dbArticles } from '../../database'
import { IDocument } from '../../interfaces'

interface Props {
  article: IDocument
}

const SlugPage: NextPage<Props> = ({ article }: Props) => {
  return (
    <MainLayout>
      <DocumentSection data={article} />
    </MainLayout>
  )
}

export default SlugPage

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const articlesSlug = await dbArticles.getAllArticles()

  return {
    paths: articlesSlug.map((document) => ({
      params: { slug: document.slug },
    })),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = '' } = params as { slug: string }
  const article = await dbArticles.getArticleBySlug(slug)

  // TODO: Manejo de error para llevar a la página de error
  if (!article) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { article },
    revalidate: 60 * 60 * 4,
  }
}
