/**
 * REFERENCES
 *
 * Array Iteration Methods: https://www.w3schools.com/JS/js_array_iteration.asp
 * String Methods: https://www.w3schools.com/Jsref/jsref_includes.asp
 */

const channels = require("./channels.json");
// console.log(channels[0]);

/**************************************************************
 * getChannelName(channel)
 * - receives a channel object
 * - returns the name of the channel
 ****************************************************************/
function getChannelName(channel) {
  return channel.name;
}

console.log(getChannelName(channels[0]));

/**************************************************************
 * numberOfVideos(channel)
 * - receives a channel object
 * - returns the number of videos that channel has
 ****************************************************************/
function numberOfVideos(channel) {
  return channel.videos.length;
}
console.log(numberOfVideos(channels[0]));

/**************************************************************
 * channelHasVideo(videoTitle, channel):
 * - receives a video title (string)
 * - receives a channel object
 * - returns true if the channel object has a video that matches the given video title
 * - returns false otherwise
 *
 * BONUS: use iteration method `.some()`
 ****************************************************************/
function channelHasVideo(videoTitle, channel) {
  // const result = channel.videos.filter((video) => video.title === videoTitle);

  // return result.length > 0;
  return channel.videos.some((video) => video.title == videoTitle);
}

console.log(channelHasVideo("The Universal S", channels[0]));
console.log(channelHasVideo("The Universal S", channels[1]));

/**************************************************************
 * getChannelByName(channelName, channels):
 * - receives a channel name (string)
 * - receives an array of channel objects
 * - returns the channel object with the same name as the channelName provided
 *
 * BONUS: use iteration method `.find()`
 ****************************************************************/
function getChannelByName(channelName, channels) {
  const sameName = channels.find((channel) => channel.name === channelName);
  return sameName;
}
console.log(getChannelByName("PowerfulJRE", channels));

/**************************************************************
 * getChannelByVideoTitle(videoTitle, channels):
 * - receives a video title (string)
 * - receives an array of channel objects
 * - returns the channel object that contains a video with the video title provided
 *
 * BONUS: use iteration methods `.find()` and `.some()`
 ****************************************************************/
function getChannelByVideoTitle(videoTitle, channels) {
  const chan = channels.find((channel) =>
    channel.videos.some((video) => video.title === videoTitle)
  );
  return chan;
}
console.log(getChannelByVideoTitle("The Universal S", channels));

/**************************************************************
 * searchChannels(query, channels):
 * - receives a query (string)
 * - recieves an array of channel objects
 * - returns an array of the channel objects that contain the query in their name/description.
 *
 * Hint: use string method `.includes()` and iteration method `.filter()`
 ****************************************************************/
function searchChannels(query, channels) {
  const queryLowerCase = query.toLowerCase();
  const searchChannel = channels.filter((channel) => {
    const lowerChannelName = channel.name.toLowerCase();
    const lowerChannelDescription = channel.description.toLowerCase();

    return (
      lowerChannelName.includes(queryLowerCase) ||
      lowerChannelDescription.includes(queryLowerCase)
    );
  });
  return searchChannel;
}
console.log(searchChannels("the", channels));

module.exports = {
  getChannelName,
  numberOfVideos,
  channelHasVideo,
  getChannelByName,
  getChannelByVideoTitle,
  searchChannels,
};
