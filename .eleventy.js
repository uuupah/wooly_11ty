module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/_css");
  eleventyConfig.addPassthroughCopy("./src/_img");
  eleventyConfig.addShortcode("tags", function (tagList) {
    var out = "";
    for (tag in tagList) {
      out += `<div class="tag-span">${tag}</div>`;
      //   if (tag in grey_tags) {
      //     out += `<div class="tag-span tag-grey">${tag}</div>`;
      //   } else if (tag in red_tags) {
      //     console.log("red");
      //     out += `<div class="tag-span tag-red">${tag}</div>`;
      //   } else {
      //     console.log("other");
      //     out += `<div class="tag-span">${tag}</div>`;
      //   }
    }
    return tagList;
  });

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
    },
  };
};
