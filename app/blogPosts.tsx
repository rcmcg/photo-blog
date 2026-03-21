let blogPosts = [
  {
    id: 0,
    title: "Liminal",
    uploadedDate: "March 16th, 2026",
    description: "Some liminal vibes, not necessarily spaces",
    content: "I don't think I'm using this word correctly, but whatever. Creepy stuff. Things that look a little off...\n" +
      "\n" +
      "<figure>\n" +
      "    <img src=\"/uploads/liminal/hello.jpg\"\n" +
      "         alt=\"Oh, hello\">\n" +
      "    <figcaption>Title: <i>Oh, hello</i>. Captured: February 27th, 2026</figcaption>\n" +
      "</figure>\n" +
      "\n" +
      "<figure>\n" +
      "    <img src=\"/uploads/liminal/bus.jpg\"\n" +
      "         alt=\"Woah, watch it buddy!\">\n" +
      "    <figcaption>Title: <i>Woah, watch it buddy!</i> Captured: February 5th, 2026</figcaption>\n" +
      "</figure>\n" +
      "\n" +
      "<figure>\n" +
      "    <img src=\"/uploads/liminal/mirrored.jpg\"\n" +
      "         alt=\"Mirrored\">\n" +
      "    <figcaption>Title: <i>Mirrored</i>. Captured: February 16th, 2026</figcaption>\n" +
      "</figure>\n" +
      "\n" +
      "<figure>\n" +
      "    <img src=\"/uploads/liminal/tree.jpg\"\n" +
      "         alt=\"Claw\">\n" +
      "    <figcaption>Title: <i>Claw</i>. February 5th, 2026</figcaption>\n" +
      "</figure>"
  },
  {
    id: 1,
    title: "Introduction",
    uploadedDate: "March 20th, 2026",
    description: "An introduction to this blog with 5(+1) of my favourite photos",
    content: "Hello, welcome to my photo blog! I'm not sure what I want to do here, exactly. I'd like to put my photos up so they can \n" +
      "be accessed by anyone. I don't like the idea of posting my photos to social media. I don't like the way social media \n" +
      "algorithmizes everything and makes my brain seek external validation. \n" +
      "\n" +
      "Some photos have a story behind them, pleasant or otherwise. For others, I'd just like to analyze what I like about\n" +
      "it or what I think I could have done differently. Maybe some posts won't have text at all. \n" +
      "\n" +
      "Anyway, this post is meant to be a few of my favourite photos since I started photography in January 2025.\n" +
      "\n" +
      "<figure>\n" +
      "    <img src=\"/uploads/intro/cherry-blossoms.jpg\"\n" +
      "         alt=\"Cherry blossoms with a blue sky and building in the background\">\n" +
      "    <figcaption>Title: <i>Untitled</i>. Captured: March 2nd, 2026</figcaption>\n" +
      "</figure>\n" +
      "\n" +
      "This was a nice afternoon. I live in the West End neighbourhood of Vancouver, BC, and I find it to be quite chatty. As I was taking pictures, I probably\n" +
      "had 4 or 5 people stop and talk to me. \n" +
      "\n" +
      "&nbsp;&nbsp;&nbsp;&nbsp;\"Beautiful, aren't they?\" \n" +
      "\n" +
      "&nbsp;&nbsp;&nbsp;&nbsp;\"Are you getting any good pictures?\"\n" +
      "\n" +
      "&nbsp;&nbsp;&nbsp;&nbsp;\"It's pretty early for these to be out, but I'm not complaining.\"\n" +
      "\n" +
      "I'm not sure if this would happen in other neighbourhoods of Vancouver. Maybe Commercial Drive. I've only been living\n" +
      "downtown since June 2025, so I'm not really the person to ask.\n" +
      "\n" +
      "Anyway, I like the bokeh, the blue sky, and the building in the background. I've been trying to take more pictures of \n" +
      "cherry blossoms but I find it difficult. The blossoms are small, so it's tempting to get close. Often though, the photo \n" +
      "is quite busy with the rest of the tree and blossoms in the background. Heavy bokeh helps, or try to find a branch like this\n" +
      "where the background is more empty. I haven't learned how to take a good photo of the entire tree, it just never comes \n" +
      "out right.\n" +
      "\n" +
      "The next photo illustrates my point about the busyness.\n" +
      "\n" +
      "<figure>\n" +
      "    <img src=\"/uploads/intro/cherry-blossoms-busy.jpg\"\n" +
      "         alt=\"Cherry blossoms close to the trunk of the tree\">\n" +
      "    <figcaption>Title: <i>Untitled</i>. Captured: March 2nd, 2026</figcaption>\n" +
      "</figure>\n" +
      "\n" +
      "Personally, I like this photo a lot, but people seem to prefer the first one.\n" +
      "\n" +
      "<figure>\n" +
      "    <img src=\"/uploads/intro/drill.jpg\"\n" +
      "         alt=\"A construction drill against a white sky\">\n" +
      "    <figcaption>Title: <i>Drill</i>. Captured: February 20th, 2026</figcaption>\n" +
      "</figure>\n" +
      "\n" +
      "I love photographing on an overcast day. It makes it much easier to create compositions such as these where strong\n" +
      "colours and lines can stand out against a totally white background. This photo feels a bit otherworldly to me, as it's\n" +
      "hard to tell WHERE the drill even is with nothing to compare it against. I have found when people react to a photo as\n" +
      "\"striking\" it's usually when there are only a handful of colours in the photo, as here. This is anecdotal and this \n" +
      "ill-informed observation will likely change over time.\n" +
      "\n" +
      "<figure>\n" +
      "    <img src=\"/uploads/intro/world-deece.jpg\"\n" +
      "         alt=\"'World peace' misspelled as 'world deece' on a garden box, with dead plants and a broken dish in the background\">\n" +
      "    <figcaption>Title: <i>Topical</i>. Captured: February 21st, 2026</figcaption>\n" +
      "</figure>\n" +
      "\n" +
      "This one is kind of funny, I feel like it's saying something with the misspelled \"World Peace,\" dead plants, and a broken \n" +
      "dish in the background. I tried adding a bit of bokeh, I notice that the first couple of letters are blurred when that's \n" +
      "maybe not what I wanted. I can't get very close to objects with my camera, they become out of focus.\n" +
      "\n" +
      "<figure>\n" +
      "    <img src=\"/uploads/intro/bear-reflection.jpg\"\n" +
      "         alt=\"Close up of a metallic bear creating interesting reflections\">\n" +
      "    <figcaption>Title: <i>Untitled</i>. Captured: January 31st, 2026</figcaption>\n" +
      "</figure>\n" +
      "\n" +
      "The photography class I was enrolled in was delighted by this one. It's fun to take confusing photographs, people spend \n" +
      "time looking at it trying to guess what it is. But sometimes I get a bit annoyed with a photograph that seems to only find \n" +
      "its value in being confusing. I hope the reflections and colour in the metal are interesting in and of themselves. \n" +
      "\n" +
      "<figure>\n" +
      "    <img src=\"/uploads/intro/olympic-flames.jpg\"\n" +
      "         alt=\"A shot of the Olympic flames lit up near the Vancouver Convention Centre\">\n" +
      "    <figcaption>Title: <i>Untitled</i>. Captured: February 6th, 2026</figcaption>\n" +
      "</figure>\n" +
      "\n" +
      "While taking photos of this thing, someone asked me if I could take their photo in front of the flame with their film camera. \n" +
      "I sheepishly gave a sort of \"okay, well, I'll try...\" which is just the worst kind of response you can possibly give. \n" +
      "Just say you're going to do it or don't, don't make people nervous with your insecurity. I think I felt so new to photography\n" +
      "still that I didn't feel deserving of their trust. It didn't help that it was a film camera. I generally take a few photos \n" +
      "to find the exposure settings I want. We can only hope they had the auto mode on their camera. Given the chance I would \n" +
      "have talked to them a bit longer about their camera, because it was interesting, but I felt like I took probably took a bad photo\n" +
      "and I was embarrassed, so I left. It'd be nice to see it.\n" +
      "\n"
  }
]

export default blogPosts