let blogPostsMetadata = [
  {
    id: 1,
    title: "Liminal",
    uploadedDate: "March 16th, 2026",
    description: "Some liminal vibes, not necessarily spaces",
  },
  {
    id: 0,
    title: "Introduction",
    uploadedDate: "March 20th, 2026",
    description: "An introduction to this blog with 5(+1) of my favourite photos",
  }
]

export default blogPostsMetadata.sort(function(a, b) {
  return a.id - b.id
})