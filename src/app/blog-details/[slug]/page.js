import BlogDetails from '@/pageComponents/BlogDetails/BlogDetails'
import React from 'react'

// export async function generateMetadata({ params, searchParams }, parent) {
//   const slug = (await params).slug

//   return {
//     title: slug,
//     description: 'This is a blog post',
//   }
// }

export default async function Page({ params }) {
  const slug = (await params).slug

  // console.log('slug:', slug);


  return (
    <BlogDetails
      slug={slug}
    />
  )
}