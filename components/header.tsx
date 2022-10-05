import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

export default function Header(): JSX.Element {
  const title = 'Title'
  const desc = 'Write a description that is no more than 150 characters.'
  const ogImgRelativePath = '/og.png'

  const siteURL = 'https://example.com'
  const ogImageURL = `${siteURL}${ogImgRelativePath}`
  const pathName = useRouter().pathname
  const pageURL = pathName === '/' ? siteURL : siteURL + pathName
  const twitterHandle = '@YOURTWITTERHANDLE'
  const siteName = 'example.com'

  return (
    <NextSeo
      title={title}
      description={desc}
      canonical={pageURL}
      openGraph={{
        type: 'website',
        locale: 'en_US', //  Default is en_US
        url: pageURL,
        title,
        description: desc,
        images: [
          {
            url: ogImageURL,
            width: 1200,
            height: 630,
            alt: 'Enter alt text for image',
          },
        ],
        site_name: siteName,
      }}
      twitter={{
        handle: twitterHandle,
        site: twitterHandle,
        cardType: 'summary_large_image',
      }}
      additionalMetaTags={[
        {
          property: 'author',
          content: title,
        },
      ]}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: `${siteURL}/favicon.ico`,
        },
        // {
        //   rel: "manifest",
        //   href: "/site.manifest",
        // },
      ]}
    />
  )
}
